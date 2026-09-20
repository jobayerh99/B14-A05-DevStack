import { RxCross1 } from "react-icons/rx";
import type { Technology } from "../Types/Info";

interface AsideCardProps {
  technologys: Technology[];
}

const Asaid = ({ technologys }: AsideCardProps) => {
  return (
    <aside className="w-full">
      <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 space-y-4 flex flex-col">
        {/* Header section */}
        <div>
          <h2 className="card-title">Your Stack</h2>

          <p className="mt-1 simple-text text-muted">
            {technologys.length === 0
              ? "No Technology selected yet"
              : `${technologys.length} Technology selected`}
          </p>
        </div>

        {/* Empty State / Selected Technologies */}
        {technologys.length === 0 ? (
          <div className="mx-auto grid h-16 w-full place-items-center rounded-xl border border-dashed border-slate-200 bg-white p-6">
            <p className="simple-text">Your stack is empty.</p>
          </div>
        ) : (
          <div className="my-7 grid gap-3">
            {/* Saved technologies */}
            {technologys.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between gap-3 rounded-lg bg-white p-3"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />

                  <div className="flex flex-col">
                    <span className="text-xs font-bold">{technology.name}</span>

                    <span className="text-[6px] text-[#475569]">
                      {technology.category}
                    </span>
                  </div>
                </div>

                <button type="button">
                  <RxCross1 />
                </button>
              </div>
            ))}

            {/* Remove all */}
            <button
              type="button"
              className="mt-2 w-full rounded-xl border border-[#D82C20] bg-white py-2.5 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-500 hover:text-white active:scale-[0.98]"
            >
              Remove all
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Asaid;
