import { React, lazy }from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
const Navbar = lazy(()=>import('./Components/Navbar/Navbar.jsx'))
const Hero = lazy(()=>import('./Components/Hero/Hero.jsx'))
const Cocktails = lazy(()=>import('./Components/Cocktails/Cocktails.jsx'))
const About = lazy(()=> import ('./Components/About/About.jsx'))
const Art = lazy(()=> import('./Components/Art/Art.jsx'))
const Menu = lazy(()=> import('./Components/Menu/Menu.jsx'))
const Contact = lazy(()=> import('./Components/Contact/Contact.jsx'))



function App() {
 

  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
    </>
  )
}

export default App
