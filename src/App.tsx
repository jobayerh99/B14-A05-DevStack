import { Suspense } from "react"
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import MainLayout from "./Components/MainLayout"


const fetchTechInfo = async() => {
  const res = await fetch('/public/data.json')
  const data = await res.json()
  return data;
}

const techPromise = fetchTechInfo()


function App() {
  

  return (
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={<h2>Loading...</h2>}>
        <MainLayout techPromise={techPromise} />
      </Suspense>
    </>
  )
}

export default App
