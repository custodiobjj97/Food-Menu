import React,{useContext,useEffect} from "react";
import {CreateScrollGlobal} from '../../animations/scroll'
import './style.css'

const About =()=>{
    const scroll = useContext(CreateScrollGlobal)
    useEffect(()=>{
        scroll.handleScroll()
        window.addEventListener('scroll', scroll.handleScroll)
        return (()=>{
          window.removeEventListener('scroll', scroll.handleScroll)
        })
    },[])
  return (
     <section ref={scroll.elementRef} className="about scroll">
        <div className="about-group">
            <div className="card-about">
            <h3>Sun's Out, BOGO's Out</h3>
            <span>Through 8/26</span>
             
             <a href="#" className="btn-card">Order now</a>
            </div>
            <div className="card-about">
            <h3>New Restaurants</h3>
            <span>Added Daily</span>
            <a href="#" className="btn-card">Order now</a>
            </div>
            <div className="card-about">
            <h3>We Deliver Desserts Too</h3>
            <span>Tasty Treats</span>
            <a href="#" className="btn-card">Order now</a>
            </div>
        </div>
     </section>
  )
}


export default About