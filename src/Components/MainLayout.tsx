import { use } from "react";
import type { Technology } from "../Types/Info";
import TechCard from "./TechCard";
import Asaid from "./Asaid";

const MainLayout = ({
  techPromise,
}: {
  techPromise: Promise<Technology[]>;
}) => {
  const allTechnology = use(techPromise);

  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 grid grid-cols-3 gap-5">
        {allTechnology.map((singleTechnology) => (
          <TechCard 
          key={singleTechnology.id}
          singleTechnology = {singleTechnology}
          />
        ))}
        </div>
        <div className="col-span-1">
          <Asaid />
        </div>
      </div>
    </section>
  );
};

export default MainLayout;
