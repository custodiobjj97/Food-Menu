import React, { useContext, useEffect } from "react";
import "./style.css";
import {data} from '../../data/data'
import {CreateScrollGlobal} from '../../animations/scroll' 
const Menu = () => {
    const scroll = useContext(CreateScrollGlobal)
    useEffect(()=>{
        window.addEventListener('scroll', scroll.handleScroll)
        return (()=>{
            window.removeEventListener('scroll', scroll.handleScroll)
        })
    },[])
  return <section ref={scroll.elementRef} className="menu-food scroll">
    <h2>Top Rated Menu Items</h2>
    <div className="col">
        <div className="type-food">
          <h3>Filter Type</h3>
            <ul>
                
                <li><a href="#">All</a></li>
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Pizza</a></li>
                <li><a href="#">Salads</a></li>
                <li><a href="#">Chicken</a></li>
            </ul>
        </div>

        <div className="price">
          <h3>Filter Price</h3>
            <ul>
                
                <li><a href="#">$</a></li>
                <li><a href="#">$$</a></li>
                <li><a href="#">$$$</a></li>
                <li><a href="#">$$$$$</a></li>
                
            </ul>
        </div>
    </div>
    <div className="group-food">
        {data.map((item)=>{
            return (
                <div className="food" key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="desc">
                        <h3>{item.name}</h3>
                        <p className="price-subtitle">{item.price}</p>
                    </div>
                </div>
            )
        })}
    </div>
    </section>;
};

export default Menu;
