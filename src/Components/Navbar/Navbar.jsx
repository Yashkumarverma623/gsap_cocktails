import React from 'react'
import NavLinks from "../Constrants/index.js";
const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <a href="#home" className="flex items-center gap-2">
            <p>Velvet Pour</p>
          </a>

          <ul>
            {NavLinks}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
