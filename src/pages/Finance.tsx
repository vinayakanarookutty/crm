
import { 
  ArrowUpCircle, ArrowDownCircle, Landmark, 
  Receipt, Download, Filter, MoreHorizontal,
  Wallet, PieChart
} from 'lucide-react';

const Finance = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Treasury & Accounts</h1>
          <p className="text-slate-500 font-medium font-['Inter']">Manage your agency's cash flow, invoicing, and supplier payouts.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} /> Export Report
          </button>
          <button className="flex items-center gap-2 bg-blue-600 px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
            <Receipt size={18} /> New Invoice
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <ArrowUpCircle size={28} />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Total Receivables</p>
            <h2 className="text-3xl font-black text-slate-900">Rs:84,200.50</h2>
            <p className="text-emerald-600 text-xs font-bold mt-2 flex items-center gap-1">
              +8.4% <span className="text-slate-400 font-medium">vs last month</span>
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-slate-100 transition-colors">
            <Landmark size={120} />
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6">
              <ArrowDownCircle size={28} />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Total Payables</p>
            <h2 className="text-3xl font-black text-slate-900">Rs:32,150.00</h2>
            <p className="text-rose-600 text-xs font-bold mt-2 flex items-center gap-1">
              -2.1% <span className="text-slate-400 font-medium">vs last month</span>
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 text-slate-50 group-hover:text-slate-100 transition-colors">
            <Wallet size={120} />
          </div>
        </div>

        <div className="bg-[#0F172A] p-8 rounded-[32px] text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
              <PieChart size={28} />
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-1">Net Margin (P&L)</p>
            <h2 className="text-3xl font-black text-white">Rs:52,050.50</h2>
            <div className="mt-4 flex gap-2">
              <span className="px-2 py-1 bg-blue-500/10 rounded text-[10px] font-bold text-blue-400 border border-blue-500/20">GST COMPLIANT</span>
              <span className="px-2 py-1 bg-blue-500/10 rounded text-[10px] font-bold text-blue-400 border border-blue-500/20">AUDITED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Ledger */}
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/30">
          <h3 className="font-bold text-slate-900 text-lg tracking-tight">Recent Financial Activity</h3>
          <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-400">
            <Filter size={20} />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Transaction ID</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Entity / Client</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Currency</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { id: 'INV-8821', name: 'Marriott International', type: 'Payable', status: 'Pending', amount: '2,400.00', curr: 'USD' },
                { id: 'REC-4002', name: 'Dr. Robert Ford', type: 'Receivable', status: 'Paid', amount: '12,500.00', curr: 'INR' },
                { id: 'INV-8822', name: 'Emirates Airlines', type: 'Payable', status: 'Overdue', amount: '8,200.00', curr: 'AED' },
                { id: 'REC-4003', name: 'Dolores Abernathy', type: 'Receivable', status: 'Paid', amount: '5,000.00', curr: 'USD' },
              ].map((tx, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-all group">
                  <td className="px-8 py-6">
                    <span className="text-sm font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                      {tx.id}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{tx.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tx.type}</p>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      tx.status === 'Paid' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                      tx.status === 'Overdue' ? 'bg-rose-50 text-rose-600 border border-rose-100' :
                      'bg-amber-50 text-amber-600 border border-amber-100'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-500">{tx.curr}</td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-black text-slate-900">{tx.amount}</p>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-900">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;