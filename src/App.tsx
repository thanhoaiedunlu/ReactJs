import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import Popular from "./Components/Popular/Popular";
function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/mens" element={<ShopCategory category = "men"/>}/>
                <Route path="/womens" element={<ShopCategory category = "womend"/>}/>
                <Route path="/kids" element={<ShopCategory category = "kid"/>}/>
                <Route path="/" element={<Product/>}>
                    <Route path=":productId" element={<Product/>}/>
                </Route>
                <Route path="/login" element={<LoginSignup/>}/>
                <Route path="/cart" element={<Cart/>}/>

            </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
