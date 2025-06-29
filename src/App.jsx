import { React } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";


function App() {
 

  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <div className="h-dvh bg-black"></div>
    </main>
    </>
  )
}

export default App
