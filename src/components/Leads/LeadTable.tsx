
import { MoreHorizontal, Mail, Phone } from 'lucide-react';

const LeadTable = () => {
  const leads = [
    { id: 1, name: "Alice Thompson", destination: "Maldives Luxury", source: "Facebook Ads", status: "Qualified", score: 85 },
    { id: 2, name: "Mark Peterson", destination: "Swiss Alps Tour", source: "Website Form", status: "New", score: 40 },
    // Add more mock data...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100">
            <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Details</th>
            <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Lead Source</th>
            <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
            <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Intent Score</th>
            <th className="p-5"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {leads.map((lead) => (
            <tr key={lead.id} className="hover:bg-slate-50/80 transition-all group">
              <td className="p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{lead.name}</p>
                    <p className="text-xs text-slate-400 font-medium">{lead.destination}</p>
                  </div>
                </div>
              </td>
              <td className="p-5">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black uppercase border border-slate-200">
                  {lead.source}
                </span>
              </td>
              <td className="p-5">
                <span className={`px-2 py-1 rounded text-[10px] font-bold ${lead.status === 'New' ? 'text-blue-600' : 'text-emerald-600'}`}>
                  ● {lead.status}
                </span>
              </td>
              <td className="p-5">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-slate-100 rounded-full max-w-[60px] overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${lead.score}%` }} />
                  </div>
                  <span className="text-xs font-bold text-slate-400">{lead.score}</span>
                </div>
              </td>
              <td className="p-5 text-right">
                 <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-blue-600"><Mail size={16}/></button>
                    <button className="p-2 text-slate-400 hover:text-blue-600"><Phone size={16}/></button>
                    <button className="p-2 text-slate-400"><MoreHorizontal size={16}/></button>
                 </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;