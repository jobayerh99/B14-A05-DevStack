import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import MainLayout from "./Components/MainLayout";
import { ToastContainer } from "react-toastify";
import Asaid from "./Components/Asaid";
import type { Technology } from "./Types/Info";

const fetchTechInfo = async () => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

const techPromise = fetchTechInfo();

function App() {
  // asid section functionality

  const [saved, setSaved] = useState<Technology[]>([]);

  // card section functionality
  const handleSavedTechnology = (singleTechnology: Technology) => {
    
  };

  return (
    <>
      <Nav />
      <Banner />
      <div className="container mx-auto grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <Suspense fallback={<h2>Loading...</h2>}>
          <MainLayout 
          techPromise={techPromise} 
          handleSavedTechnology={saved} 
          />
        </Suspense>
        </div>
        <Asaid 
        technologys={saved} 

        />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
