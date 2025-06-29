import { React, lazy }from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Navbar = lazy(()=>import('./Components/Navbar/Navbar.jsx'))
const Hero = lazy(()=>import('./Components/Hero/Hero.jsx'))
const Cocktails = lazy(()=>import('./Components/Cocktails/Cocktails.jsx'))
const About = lazy(()=> import ('./Components/About/About.jsx'))

function App() {
 

  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
    </main>
    </>
  )
}

export default App
