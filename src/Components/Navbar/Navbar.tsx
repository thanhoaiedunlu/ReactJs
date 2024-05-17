import React from "react";
import './Navbar.css'
import logo from '../Assets/logo.png';
const Navbar =() => {
    return(
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="null"/>
                <p>Shop</p>
            </div>
        </div>
    )
}
export default Navbar