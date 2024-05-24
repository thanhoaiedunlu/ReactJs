import React, {useContext} from "react";
import './CartItems.css'
import shopContext, {ShopContext} from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png"
import data_product from "../Assets/data";
import Item from "../Item/Item";
import './CartItems.css'
const CartItems = () => {
    const {all_product, cartItems, removeFromCart,getTotalCartAmount} = useContext(ShopContext);
    return(
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
               if (cartItems[e.id] > 0) {
                return  <div>
                       <div className="cartitems-format">
                           <img src={e.image} alt="" className='carticon-product-icon'/>
                           <p>{e.name}</p>
                           <p>${e.new_price}</p>
                           <button className='cartitems-quantity' >{cartItems[e.id]}</button>
                           <p>${e.new_price * cartItems[e.id]}</p>
                           <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {
                               removeFromCart(e.id)
                           }} alt=""/>
                       </div>
                   </div>
               }
               return null;
            })}
            <div className="cart-down">
                <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                    <p>Have a promo code?</p>
                    <input type="text"/>
                    <button>APPLY</button>
            </div>
        </div>
        </div>
    )
}
export default CartItems;