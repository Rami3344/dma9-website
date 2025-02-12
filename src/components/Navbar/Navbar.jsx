import React, { useState } from "react";
import '../../style/Nav.css';
import logo from "../../content/logo.png"
function NavBar({handleOpenLog,handleOpenReg}){
    const Navig= [
        {
            name:"Shop",
            link:"#shop"
        },
        {
            name:"Join Us",
            link:"#join"
        },
        {
            name:"Contact Us",
            link:"#contact"
        },
    ]
    return(
    <div className="navBar">
        <div className="logo-cont">
            <img className="logo" src={logo} />
        </div>
        <ul className="navList">
            {Navig.map((item)=> { return <li key={item.name}><a href={item.link}>{item.name}</a></li>})}
        </ul>
        <div className="reg-cont">
            <button style={{backgroundColor:'rgb(255 204 242)'}} onClick={handleOpenLog}>Sign In</button>
            <button style={{backgroundColor:'#DAD4B5'}}  onClick={handleOpenReg}>Sign Up</button>
        </div>
    </div>
    );
}

export default NavBar