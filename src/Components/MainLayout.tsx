import { use } from "react";
import type { Technology } from "../Types/Info";
import TechCard from "./TechCard";

interface MainLayoutProps {
  techPromise: Promise<Technology[]>;
  handleSavedTechnology: (technology: Technology) => void;
  saved:Technology[]
}

const MainLayout = ({
  techPromise,
  handleSavedTechnology,
  saved
}: MainLayoutProps) => {
  const allTechnology = use(techPromise);

  return (
    <section className="w-full">
      <div className="grid grid-cols-3 gap-5">
        {allTechnology.map((singleTechnology) => (
          <TechCard
            key={singleTechnology.id}
            singleTechnology={singleTechnology}
            handleSavedTechnology={handleSavedTechnology}
            saved = {saved}
          />
        ))}
      </div>
    </section>
  );
};

export default MainLayout;
