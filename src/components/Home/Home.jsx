import React, { useContext, useEffect,useRef } from "react";
import {CreateScrollGlobal} from '../../animations/scroll'
import "./style.css";

const Home = () => {

    const scroll = useContext(CreateScrollGlobal)
    useEffect(()=>{
        scroll.handleScroll()
        window.addEventListener('scroll', scroll.handleScroll)
        return (()=>{
          window.removeEventListener('scroll', scroll.handleScroll)
        })
    },[])
  return (
     
      <section ref={scroll.elementRef} className="home scroll">
      <h1>The <span className="color">Best</span><br/> 
      <span className="color">Foods</span> Devlivered</h1>
      </section>

     
  )
  
};

export default Home;
