import React from 'react';
import { Zap, RefreshCw, CheckCircle2 } from 'lucide-react';

const LeadStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <StatCard label="Total Inbound" value="142" sub="Last 7 days" icon={<Zap />} color="blue" />
    <StatCard label="Avg. Response" value="14m" sub="Round-robin active" icon={<RefreshCw />} color="indigo" />
    <StatCard label="Conversion" value="22.5%" sub="+2.1% growth" icon={<CheckCircle2 />} color="emerald" />
  </div>
);

const StatCard = ({ label, value, sub, icon, color }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-5 shadow-sm">
    <div className={`w-14 h-14 rounded-2xl bg-${color}-50 text-${color}-600 flex items-center justify-center`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none mb-1">{label}</p>
      <h3 className="text-2xl font-black text-slate-900 leading-none">{value}</h3>
      <p className="text-[10px] text-slate-500 mt-1 font-bold italic">{sub}</p>
    </div>
  </div>
);

export default LeadStats;