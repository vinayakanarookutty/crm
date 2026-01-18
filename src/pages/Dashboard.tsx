import React from 'react';
import { TrendingUp, Users, DollarSign, Briefcase, ArrowUpRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Executive Overview</h1>
          <p className="text-slate-500 font-medium">Welcome back, here's what's happening with your agency today.</p>
        </div>
        <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all">
          Download Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="Total Revenue" value="Rs:124,500" trend="+12%" icon={<DollarSign />} color="blue" />
        <StatCard label="Active Leads" value="64" trend="+5%" icon={<Users />} color="indigo" />
        <StatCard label="Conversion" value="18.2%" trend="+2%" icon={<TrendingUp />} color="emerald" />
        <StatCard label="Pending Tasks" value="12" trend="Stable" icon={<Briefcase />} color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart/Activity Area */}
        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">Recent Conversions</h3>
            <ArrowUpRight className="text-slate-400" size={20} />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">BT</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Bali Group Tour</p>
                    <p className="text-xs text-slate-500">Confirmed by Sarah Jenkins</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-slate-900">RS:4,200</span>
              </div>
            ))}
          </div>
        </div>

        {/* Side Progress Area */}
        <div className="bg-[#0F172A] rounded-[32px] p-8 text-white relative overflow-hidden">
          <h3 className="text-lg font-bold mb-2 italic">Monthly Goal</h3>
          <p className="text-slate-400 text-sm mb-8">You are at 75% of your Rs:200k target.</p>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-4">
            <div className="w-[75%] h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          </div>
          <button className="w-full bg-blue-600 py-3 rounded-xl font-bold text-sm mt-4 hover:bg-blue-500 transition-all">View Targets</button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, trend, icon, color }:any) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-md transition-all group">
    <div className={`w-12 h-12 rounded-2xl bg-${color}-50 text-${color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{label}</p>
    <div className="flex items-end gap-2 mt-1">
      <h2 className="text-2xl font-black text-slate-900">{value}</h2>
      <span className="text-[10px] font-bold text-emerald-600 mb-1">{trend}</span>
    </div>
  </div>
);

export default Dashboard;