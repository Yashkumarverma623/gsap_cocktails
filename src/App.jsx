import { React } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from "./Components/Navbar.jsx";


function App() {
 

  return (
    <>
    <main>
      <Navbar/>
    </main>
    </>
  )
}

export default App
