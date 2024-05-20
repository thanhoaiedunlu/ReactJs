import React from "react";
import './NewsLetters.css'

const NewsLetter = () => {
    return(
        <div className='newsletter'>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our new letter and stay updated</p>
            <div className='form'>
                <input type="email" placeholder='Your Email id'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter;