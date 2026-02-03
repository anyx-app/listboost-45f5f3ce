import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route index element={<Home />} />
        {/* Placeholder for future auth/dashboard routes */}
        <Route path="*" element={<div className="p-20 text-center text-slate-500">Page Not Found</div>} />
      </Route>
    </Routes>
  );
}
