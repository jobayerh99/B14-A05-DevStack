import type { Technology } from "../Types/Info";
import { FaStar } from "react-icons/fa";

interface TechCardProps {
  singleTechnology: Technology;
  handleSavedTechnology: (technology: Technology) => void;
}

const TechCard = ({
  singleTechnology,
  handleSavedTechnology,
}: TechCardProps) => {
  return (
    <div className="group w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Icon + Badge */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 p-2">
          <img
            src={singleTechnology.icon}
            alt={singleTechnology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span
          style={{
            backgroundColor: singleTechnology.badgeColor,
            color: singleTechnology.badgeTxtColor,
          }}
          className="rounded-full px-3 py-1 text-xs font-semibold"
        >
          {singleTechnology.badge}
        </span>
      </div>

      {/* Title + Description */}
      <div className="mt-5 space-y-2">
        <h2 className="text-xl font-bold text-slate-900">
          {singleTechnology.name}
        </h2>

        <p className="text-sm leading-6 text-slate-500">
          {singleTechnology.description}
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-slate-100"></div>

      {/* Information */}
      <div className="flex items-center justify-between">
        {/* Category */}
        <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {singleTechnology.category}
        </span>

        {/* Difficulty */}
        <span className="text-xs font-medium text-slate-500">
          {singleTechnology.difficulty}
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
          <FaStar className="text-[#FBBF24]" />
          {singleTechnology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        className="
      mt-5 w-full rounded-xl bg-[#0A0F1D] py-2.5
      text-sm font-semibold text-white
      transition-all duration-300
      hover:bg-slate-800
      active:scale-[0.98]"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
