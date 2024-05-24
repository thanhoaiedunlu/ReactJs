import React, {createContext, useState} from 'react';
import all_product from '../Components/Assets/all_product'; // Đảm bảo đường dẫn chính xác
import item from "../Components/Item/Item";
export const ShopContext = createContext(null);

const getDefaultCart = (allProducts) => {
    let cart = {};
    for (let index = 0; index < allProducts.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart(all_product));
    const addToCart = (itemId) => {
        setCartItems((prev) =>
            ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) =>
            ({...prev,[itemId]:prev[itemId]-1}))
        console.log(cartItems);
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
    const getTotalCartItems = () => {
        let total = 0;
        for(const item in cartItems) {
            if (cartItems[item] > 0) {
                total += cartItems[item];
            }
        }
        return total;
    };
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount,getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
