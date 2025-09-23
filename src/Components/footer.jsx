import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/Logo.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"

export default function Footer() {
  return (
    <>
    <footer className='py-10 px-6 lg:px-34 lg:py-24 bg-light text-black'>

<div className='flex flex-col lg:flex-row justify-between '>

    <div className='flex flex-col space-y-0 '>
    <Link>
        <img src={logo}  className='h-16 w-16' />
    </Link>
       <p className='w-92 lg:w-100 text-black mt-8 text-base'>Zentra is your trusted marketplace for everything
        from fashion to electronics — shop with confidence.</p>
    </div>

     <div className='flex justify-between flex-col space-y-3 font-medium mt-10 lg:mt-0'>
     <h4 className='font-bold text-xl'>Quick Links</h4>
        <Link to="/" >Home</Link>
        <Link to="/" >Shop</Link>
        <Link to="/" >Discounts</Link>
        <Link to="/" >New Arrivals</Link>
    </div>

     <div className='flex justify-between flex-col space-y-3 font-medium mt-10 lg:mt-0' >
     <h4 className='font-bold text-xl'>Help</h4>
        <Link to="/" >Track Order</Link>
        <Link to="/" >Shipping</Link>
        <Link to="/" >Returns</Link>
        <Link to="/" >Refunds</Link>
    </div>


     <div className='flex justify-between flex-col space-y-3 font-medium mt-10 lg:mt-0' >
     <h4 className='font-bold text-xl'>Socials</h4>
        <Link to="/" >Email: support@zentra.com</Link>
        <Link to="/" >Phone: +234 800 000 0000</Link>
        <div className='flex flex-row space-x-3'>
        <Link to="/" ><img className='w-8 h-8' src={facebook}/></Link>
         <Link to="/" ><img className='w-8 h-8' src={instagram}/></Link>
          <Link to="/" ><img className='w-8 h-8' src={twitter}/></Link>
        
        </div>
        
    </div>
        
        
    </div>

<p className='text-sm text-center mt-20'>Zentra © 2025. Designed & Developed by Marvelous❤️</p>
    </footer>
      
    </>
  )
}
