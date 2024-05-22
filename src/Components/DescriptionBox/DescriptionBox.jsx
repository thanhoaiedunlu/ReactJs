import React from 'react';
import '../DescriptionBox/DescriptionBox.css';
const DescriptionBox =() => {
    return(
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-navigator-box">Description</div>
                <div className="descriptionbox-navigator-box fade">Reviews(123)</div>
            </div>
                <div className="descriptionbox-description">
                    <p> Men's Classic T-Shirt
                        "This classic men's t-shirt offers a timeless fit and feel. Made from 100% cotton, it's soft, comfortable, and perfect for everyday wear. Available in various colors."
                        Women's Casual Dress
                        "Elevate your everyday style with this women's casual dress. Crafted from lightweight, breathable fabric, it features a relaxed fit and elegant design. Ideal for any occasion."</p>
                </div>
        </div>
    )
}
export default  DescriptionBox;