import React from 'react';
import { 
  Search, Filter, Upload, Download, 
  Plus, UserPlus, Trash2, ChevronDown 
} from 'lucide-react';

interface LeadToolbarProps {
  selectedCount: number;
  onManualAdd: () => void;
  onImportClick: () => void;
}

const LeadToolbar: React.FC<LeadToolbarProps> = ({ 
  selectedCount, 
  onManualAdd, 
  onImportClick 
}) => {
  return (
    <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-white/50 backdrop-blur-sm">
      
      {/* LEFT SIDE: SEARCH & FILTERS */}
      <div className="flex items-center gap-4 flex-1 min-w-[300px]">
        <div className="relative group flex-1 max-w-sm">
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" 
            size={18} 
          />
          <input 
            type="text" 
            placeholder="Search leads, destinations..." 
            className="w-full pl-12 pr-4 py-2.5 bg-slate-100/50 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all outline-none"
          />
        </div>
        
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
          <Filter size={16} className="text-slate-400" />
          Filters
          <ChevronDown size={14} className="text-slate-300" />
        </button>
      </div>

      {/* RIGHT SIDE: ACTIONS */}
      <div className="flex items-center gap-3">
        {/* CONTEXTUAL ACTIONS: Visible only when leads are selected */}
        {selectedCount > 0 && (
          <div className="flex items-center gap-2 mr-4 pr-4 border-r border-slate-200 animate-in fade-in slide-in-from-right-2">
            <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg uppercase tracking-wider mr-2">
              {selectedCount} Selected
            </span>
            <button className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all group relative">
              <UserPlus size={18} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Bulk Assign</span>
            </button>
            <button className="p-2.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all group relative">
              <Trash2 size={18} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Delete</span>
            </button>
          </div>
        )}

        {/* STANDARD ACTIONS */}
        <div className="flex gap-2">
          <button 
            onClick={onImportClick}
            className="p-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl border border-slate-100 transition-all"
            title="Import Leads"
          >
            <Upload size={18} />
          </button>
          <button 
            className="p-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl border border-slate-100 transition-all"
            title="Export CSV"
          >
            <Download size={18} />
          </button>
        </div>

        <button 
          onClick={onManualAdd}
          className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-xl shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-100 transition-all flex items-center gap-2 active:scale-95"
        >
          <Plus size={18} />
          <span className="hidden sm:inline">Add Lead</span>
        </button>
      </div>
    </div>
  );
};

export default LeadToolbar;