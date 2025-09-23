import React, { useState } from 'react'

import logo from "/Logo.svg"
import { NavLink, Link } from 'react-router-dom'

import { IoIosSearch } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg"; 




export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>


    <nav className='navbar bg-white flex flex-row justify-between py-2 px-6 lg:px-34 shadow-xl  items-center fixed top-0 left-0 w-full z-50'>
        <Link>
            <img src={logo} className='h-16 w-16' />
        </Link>

       {/* desktop menu */}
        <ul className='hidden md:flex flex-row justify-between space-x-10'>
            <li>
                <NavLink to="/" className="font-semibold">Home</NavLink>
            </li>
             <li>
                <NavLink to="/arrivals" className="font-semibold">New Arrivals</NavLink>
            </li>
             <li>
                <NavLink to="/shop" className="font-semibold">Shop</NavLink>
            </li>
             <li>
                <NavLink to="/help" className="font-semibold" >Help</NavLink>
            </li>
             <li>
                <NavLink to="/account" className="font-semibold" >Account</NavLink>
            </li>
        </ul>

        {/* icons */}
        <div className='hidden md:flex lg:flex flex flex-row justify-between space-x-4'>
        <IoIosSearch className='w-6 h-6 cursor-pointer' />
        <BsCartCheck className='w-6 h-6 cursor-pointer' />
        </div>

        {/* mobile menu */}
        <button className='md:hidden focus:outline-none' onClick={ () => setIsOpen(!isOpen)}>
        {
            isOpen ? (<CgClose className='h-7 w-7' /> ) : (<CgMenu  className='h-7 w-7'/>)
        }
        </button>
    </nav>

    {/* Mobile menu dropdown */}
    {
        isOpen && (
            <ul className='md:hidden flex flex-col justify-between space-y-4 bg-purpla px-8 z-50 py-6 text-white w-full  absolute top-18 left-0 transition-all duration-300 ease-in-out'>
            <li>
                <NavLink to="/" className="font-semibold" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
             <li>
                <NavLink to="/arrivals" className="font-semibold" onClick={() => setIsOpen(false)}>New Arrivals</NavLink>
            </li>
             <li>
                <NavLink to="/shop" className="font-semibold" onClick={() => setIsOpen(false)}>Shop</NavLink>
            </li>
             <li>
                <NavLink to="/help" className="font-semibold" onClick={() => setIsOpen(false)}>Help</NavLink>
            </li>
             <li>
                <NavLink to="/account" className="font-semibold" onClick={() => setIsOpen(false)} >Account</NavLink>
            </li>

             <div className='flex lg:flex flex flex-row space-x-4'>
        <IoIosSearch className='w-6 h-6 cursor-pointer' onClick={() => setIsOpen(false)} />
        <BsCartCheck className='w-6 h-6 cursor-pointer' onClick={() => setIsOpen(false)} />
        </div>
        
        </ul>
        )
    }
      
    </>
  )
}

