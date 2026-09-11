import { Suspense } from "react";
import Hero from "./component/Hero"
import Nav from "./component/Nav"
import TechnologyCard from "./component/Card/TechnologyCard";
import type { Technology } from "./Type/types";


const TechnologyCardFetch = async():Promise<Technology[]> => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
}

function App() {
  const TechnologyCardPromise = TechnologyCardFetch();
  
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<h2>Loading.....</h2>}>
        <TechnologyCard TechnologyCardPromise={TechnologyCardPromise} />
      </Suspense>
      
     
    </>
  )
}

export default App
