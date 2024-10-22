import React from "react";
import '../../style/Nav.css';
import logo from "../../content/logo.png"
function NavBar(){
    const Navig= ["Shop","Join Us","Contact Us"]
    return(
    <div className="navBar">
        <div className="logo-cont">
            <img className="logo" src={logo} />
        </div>
        <ul className="navList">
            {Navig.map((item)=> { return <li key={item}>{item}</li>})}
        </ul>
        <div className="reg-cont">
            <button style={{backgroundColor:'rgb(255 204 242)'}}>Sign In</button>
            <button style={{backgroundColor:'#DAD4B5'}}>Sign Up</button>
        </div>
    </div>
    );
}

export default NavBar