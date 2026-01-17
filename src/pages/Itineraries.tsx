
import { Calendar, MapPin } from 'lucide-react';

const Itineraries = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Trip Planner</h1>
        <p className="text-slate-500 font-medium">Create and manage high-conversion travel itineraries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="h-48 bg-slate-200 relative overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`} alt="Destination" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter">Premium Package</div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mediterranean Cruise & Stay</h3>
              <div className="flex items-center gap-4 text-slate-400 text-xs font-medium mb-6">
                <span className="flex items-center gap-1"><Calendar size={14}/> 12 Days</span>
                <span className="flex items-center gap-1"><MapPin size={14}/> Greece, Italy</span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Starting from</p>
                  <p className="text-xl font-black text-blue-600">Rs:2,499</p>
                </div>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors">Edit Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itineraries;