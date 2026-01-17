
import { Upload,  FileText } from 'lucide-react';

const BulkImportModal = ({ onClose }: any) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
    <div className="w-full max-w-xl bg-white rounded-[40px] p-12 relative z-10 animate-in zoom-in-95 duration-300">
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[28px] flex items-center justify-center mx-auto mb-6">
          <FileText size={40} />
        </div>
        <h2 className="text-3xl font-black text-slate-900">Bulk Import</h2>
        <p className="text-slate-500 font-medium">Sync your Excel/CSV database instantly.</p>
      </div>

      <div className="border-4 border-dashed border-slate-100 rounded-[40px] p-16 text-center group hover:border-blue-400 transition-all cursor-pointer bg-slate-50/50">
        <Upload className="mx-auto text-slate-300 group-hover:text-blue-500 mb-4" size={48} />
        <p className="text-sm font-black text-slate-600 uppercase tracking-widest">Drop CSV File</p>
      </div>

      <div className="mt-10 flex gap-4">
        <button onClick={onClose} className="flex-1 py-4 text-slate-400 font-bold">Cancel</button>
        <button className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200">Analyze</button>
      </div>
    </div>
  </div>
);

export default BulkImportModal;