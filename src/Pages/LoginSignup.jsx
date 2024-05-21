import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                </div>
                <button>Continue</button>
                <p class='loginsignup-login'>Already have an account? <span>Login</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing, i agree to term of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup;