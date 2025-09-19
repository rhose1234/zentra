import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Shop from "./Pages/shop";

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
      <Footer/>
    </>
  );
}
