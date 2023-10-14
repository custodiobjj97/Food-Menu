import React,{useState} from "react";
import {
    FaBars,
    FaTimes,
    FaWallet,
    FaBus,
    FaHeart,
    FaQuestion,
    FaProductHunt,
    FaBox,
    FaUserFriends,
    FaSearch
} from 'react-icons/fa'
import './style.css';

const Navbar=()=>{
    const [open,setOpen]= useState(false)
    const openMenu=()=>{
        setOpen(!open)
    }
    return (
        <header>
            <a className="logo" href="#">Best Eats</a>
            <div className="box-search">
                <FaSearch/>
                <input type="search" placeholder="Search" />
            </div>
            <nav>
                <ul className={open ? 'list-menu active' : 'list-menu'}>
                     <li><a href="#"><FaBus/> Orders</a></li>
                     <li><a href="#"><FaHeart/> Favorites</a></li>
                     <li><a href="#"><FaWallet/> Wallet</a></li>
                     <li><a href="#"><FaQuestion/> Help</a></li>
                     <li><a href="#"><FaProductHunt/> Best Ones</a></li>
                     <li><a href="#"><FaBox/> Promotions</a></li>
                     <li><a href="#"><FaUserFriends/> Invite Friends</a></li>
                </ul>
            </nav>
            
            <button onClick={openMenu} type="button" className="toggle">
              {open ? <FaTimes/> : <FaBars/>}
            </button>

        </header>
    )
}

export default Navbar