# Schema Plan - ListBoost

## Overview
ListBoost requires a schema to manage landing pages (ListBoosts), user subscriptions (Leads), and the associated resources. We will leverage Supabase Auth for user management (creators).

## Tables

### 1. `profiles`
- **Description**: Stores profile information for the creators (users). Syncs with `auth.users`.
- **Columns**:
  - `id` (uuid, PK): References `auth.users.id`.
  - `email` (text): User's email address.
  - `full_name` (text, nullable): User's display name.
  - `avatar_url` (text, nullable): URL to profile picture.
  - `created_at` (timestamptz): Timestamp of creation.
  - `updated_at` (timestamptz): Timestamp of last update.

### 2. `campaigns` (The "ListBoost" Landing Pages)
- **Description**: Represents a specific landing page offering a resource.
- **Columns**:
  - `id` (uuid, PK): Unique identifier.
  - `owner_id` (uuid, FK): References `profiles.id`. The creator of this campaign.
  - `slug` (text, unique): URL-friendly identifier for the public landing page (e.g., `listboost.com/my-great-resource`).
  - `title` (text): The main headline of the landing page.
  - `tagline` (text, nullable): Sub-headline or short description.
  - `description` (text, nullable): Full description of the offer.
  - `benefits` (jsonb, nullable): Array of benefit strings (e.g., `["Easy setup", "Instant PDF"]`).
  - `resource_url` (text): The URL of the file/resource to be downloaded (stored in Storage or external).
  - `preview_image_url` (text, nullable): Image showing what the resource looks like.
  - `theme_config` (jsonb, nullable): customization (colors, etc.), defaults to standard if null.
  - `is_published` (boolean): Whether the page is live. Default `true`.
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

### 3. `leads`
- **Description**: Subscribers who have signed up via a campaign.
- **Columns**:
  - `id` (uuid, PK): Unique identifier.
  - `campaign_id` (uuid, FK): References `campaigns.id`.
  - `email` (text): The subscriber's email.
  - `downloaded_at` (timestamptz, nullable): When they accessed the resource.
  - `created_at` (timestamptz): When they subscribed.

## Relationships
- `profiles` (1) -> (Many) `campaigns`
- `campaigns` (1) -> (Many) `leads`

## Security (RLS)
- **profiles**: Users can only read/update their own profile.
- **campaigns**: 
  - `owner` can CRUD their own campaigns.
  - `public` can READ published campaigns (via slug lookup).
- **leads**:
  - `owner` (of the campaign) can READ leads associated with their campaigns.
  - `public` (anon) can INSERT into leads (subscribing).

## Views / Functions
- Potential need for a function to increment download counts if we track analytics separately later, but standard count queries on `leads` should suffice for MVP.
