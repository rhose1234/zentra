import React, { useEffect, useState } from "react";
import logo from "/Logo.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCart } from "./cartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`bg-white flex justify-between items-center py-2 px-6 lg:px-34 fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
          scroll ? "shadow-lg" : ""
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 w-14" />
        </Link>


   {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center flex jusify-center space-x-5">
          {/* Search bar */}
          <div className="relative w-100">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purpla"
            />
            <button
              type="button"
              className="absolute right-2 top-11 -translate-y-1/2 bg-purpla p-2 rounded-full text-white hover:bg-purple-700 transition"
            >
              <IoIosSearch className="w-5 h-5" />
            </button>
          </div>

      
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 font-semibold">
          <li>
            <NavLink to="/" className="hover:text-purpla transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="hover:text-purpla transition">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="hover:text-purpla transition">
              Account
            </NavLink>
          </li>
          <li>
            {/* Cart */}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => navigate("/cart")}
          >
                                  <span className="ml-1 font-semibold">Cart</span>

            <BsCartCheck className="w-6 h-6 text-purpla" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purpla text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </div>
          </li>
        </ul>

     

        {/* Hamburger for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CgClose className="h-7 w-7 text-purpla" />
          ) : (
            <CgMenu className="h-7 w-7 text-purpla" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-purpla text-white py-6 px-8 w-full absolute top-[70px] left-0 z-40 shadow-lg">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" onClick={() => setIsOpen(false)}>
              Account
            </NavLink>
          </li>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-6 mt-4">
            <IoIosSearch className="w-6 h-6 cursor-pointer" />
            <div
              className="flex items-center space-x-1"
              onClick={() => {
                navigate("/cart");
                setIsOpen(false);
              }}
            >
              <BsCartCheck className="w-6 h-6" />
              <span>Cart</span>
            </div>
          </div>
        </ul>
      )}
    </>
  );
}
