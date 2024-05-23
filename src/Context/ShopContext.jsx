import React, {createContext, useState} from 'react';
import all_product from '../Components/Assets/all_product'; // Đảm bảo đường dẫn chính xác

export const ShopContext = createContext(null);

const getDefaultCart = (allProducts) => {
    let cart = {};
    for (let index = 0; index < allProducts.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart(all_product));
    const contextValue = {all_product, cartItems };
    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
