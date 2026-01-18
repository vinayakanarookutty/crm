import React, { useMemo, useState } from "react";
import { Download, Image as ImageIcon } from "lucide-react";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";

import { DndContext, closestCenter } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { MyItineraryPDF } from "../components/Itinerary/MyItineraryPDF";
import SortableDayCard from "../components/Itinerary/SortableDayCard";
import {
  ActivitiesSection,
  FlightsSection,
  HotelsSection,
} from "../components/Itinerary/Sections";

import type { TripData, TripDay } from "../types/itinerary";

const ItineraryCreator: React.FC = () => {
  const [tripData, setTripData] = useState<TripData>({
    title: "GEORGIA Holidays",
    duration: "4 Night / 5 Days",
    themeColor: "#144bc2",
    bgImage: "",
    inclusions: "Hotels • Breakfast • Transfers • Sightseeing",
    contactPhone: "+91 98765 43210",

    flights: [],
    hotels: [],
    activities: [],

    days: [
      {
        id: crypto.randomUUID(),
        day: 1,
        title: "Arrival",
        description: "",
        img: "",
      },
    ],
  });

  /* =========================================================
     ✅ Upload helpers
  ========================================================== */
  const handleCoverUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () =>
      setTripData((prev) => ({ ...prev, bgImage: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const handleDayUpload = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setTripData((prev) => {
        const updated = [...prev.days];
        updated[index] = { ...updated[index], img: reader.result as string };
        return { ...prev, days: updated };
      });
    };
    reader.readAsDataURL(file);
  };

  /* =========================================================
     ✅ Day editor helpers
  ========================================================== */
  const onChangeDay = (index: number, field: keyof TripDay, value: string) => {
    setTripData((prev) => {
      const updated = [...prev.days];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, days: updated };
    });
  };

  const addNextDay = () => {
    setTripData((prev) => ({
      ...prev,
      days: [
        ...prev.days,
        {
          id: crypto.randomUUID(),
          day: prev.days.length + 1,
          title: "",
          description: "",
          img: "",
        },
      ],
    }));
  };

  const deleteDay = (index: number) => {
    setTripData((prev) => {
      const updated = prev.days.filter((_, i) => i !== index);
      const renumbered = updated.map((d, idx) => ({ ...d, day: idx + 1 }));
      return { ...prev, days: renumbered };
    });
  };

  /* =========================================================
     ✅ Drag Drop reorder
  ========================================================== */
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTripData((prev) => {
      const oldIndex = prev.days.findIndex((d) => d.id === active.id);
      const newIndex = prev.days.findIndex((d) => d.id === over.id);

      const moved = arrayMove(prev.days, oldIndex, newIndex);
      const renumbered = moved.map((d, idx) => ({ ...d, day: idx + 1 }));

      return { ...prev, days: renumbered };
    });
  };

  /* =========================================================
     ✅ Force PDF refresh key
     (makes iframe reload pdf correctly)
  ========================================================== */
  const pdfKey = useMemo(() => {
    return JSON.stringify({
      title: tripData.title,
      duration: tripData.duration,
      themeColor: tripData.themeColor,
      cover: !!tripData.bgImage,
      inclusions: tripData.inclusions,
      phone: tripData.contactPhone,
      days: tripData.days.map((d) => ({
        id: d.id,
        title: d.title,
        description: d.description,
        img: !!d.img,
      })),
      flights: tripData.flights,
      hotels: tripData.hotels,
      activities: tripData.activities,
    });
  }, [tripData]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-8 bg-slate-50 min-h-screen">
      {/* =====================================================
          ✅ BUILDER SIDE
      ====================================================== */}
      <div className="flex-1 bg-white p-8 rounded-[40px] shadow-xl border border-slate-200 space-y-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight">
          Design Studio
        </h2>

        {/* ✅ Trip Title + Duration */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Trip Title"
            value={tripData.title}
            onChange={(v) => setTripData({ ...tripData, title: v })}
          />
          <InputField
            label="Duration"
            value={tripData.duration}
            onChange={(v) => setTripData({ ...tripData, duration: v })}
          />
        </div>

        {/* ✅ Theme Color + Contact */}
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Theme Color"
            type="color"
            value={tripData.themeColor}
            onChange={(v) => setTripData({ ...tripData, themeColor: v })}
          />
          <InputField
            label="Contact Phone"
            value={tripData.contactPhone || ""}
            onChange={(v) => setTripData({ ...tripData, contactPhone: v })}
          />
        </div>

        {/* ✅ Inclusions */}
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
            Inclusions
          </label>
          <textarea
            value={tripData.inclusions || ""}
            onChange={(e) =>
              setTripData({ ...tripData, inclusions: e.target.value })
            }
            className="w-full p-4 bg-slate-50 border-none rounded-3xl text-sm font-medium focus:ring-2 focus:ring-blue-500/20 outline-none h-24 resize-none"
            placeholder="Hotels • Breakfast • Transfers • Sightseeing"
          />
        </div>

        {/* ✅ Cover upload */}
        <div className="p-6 bg-slate-50 rounded-3xl border border-dashed border-slate-300 text-center">
          <label className="cursor-pointer inline-block">
            <ImageIcon className="mx-auto mb-2 text-slate-400" />
            <span className="text-xs font-bold text-slate-500 uppercase">
              Upload Main Cover Image
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleCoverUpload(f);
              }}
            />
          </label>
        </div>

        {/* ✅ Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FlightsSection
            flights={tripData.flights}
            setFlights={(v) => setTripData({ ...tripData, flights: v })}
          />
          <HotelsSection
            hotels={tripData.hotels}
            setHotels={(v) => setTripData({ ...tripData, hotels: v })}
          />
          <ActivitiesSection
            activities={tripData.activities}
            setActivities={(v) => setTripData({ ...tripData, activities: v })}
          />
        </div>

        {/* ✅ Days */}
        <div className="space-y-4">
          <h3 className="font-black text-sm uppercase tracking-widest text-slate-400">
            Day-wise Schedule (Drag to reorder)
          </h3>

          <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              items={tripData.days.map((d) => d.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-4">
                {tripData.days.map((day, i) => (
                  <SortableDayCard
                    key={day.id}
                    day={day}
                    index={i}
                    onChange={onChangeDay}
                    onUpload={handleDayUpload}
                    onDelete={deleteDay}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>

          <button
            onClick={addNextDay}
            className="w-full py-4 border-2 border-dashed border-blue-200 text-blue-600 rounded-3xl font-bold text-sm"
            type="button"
          >
            + Add Next Day
          </button>
        </div>
      </div>

      {/* =====================================================
          ✅ ONLY ONE VIEW: PDF PREVIEW (iframe)
      ====================================================== */}
      <div className="w-full lg:w-[560px] sticky top-8">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                Full PDF Preview
              </p>
              <p className="text-[11px] font-bold text-slate-400">
                Theme: {tripData.themeColor}
              </p>
            </div>

            <PDFDownloadLink
              key={pdfKey}
              document={<MyItineraryPDF data={tripData} />}
              fileName="itinerary.pdf"
            >
              {({ loading }) => (
                <button
                  className="bg-slate-900 text-white px-4 py-2.5 rounded-2xl font-black text-xs shadow-lg shadow-slate-200 disabled:opacity-70 flex items-center gap-2"
                  disabled={loading}
                  type="button"
                >
                  <Download size={16} />
                  Download
                </button>
              )}
            </PDFDownloadLink>
          </div>

          {/* ✅ Working preview */}
          <div className="h-[85vh] bg-white">
            <BlobProvider key={pdfKey} document={<MyItineraryPDF data={tripData} />}>
              {({ url, loading, error }) => {
                if (loading) {
                  return (
                    <div className="h-full grid place-items-center text-slate-400 font-bold">
                      Generating preview...
                    </div>
                  );
                }

                if (error) {
                  return (
                    <div className="h-full grid place-items-center text-rose-500 font-bold px-6 text-center">
                      Preview Error: {String(error)}
                    </div>
                  );
                }

                return (
                  <iframe
                    title="PDF Preview"
                    src={url || ""}
                    className="w-full h-full"
                    style={{ border: "none" }}
                  />
                );
              }}
            </BlobProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   ✅ Reusable InputField
========================================================= */
type InputFieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: React.HTMLInputTypeAttribute;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
}) => (
  <div className="space-y-1">
    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 bg-slate-50 border-none rounded-2xl text-sm font-bold focus:ring-2 focus:ring-blue-500/20 outline-none"
    />
  </div>
);

export default ItineraryCreator;
