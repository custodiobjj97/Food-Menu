import React, { useContext, useEffect } from "react";
import './style.css'
import {categories} from '../../data/data'
import {CreateScrollGlobal} from '../../animations/scroll'

const Category = ()=>{
    const scroll = useContext(CreateScrollGlobal)
    useEffect(()=>{
        window.addEventListener('scroll', scroll.handleScroll)
        return (()=>{
            window.removeEventListener('scroll', scroll.handleScroll)
        })
    },[])
  return (
    <section ref={scroll.elementRef} className="category scroll">
        <h2>Top Rated Menu Items</h2>
     <div className="group-category">
         {categories.map((item)=>{
            return (
                <div key={item.id} className="box">
                    <img src={item.image} alt="" />
                    <h4>{item.name}</h4>
                </div>
            )
         })}
     </div>
    </section>
  )
}

export default Category