import React, { createContext, useRef } from "react";


export const CreateScrollGlobal = createContext()



const ScrollAnimation =({children})=>{
    const elementRef= useRef(null)
    const handleScroll=()=>{
      const element = elementRef.current
      if(element){
        const top =element.getBoundingClientRect().top 
        const height = window.innerHeight * 0.6
        const isVisible = (top - height) < 0
        if(isVisible){
            element.classList.add('visible')
        }else{
          element.classList.remove('visible')
        }
      }
    }
  return (
    <CreateScrollGlobal.Provider className="scroll" value={{elementRef, handleScroll}}>
        {children}
    </CreateScrollGlobal.Provider>
  )
}

export default ScrollAnimation