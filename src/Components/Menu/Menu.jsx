import React, {useState, useRef} from 'react'
import {sliderLists} from "../Constrants/index.js";


const Menu = () => {

  const contentRef = useRef()

  const [currentIndex, setcurrentIndex] = useState(0)
   
  const totalCocktails = sliderLists.length

  const goToSlide = (index) =>{
    const newIndex = (index + totalCocktails) % totalCocktails

    setcurrentIndex(newIndex);
  }
    
  const getCocktailAt = (indexOffset) =>{
    return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
  }
  
  const currentCocktail = getCocktailAt(0)

  const prevCocktail = getCocktailAt(-1)

  const nextCocktail = getCocktailAt(1)


  return (
    <>
      <section id="menu" aria-labelledby="menu-heading" >
        <img src="/images/slider-left-leaf.png" id="m-left-leaf" />
        <img src="/images/slider-right-leaf.png" id="m-right-leaf" />

        <h2 id="menu-heading" className="sr-only">
           Cocktail Menu
        </h2>
        <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
          {sliderLists.map((cocktail, index)=>{
            const isActive = index === currentIndex;

           return(
            <button key={cocktail.id} className={`${isActive ? 
              'text-white border-white' :
               'text-white/50 border-white/50'}`}
               onClick={()=>goToSlide(index)}>
             {cocktail.name}
            </button>
           )

          })}
        </nav>
          
          <div className="content">
            <div className="arrow">
              <button className="text-left" onClick={()=>goToSlide(currentIndex-1)}>
               <span>{prevCocktail.name}</span>
               <img src="/images/right-arrow.png" aria-hidden="true" />
              </button>

              <button className="text-right" onClick={()=>goToSlide(currentIndex+1)}>
               <span>{nextCocktail.name}</span>
               <img src="/images/left-arrow.png" aria-hidden="true" />
              </button>
            </div>

            <div className="cocktail">
              <img src={currentCocktail.image} className="object-contain" />
            </div>

            <div className="recipe">
              <div ref={contentRef}>

              </div>
            </div>
          </div>

      </section>
    </>
  )
}

export default Menu
