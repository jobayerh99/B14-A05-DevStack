import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import MainLayout from "./Components/MainLayout";
import { toast, ToastContainer } from "react-toastify";
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
    const alreadySelected = saved.map((alse) => alse.id)

    if(alreadySelected.includes(singleTechnology.id)){
      toast.error(`${singleTechnology.name} is already on your list`)
      return
    }

    setSaved([...saved, singleTechnology])
    toast.success(`${singleTechnology.name} is added successfully`)
  };

  // asid section functionality

  const handleRemoveAll = () =>{
    if(saved.length === 0)return
    setSaved([])
    toast.error("Your stack is cleared successfully")
  }

  const handleRemoveTech = (id: string) =>{
    const targetedTech = saved.find((tech) => tech.id === id)
    const updatedList = saved.filter((tech) => tech.id !== id)
    setSaved(updatedList)
    if(targetedTech) toast.error(`${targetedTech.name} is removed successfully from your list`)
  }

  return (
    <>
      <Nav />
      <Banner />
      <div className="container mx-auto grid grid-cols-4 gap-5">
        <div className="col-span-3">
          <Suspense fallback={<h2>Loading...</h2>}>
          <MainLayout 
          techPromise={techPromise} 
          handleSavedTechnology={handleSavedTechnology}
          saved = {saved} 
          />
        </Suspense>
        </div>
        <Asaid 
        technologys = {saved}
        handleRemoveAll = {handleRemoveAll}
        handleRemoveTech = {handleRemoveTech}
        />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
