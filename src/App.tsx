import  { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Leads from './pages/Leads.tsx';
import Itineraries from './pages/Itineraries.tsx';
import Finance from './pages/Finance.tsx';

// Lazy load your premium components


const Layout = lazy(() => import('./components/Layout.tsx')); // The Sidebar/Header shell

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Main CRM Shell */}
          <Route path="/" element={<Layout />}>
            {/* Redirect base path to dashboard */}
            <Route index element={<Navigate to="/dashboard" replace />} /> 
            
            <Route path="dashboard" element={<Dashboard/>} />
             <Route path="leads" element={<Leads />} />
            <Route path="itineraries" element={<Itineraries />} />
            <Route path="finance" element={<Finance />} />
            {/* Settings & Profile */}
            <Route path="settings" element={<div>Settings Page</div>} />
          </Route>

          {/* Independent pages (Login/Error) */}
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

// A "Classy" Loading Spinner
const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-[#F0F2F5]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-slate-500 font-medium animate-pulse">Loading VoyageOS...</p>
    </div>
  </div>
);

export default App;