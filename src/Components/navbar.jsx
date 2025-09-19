import React from 'react'

import logo from "/Logo.svg"
import { NavLink, Link } from 'react-router-dom'

import { IoIosSearch } from "react-icons/io";
import { BsCartCheck } from "react-icons/bs";


export default function Navbar() {
  return (
    <>
    <nav className='bg-white flex flex-row justify-between py-2 px-6 lg:px-34 shadow-xl  items-center'>
        <Link>
            <img src={logo} className='h-16 w-16' />
        </Link>

        <ul className='flex flex-row justify-between space-x-10'>
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

        <div className='flex flex-row justify-between space-x-4'>
        <IoIosSearch className='w-6 h-6' />
        <BsCartCheck className='w-6 h-6' />

        </div>
    </nav>
      
    </>
  )
}
