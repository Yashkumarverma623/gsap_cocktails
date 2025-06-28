import { React } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
 

  return (
    <>
    <div className="flex-center h-[100vh]">
      <h1 className="text-8xl  text-indigo-400">Test GSAP</h1>
    </div>
    </>
  )
}

export default App
