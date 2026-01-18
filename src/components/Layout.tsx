
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // The Sidebar component we built earlier
import Header from './Header';   // The Top bar we built earlier

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#F0F2F5] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          {/* This is where the specific page content will appear */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;