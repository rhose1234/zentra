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

  const [searchWord, setSearchWord] = useState("")
  const [err, setErr] = useState("")
  const [product, setProduct] = useState([])

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.log(err.message));
    }, []);

  const handleSearch = (e) => {
  e.preventDefault();

  if (!searchWord.trim()) {
      setErr("please enter a search Keyword")
      return;
  }
  const findProduct = product.find((item) => {
    return item.title.toLowerCase().includes(searchWord.toLowerCase())
  })

  if (findProduct){
    setErr("Product Available")
     setTimeout(() => {
          navigate(`/shop?search=${searchWord}`);
          setErr("")
          setSearchWord("")
          setIsOpen(false)
    }, 1000);
  }
  else{
    setErr("Product Not Found")
    setTimeout(() => {
      setErr("")
    }, 1000);

  setSearchWord("");

   
  }
};


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
<div className="hidden md:block relative flex-col w-[28rem] max-w-full ml-4 ">
 
   <p
  className={`text-xs font-semibold absolute -top-0 left-34 ${
    err === "Product Available" ? "text-green-500" : "text-red-500"
  }`}
>
  {err}
</p>

<form onSubmit={handleSearch} className="hidden md:block relative w-[28rem] max-w-full ml-34">
  <input
    onChange={(e) => setSearchWord(e.target.value)}
    value={searchWord}
    type="text"
    placeholder="Search Products..."
    className="w-full py-3 pl-4 pr-14 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-purpla"
  />
  <button
    type="submit"
    className="absolute right-0 top-11 -translate-y-1/2 bg-purpla p-3 rounded text-white hover:bg-opacity-90 transition"
  >
    <IoIosSearch className="w-5 h-5" />
  </button>
  </form>



</div>

      
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 font-semibold mt-3">
          {/* <li>
            <NavLink to="/" className="hover:text-purpla transition">
              Home
            </NavLink>
          </li> */}
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
            className="relative flex items-center cursor-pointer space-x-1"
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

     


{/* Mobile menu and dropdown links */}

        {/* Hamburger  */}

<div className="md:hidden flex items-center gap-4">
      

         
            <NavLink to="/cart">
             <div
            className="relative flex space-x-2 items-center cursor-pointer"
            onClick={() =>  {28
            navigate("/cart");
            setIsOpen(false); 
            }}
          >
        {/* <span className="ml-1 font-semibold">Cart</span> */}

            <BsCartCheck className="w-6 h-6 text-purpla" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-purpla text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </div>
            </NavLink>

                <button
          className=" focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <CgClose className="h-7 w-7 text-purpla" />
          ) : (
            <CgMenu className="h-7 w-7 text-purpla" />
          )}
        </button>

             
            </div>
          
      </nav>

    
      {isOpen && (
<ul className="md:hidden flex flex-col space-y-4 bg-purpla text-white py-6 px-8 w-full fixed top-[70px] left-0 z-[9999] shadow-lg">
          {/* <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li> */}
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
{/* Mobile Search */}
<div className="block md:hidden relative w-full px-0 mt-2 mb-3">
  <p
  className={`text-xs font-bold absolute -top-0 left-10 ${
    err === "Product Available" ? "text-green-500" : "text-red-500"
  }`}
>
  {err}
</p>

<form onSubmit={handleSearch} className="block md:hidden relative w-[28rem] max-w-full">
  <input
    onChange={(e) => setSearchWord(e.target.value)}
    value={searchWord}
    type="text"
    placeholder="Search..."
    className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-purpla"
  />
  <button
    type="submit"
    className="absolute right-1 top-11 rounded py-2 px-3 -translate-y-1/2 text-purpla bg-white"
  >
    <IoIosSearch size={22} />
  </button>
</form>

</div>
</div>
        </ul>
      )}
    </>
  );
}
