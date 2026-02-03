SET search_path TO proj_3af73474;

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table
-- Stores public user information. Linked to auth via user_id, but decoupled from auth schema.
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL, -- Logical reference to auth.users
    email TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookup by auth ID
CREATE INDEX idx_profiles_user_id ON profiles(user_id);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies for Profiles
CREATE POLICY "Users can read own profile" ON profiles
    FOR SELECT USING (user_id::text = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (user_id::text = current_setting('request.jwt.claims', true)::json->>'sub');

CREATE POLICY "Users can insert own profile" ON profiles
    FOR INSERT WITH CHECK (user_id::text = current_setting('request.jwt.claims', true)::json->>'sub');


-- 2. Campaigns Table (The ListBoosts)
CREATE TABLE campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    benefits JSONB DEFAULT '[]'::jsonb,
    resource_url TEXT,
    preview_image_url TEXT,
    theme_config JSONB DEFAULT '{}'::jsonb,
    is_published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_campaigns_owner_id ON campaigns(owner_id);
CREATE INDEX idx_campaigns_slug ON campaigns(slug);

ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

-- Policies for Campaigns
CREATE POLICY "Owners can CRUD own campaigns" ON campaigns
    USING (owner_id IN (
        SELECT id FROM profiles WHERE user_id::text = current_setting('request.jwt.claims', true)::json->>'sub'
    ));

CREATE POLICY "Public can read published campaigns" ON campaigns
    FOR SELECT USING (is_published = true);


-- 3. Leads Table (Subscribers)
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID NOT NULL REFERENCES campaigns(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    downloaded_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_leads_campaign_id ON leads(campaign_id);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policies for Leads
CREATE POLICY "Campaign owners can view leads" ON leads
    FOR SELECT USING (
        campaign_id IN (
            SELECT id FROM campaigns WHERE owner_id IN (
                SELECT id FROM profiles WHERE user_id::text = current_setting('request.jwt.claims', true)::json->>'sub'
            )
        )
    );

CREATE POLICY "Public can insert leads" ON leads
    FOR INSERT WITH CHECK (true); 


-- Utilities: Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_modtime BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_campaigns_modtime BEFORE UPDATE ON campaigns FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
