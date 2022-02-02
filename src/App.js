import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, createContext } from "react";
import Landing from "./Components/Pages/Landing";
import Products from "./Components/Pages/Products";
import ProductDetails from "./Components/Pages/ProductDetails";
import Cart from "./Components/Pages/Cart/Cart";
import Navbar from "./Components/Layout/NavBar";

export const AddProductToCart = React.createContext();

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [countCart, setCountCart] = useState(0);

  const addProduct = (elm) => {
    setShoppingCart([...shoppingCart, elm]);
  };

  const countItems = () => setCountCart(shoppingCart.length);

  useEffect(() => {
    countItems();
  }, [shoppingCart]);

  return (
    <BrowserRouter>
      <div className="countainer-routes">
        <Navbar count={countCart} />
        <AddProductToCart.Provider
          value={{ addProduct, shoppingCart, setCountCart }}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </AddProductToCart.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
