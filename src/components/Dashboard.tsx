import { TrendingUp, Users, DollarSign, Briefcase } from 'lucide-react';

const Dashboard = () => (
  <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
    <div>
      <h1 className="text-3xl font-black text-slate-900 tracking-tight">Executive Dashboard</h1>
      <p className="text-slate-500 font-medium">Real-time performance metrics for your travel agency.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard label="Total Revenue" value="Rs42,000" icon={<DollarSign className="text-blue-600" />} trend="+14%" />
      <StatCard label="Leads Converted" value="84" icon={<TrendingUp className="text-emerald-600" />} trend="+5%" />
      <StatCard label="Active Travelers" value="156" icon={<Users className="text-indigo-600" />} trend="+12%" />
      <StatCard label="Pending Quotes" value="23" icon={<Briefcase className="text-amber-600" />} trend="-2%" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm overflow-hidden relative">
        <h3 className="text-xl font-bold mb-6">Recent Sales Activity</h3>
        <div className="space-y-6">
          {/* Placeholder for a list of leads/sales */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">JD</div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">John Doe • Swiss Alps Tour</p>
                  <p className="text-xs text-slate-400">Quote sent 2 hours ago</p>
                </div>
              </div>
              <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase">Confirmed</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-[#0F172A] rounded-[32px] p-8 text-white flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-4">Storage Usage</h3>
          <p className="text-slate-400 text-sm">You have used 75% of your document storage space.</p>
        </div>
        <div className="mt-8">
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>
            <button className="mt-6 w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">Upgrade Storage</button>
        </div>
      </div>
    </div>
  </div>
);

const StatCard = ({ label, value, icon, trend }:any) => (
  <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-2xl">{icon}</div>
      <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-2 py-1 rounded-lg">{trend}</span>
    </div>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none mb-1">{label}</p>
    <h2 className="text-2xl font-black text-slate-900 tracking-tight">{value}</h2>
  </div>
);

export default Dashboard;