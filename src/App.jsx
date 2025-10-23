import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Shop from "./Pages/shop";
import ProductDetails from "./Pages/productDetails";
import { CartProvider } from "./Components/cartContext";
import Cart from "./Pages/cart";
import SignIn from "./Auth/signin";
import Signup from "./Auth/signup";
import ScrollToTop from "./Components/scrollToTop";

export default function App() {
  return (
    
    <>
    <CartProvider>
    <Navbar/>
    <ScrollToTop />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signin" element ={<SignIn/>} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
      <Footer/>
      </CartProvider>
    </>
  );
}
