import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Map, CreditCard, ChevronLeft, Menu, Globe, Settings } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.aside 
      animate={{ width: isOpen ? 260 : 85 }}
      className="h-screen bg-white border-r border-slate-200 flex flex-col relative z-50 shadow-2xl shadow-slate-200/50"
    >
      {/* Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-12 bg-slate-900 text-white p-1.5 rounded-full shadow-xl hover:scale-110 transition-transform z-50"
      >
        {isOpen ? <ChevronLeft size={14} /> : <Menu size={14} />}
      </button>

      {/* Brand */}
      <div className="h-24 flex items-center px-6">
        <div className="min-w-[45px] h-[45px] bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
          <Globe className="text-white" size={24} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="ml-4 font-black text-xl tracking-tighter text-slate-900"
            >
              DREAM ESCAPE
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        <NavItem to="/dashboard" icon={<LayoutDashboard size={20}/>} label="Overview" isOpen={isOpen} />
        <NavItem to="/leads" icon={<Users size={20}/>} label="Lead Engine" isOpen={isOpen} />
        <NavItem to="/itineraries" icon={<Map size={20}/>} label="Planner" isOpen={isOpen} />
        <NavItem to="/finance" icon={<CreditCard size={20}/>} label="Treasury" isOpen={isOpen} />
      </nav>

      {/* Bottom Settings */}
      <div className="p-4 border-t border-slate-100">
        <NavItem to="/settings" icon={<Settings size={20}/>} label="Config" isOpen={isOpen} />
      </div>
    </motion.aside>
  );
};

const NavItem = ({ to, icon, label, isOpen }:any) => (
  <NavLink 
    to={to}
    className={({ isActive }) => `
      flex items-center p-3.5 rounded-2xl transition-all duration-300 group relative
      ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
    `}
  >
    <div className="min-w-[20px]">{icon}</div>
    <AnimatePresence>
      {isOpen && (
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="ml-4 font-bold text-sm whitespace-nowrap"
        >
          {label}
        </motion.span>
      )}
    </AnimatePresence>
  </NavLink>
);

export default Sidebar;