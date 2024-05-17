import React from "react";
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
const Navbar =() => {
    return(
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="null"/>
                <p>Shop</p>
            </div>
            <ul className='nav-menu'>
                <li>Men <hr/></li>
                <li>Home</li>
                <li>Women</li>
                <li>Kid</li>
            </ul>
            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="null"/>
            </div>
        </div>
    )
}
export default Navbar