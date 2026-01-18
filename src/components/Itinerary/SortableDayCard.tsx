import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Image as ImageIcon, Trash2 } from "lucide-react";
import type { TripDay } from "../../types/itinerary";

type Props = {
  day: TripDay;
  index: number;
  onChange: (index: number, field: keyof TripDay, value: string) => void;
  onUpload: (index: number, file: File) => void;
  onDelete: (index: number) => void;
};

const SortableDayCard: React.FC<Props> = ({
  day,
  index,
  onChange,
  onUpload,
  onDelete,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: day.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.75 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-5 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-3"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
            type="button"
            {...attributes}
            {...listeners}
            title="Drag to reorder"
          >
            <GripVertical size={18} />
          </button>

          <p className="text-xs font-black uppercase tracking-widest text-slate-400">
            Day {day.day}
          </p>
        </div>

        <button
          type="button"
          className="p-2 rounded-xl border border-slate-200 text-rose-600 hover:bg-rose-50"
          onClick={() => onDelete(index)}
          title="Delete Day"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <input
        className="w-full font-bold text-slate-900 border-none p-0 focus:ring-0"
        placeholder={`Day ${day.day} Title`}
        value={day.title}
        onChange={(e) => onChange(index, "title", e.target.value)}
      />

      <textarea
        className="w-full text-sm text-slate-500 border-none p-0 focus:ring-0 resize-none h-20"
        placeholder="What happens on this day?"
        value={day.description}
        onChange={(e) => onChange(index, "description", e.target.value)}
      />

      <div className="flex items-center justify-between gap-4">
        <label className="inline-flex items-center gap-2 text-[11px] font-bold text-slate-600 cursor-pointer">
          <ImageIcon size={16} className="text-slate-400" />
          Upload day image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onUpload(index, f);
            }}
          />
        </label>

        {day.img ? (
          <img
            src={day.img}
            className="w-10 h-10 rounded-xl border border-slate-200 object-cover"
            alt="day"
          />
        ) : (
          <span className="text-[10px] text-slate-400 font-bold">No image</span>
        )}
      </div>
    </div>
  );
};

export default SortableDayCard;
