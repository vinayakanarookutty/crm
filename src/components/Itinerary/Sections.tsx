import React from "react";
import { Plus, Trash2 } from "lucide-react";
import type { ActivityItem, FlightItem, HotelItem } from "../../types/itinerary";

export const FlightsSection: React.FC<{
  flights: FlightItem[];
  setFlights: (v: FlightItem[]) => void;
}> = ({ flights, setFlights }) => {
  return (
    <div className="space-y-4">
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
        Flights
      </p>

      {flights.map((f, i) => (
        <div key={f.id} className="p-4 rounded-3xl border border-slate-200 bg-white space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={f.from} placeholder="From"
              onChange={(e) => {
                const x = [...flights]; x[i].from = e.target.value; setFlights(x);
              }} />
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={f.to} placeholder="To"
              onChange={(e) => {
                const x = [...flights]; x[i].to = e.target.value; setFlights(x);
              }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={f.date} placeholder="Date (eg: 2026-01-20)"
              onChange={(e) => {
                const x = [...flights]; x[i].date = e.target.value; setFlights(x);
              }} />
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={f.time || ""} placeholder="Time"
              onChange={(e) => {
                const x = [...flights]; x[i].time = e.target.value; setFlights(x);
              }} />
          </div>

          <div className="flex justify-between">
            <input className="flex-1 p-3 rounded-2xl bg-slate-50 font-bold text-sm mr-3"
              value={f.airline || ""} placeholder="Airline"
              onChange={(e) => {
                const x = [...flights]; x[i].airline = e.target.value; setFlights(x);
              }} />
            <button
              type="button"
              className="p-3 rounded-2xl border border-slate-200 text-rose-600 hover:bg-rose-50"
              onClick={() => setFlights(flights.filter((_, idx) => idx !== i))}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setFlights([
            ...flights,
            { id: crypto.randomUUID(), from: "", to: "", date: "" },
          ])
        }
        className="w-full py-3 rounded-2xl border-2 border-dashed border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center gap-2"
      >
        <Plus size={18} /> Add Flight
      </button>
    </div>
  );
};

export const HotelsSection: React.FC<{
  hotels: HotelItem[];
  setHotels: (v: HotelItem[]) => void;
}> = ({ hotels, setHotels }) => {
  return (
    <div className="space-y-4">
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
        Hotels
      </p>

      {hotels.map((h, i) => (
        <div key={h.id} className="p-4 rounded-3xl border border-slate-200 bg-white space-y-3">
          <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm w-full"
            value={h.name} placeholder="Hotel Name"
            onChange={(e) => {
              const x = [...hotels]; x[i].name = e.target.value; setHotels(x);
            }} />

          <div className="grid grid-cols-2 gap-3">
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={h.city} placeholder="City"
              onChange={(e) => {
                const x = [...hotels]; x[i].city = e.target.value; setHotels(x);
              }} />
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={h.roomType || ""} placeholder="Room Type"
              onChange={(e) => {
                const x = [...hotels]; x[i].roomType = e.target.value; setHotels(x);
              }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={h.checkIn} placeholder="Check-in"
              onChange={(e) => {
                const x = [...hotels]; x[i].checkIn = e.target.value; setHotels(x);
              }} />
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={h.checkOut} placeholder="Check-out"
              onChange={(e) => {
                const x = [...hotels]; x[i].checkOut = e.target.value; setHotels(x);
              }} />
          </div>

          <button
            type="button"
            className="w-full py-2 rounded-2xl border border-slate-200 text-rose-600 hover:bg-rose-50 font-bold text-sm flex items-center justify-center gap-2"
            onClick={() => setHotels(hotels.filter((_, idx) => idx !== i))}
          >
            <Trash2 size={18} /> Remove Hotel
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setHotels([
            ...hotels,
            {
              id: crypto.randomUUID(),
              name: "",
              city: "",
              checkIn: "",
              checkOut: "",
            },
          ])
        }
        className="w-full py-3 rounded-2xl border-2 border-dashed border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center gap-2"
      >
        <Plus size={18} /> Add Hotel
      </button>
    </div>
  );
};

export const ActivitiesSection: React.FC<{
  activities: ActivityItem[];
  setActivities: (v: ActivityItem[]) => void;
}> = ({ activities, setActivities }) => {
  return (
    <div className="space-y-4">
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
        Activities
      </p>

      {activities.map((a, i) => (
        <div key={a.id} className="p-4 rounded-3xl border border-slate-200 bg-white space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={a.day} placeholder="Day"
              onChange={(e) => {
                const x = [...activities]; x[i].day = Number(e.target.value || 1); setActivities(x);
              }} />
            <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm"
              value={a.time || ""} placeholder="Time"
              onChange={(e) => {
                const x = [...activities]; x[i].time = e.target.value; setActivities(x);
              }} />
          </div>

          <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm w-full"
            value={a.title} placeholder="Activity Title"
            onChange={(e) => {
              const x = [...activities]; x[i].title = e.target.value; setActivities(x);
            }} />

          <input className="p-3 rounded-2xl bg-slate-50 font-bold text-sm w-full"
            value={a.location || ""} placeholder="Location"
            onChange={(e) => {
              const x = [...activities]; x[i].location = e.target.value; setActivities(x);
            }} />

          <button
            type="button"
            className="w-full py-2 rounded-2xl border border-slate-200 text-rose-600 hover:bg-rose-50 font-bold text-sm flex items-center justify-center gap-2"
            onClick={() => setActivities(activities.filter((_, idx) => idx !== i))}
          >
            <Trash2 size={18} /> Remove Activity
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          setActivities([
            ...activities,
            { id: crypto.randomUUID(), day: 1, title: "" },
          ])
        }
        className="w-full py-3 rounded-2xl border-2 border-dashed border-blue-200 text-blue-600 font-bold text-sm flex items-center justify-center gap-2"
      >
        <Plus size={18} /> Add Activity
      </button>
    </div>
  );
};
