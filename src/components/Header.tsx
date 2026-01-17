import { Search, Bell, Plus } from 'lucide-react';

const Header = () => (
  <header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 px-8 flex items-center justify-between sticky top-0 z-40">
    <div className="flex items-center w-full max-w-xl bg-slate-100/50 rounded-2xl px-4 py-2.5 border border-transparent focus-within:border-blue-500/30 focus-within:bg-white transition-all">
      <Search className="text-slate-400" size={18} />
      <input 
        type="text" 
        placeholder="Search for bookings, clients, or flights..." 
        className="bg-transparent border-none focus:ring-0 text-sm ml-3 w-full font-medium"
      />
    </div>

    <div className="flex items-center gap-5">
      <button className="p-2.5 text-slate-500 hover:bg-white hover:shadow-sm rounded-xl transition-all relative">
        <Bell size={20} />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      
      <div className="h-8 w-[1px] bg-slate-200"></div>
      
      <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-xl shadow-slate-200 hover:bg-blue-600 transition-all flex items-center gap-2">
        <Plus size={18} /> New Trip
      </button>
    </div>
  </header>
);

export default Header;