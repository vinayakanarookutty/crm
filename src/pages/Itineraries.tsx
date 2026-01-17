import { useState } from 'react';
import { Download,  Image as ImageIcon } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyItineraryPDF } from '../components/Itinerary/MyItineraryPDF';

const ItineraryCreator = () => {
  const [tripData, setTripData] = useState({
    title: 'GEORGIA Holidays',
    duration: '4 Night / 5 Days',
    themeColor: '#f97316',
    bgImage: '',
    inclusions: '',
    contactPhone: '',
    days: [{ day: 1, title: 'Arrival', description: '', img: '' }]
  });

  const handleFileUpload = (e: any, index?: number) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (index !== undefined) {
        const d = [...tripData.days];
        d[index].img = reader.result as string;
        setTripData({ ...tripData, days: d });
      } else {
        setTripData({ ...tripData, bgImage: reader.result as string });
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-8 bg-slate-50 min-h-screen">
      {/* BUILDER SIDE */}
      <div className="flex-1 bg-white p-8 rounded-[40px] shadow-xl border border-slate-200">
        <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Design Studio</h2>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Trip Title" value={tripData.title} onChange={({v}:any) => setTripData({...tripData, title: v})} />
            <InputField label="Theme Color" type="color" value={tripData.themeColor} onChange={({v}:any) => setTripData({...tripData, themeColor: v})} />
          </div>

          <div className="p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-300 text-center">
            <label className="cursor-pointer">
              <ImageIcon className="mx-auto mb-2 text-slate-400" />
              <span className="text-xs font-bold text-slate-500 uppercase">Upload Main Cover Image</span>
              <input type="file" className="hidden" onChange={(e) => handleFileUpload(e)} />
            </label>
          </div>

          <div className="space-y-4">
            <h3 className="font-black text-sm uppercase tracking-widest text-slate-400">Day-wise Schedule</h3>
            {tripData.days.map((day, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-3">
                <input 
                  className="w-full font-bold text-slate-900 border-none p-0 focus:ring-0" 
                  placeholder={`Day ${day.day} Title`} 
                  value={day.title}
                  onChange={(e) => {
                    const d = [...tripData.days]; d[i].title = e.target.value; setTripData({...tripData, days: d});
                  }}
                />
                <textarea 
                  className="w-full text-sm text-slate-500 border-none p-0 focus:ring-0 resize-none h-20" 
                  placeholder="What happens on this day?" 
                  onChange={(e) => {
                    const d = [...tripData.days]; d[i].description = e.target.value; setTripData({...tripData, days: d});
                  }}
                />
                <input type="file" onChange={(e) => handleFileUpload(e, i)} className="text-[10px]" />
              </div>
            ))}
            <button 
              onClick={() => setTripData({...tripData, days: [...tripData.days, { day: tripData.days.length+1, title: '', description: '', img: '' }]})}
              className="w-full py-4 border-2 border-dashed border-blue-200 text-blue-600 rounded-3xl font-bold text-sm"
            >
              + Add Next Day
            </button>
          </div>
        </div>
      </div>

      {/* LIVE PREVIEW SIDE */}
      <div className="w-full lg:w-[450px] sticky top-8">
        <div className="bg-slate-900 rounded-[50px] p-2 shadow-2xl border-[12px] border-slate-800">
           <div 
             className="w-full aspect-[1/1.4] rounded-[40px] overflow-hidden relative flex flex-col"
             style={{ backgroundColor: tripData.themeColor }}
           >
              {tripData.bgImage && <img src={tripData.bgImage} className="absolute inset-0 w-full h-full object-cover opacity-40" />}
              <div className="relative z-10 p-8 text-white flex-1 flex flex-col">
                <p className="text-[10px] font-bold italic mb-2">{tripData.duration}</p>
                <h1 className="text-4xl font-black italic uppercase leading-none mb-6">{tripData.title}</h1>
                
                <div className="space-y-4 overflow-y-auto max-h-[300px] pr-2">
                   {tripData.days.map((d, i) => (
                     <div key={i} className="flex gap-3">
                        {d.img && <img src={d.img} className="w-12 h-12 rounded-lg border-2 border-white/30 object-cover" />}
                        <div>
                          <p className="text-[10px] font-black uppercase">Day {d.day}</p>
                          <p className="text-[9px] opacity-80">{d.title}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/20 flex justify-between items-center">
                  <span className="font-black text-xl tracking-tighter italic">VOYAGE<span className="text-blue-400">OS</span></span>
                  <PDFDownloadLink document={<MyItineraryPDF data={tripData} />} fileName="itinerary.pdf">
                    {() => (
                      <button className="bg-white text-slate-900 p-3 rounded-2xl shadow-lg">
                        <Download size={20} />
                      </button>
                    )}
                  </PDFDownloadLink>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, value, onChange, type = "text" }: any) => (
  <div className="space-y-1">
    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{label}</label>
    <input 
      type={type} 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-blue-500/20" 
    />
  </div>
);

export default ItineraryCreator;