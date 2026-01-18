
import { X } from 'lucide-react';

const ManualEntryModal = ({ onClose }: any) => (
  <div className="fixed inset-0 z-[100] flex justify-end">
    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
    <div className="w-full max-w-lg bg-white h-full shadow-2xl relative z-10 p-10 animate-in slide-in-from-right duration-500">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight text-center w-full">Quick Entry</h2>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full absolute right-8"><X size={24}/></button>
      </div>
      
      <form className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
          <input type="text" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="Johnathan Doe" />
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Assignment Method</label>
          <div className="grid grid-cols-2 gap-4">
            <button type="button" className="p-4 rounded-2xl border-2 border-blue-600 bg-blue-50 text-blue-600 font-bold text-xs">Round Robin</button>
            <button type="button" className="p-4 rounded-2xl border-2 border-slate-100 text-slate-400 font-bold text-xs">Manual Assign</button>
          </div>
        </div>

        <button className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-black tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 uppercase text-xs">
          Submit Lead
        </button>
      </form>
    </div>
  </div>
);

export default ManualEntryModal;