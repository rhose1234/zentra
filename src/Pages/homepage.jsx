import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from "../assets/AliExpress.svg"
import partner2 from "../assets/jumai.svg"
import partner3 from "../assets/hisense.svg"
import partner4 from "../assets/shein.svg"
import partner5 from "../assets/zara.svg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroImg from "../assets/Hero-img.svg";

export default function Homepage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        setProducts(data); 
      })
    .catch((err) => console.log(err.message));
}, []);

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
    <div className="hero min-h-screen flex flex-col lg:flex-row items-center">

      {/* Left Section */}
      <div className="w-full lg:w-1/2 px-8 lg:pl-34 space-y-3 lg:space-y-6 text-center lg:text-left">
        <h1 className="text-2xl lg:text-6xl font-bold text-black leading-tight">
          Shop with Full Confidence
        </h1>
        <p className="text-base lg:text-md text-black">
          Everything you need, from electronics to groceries — all in one place.
          Fast delivery, trusted sellers, and unbeatable deals.
        </p>

        <Link to="/shop">
       <button className="px-6 py-3 rounded-xl text-white bg-purpla font-bold shadow-md hover:opacity-90 transition">
            Explore Now!
          </button>
        </Link>

      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-auto">
        <img
          src={heroImg}
          alt="hero-img"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div className="arrivals py-10 px-6 lg:px-34 lg:py-14">

    <div className="w-1/2">

    <div className="bg-light px-4 py-2 flex flex-row items-center space-x-3 w-70" >
        <div className="h-2 w-2 bg-red-700 rounded"></div>
        <p className="text-sm">Explore our recent items in stock</p>
    </div>
    <h1 className="text-2xl lg:text-5xl mt-3 font-bold text-black leading-tight">New Arrivals</h1>

    </div>


    <div className="w-auto mt-16">
    <div className="flex flex-row space-x-10">
     <Swiper
        modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={6}
            autoplay={{ delay: 100, disableOnInteraction: false }}
             breakpoints={{
    320: { slidesPerView: 3 },  // phones
    640: { slidesPerView: 4 },  // small tablets
    1024: { slidesPerView: 6 }, // large screens
  }}
    >
    {
    products.slice(0, 10).map((item) => {
      return (
    <SwiperSlide>
    <div key={item.id} className="bg-white shadow-xl p-3 flex justify-center align-items-center">
      <img src={item.image} alt={item.title} className="w-20 h-24" />
    </div>
    </SwiperSlide>
  )
}) 
}

    </Swiper>
     
    </div>
    </div>
    </div>

    <div className="discounts text-white py-10 px-6 lg:px-34 lg:py-14">

      <div className="flex flex-col lg:flex-row justify-between space-x-4 lg:space-y-0 space-y-4">
      <div className="discount1 rounded-xl p-10 h-full w-full  lg:w-1/2 flex flex-col justify-between ">
      <div>
       <h2 className="text-2xl lg:text-4xl font-bold">50% discount sale</h2>
       <p className="text-md">Shop as low as $3000 on new stocks</p>
       </div>

       <div>
        <button className="hover:bg-transparent hover:text-white hover:border hover:border-white bg-white text-purpla font-bold text-xl p-3 px-6 rounded-xl">Shop Now!</button>
       </div>
      </div>
      <div className="w-full  lg:w-1/2 space-y-3">
        <div className="discount2 text-2xl lg:text-4xl font-bold  py-14  px-10 lg:p-10 rounded-xl">Electronics</div>
        <div className="discount3 text-2xl lg:text-4xl font-bold py-14 px-10 lg:p-10 rounded-xl">Clothings</div>
      </div>
      </div>
    </div>

    <div className="featured text-white py-10 px-6 lg:px-34 lg:py-14 ">

    <div className="flex justify-between mb-10">
      <h1  className="text-2xl lg:text-5xl mt-3 font-bold text-black leading-tight">Featured Products</h1>

      <div>
        <button className="border-purpla border border-2 text-purpla px-8 py-2 rounded-xl text-sm">View All</button>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between lg:space-x-6">
      {
        products.slice(0, 4).map((item) => (
          <div key={item.id} className="bg-white shadow-xl px-6 py-10 rounded-xl">
          <div className="flex justify-center align-center">
            <img src={item.image} className="w-50 h-60"/>
          </div>
            <h2 className="text-black  mt-8 text-xl font-bold">{item.title.slice(0,28)}</h2>
            <p className="text-black mt-6 text-base w-55">{item.description.slice(0,77)}</p>
            <h4 className="text-purpla font-bold text-2xl mt-6">{` $${item.price}`}</h4>

           <Link to="/">
           <button className="mt-10 bg-purpla textwhite rounded-md flex flex-row items-center space-x-2 py-2 px-6">
           <p className="font-bold ">Add to Cart</p>
           <BsCart2/>
           </button>
           
           </Link>
          </div>
        ))
      }
    </div>

    </div>

    <div className="trusted py-10">
     
     <Slider {...settings}>
  <img src={partner1} className="h-20 w-20" />
  <img src={partner2} className="h-20 w-20" />
  <img src={partner3} className="h-20 w-20" />
  <img src={partner4} className="h-20 w-20" />
  <img src={partner5} className="h-20 w-20" />
</Slider>

    
    </div>

    <div className="subscribe py-10 px-14 lg:px- lg:px-34 lg:py-24 mt-10  ">
      <div className="flex flex-col text-center justify-center items-center">
      <h1 className="text-3xl lg:text-5xl font-bold text-white">Subscribe To Our Newsletter</h1>
      <p className="mt-1 text-white text-base">Get informed about our latest Updates</p>
     <div class="relative w-100 mt-10">

  <input 
    type="text" 
    placeholder="Enter your email" 
    className="w-full rounded-xl bg-white shadow-xl px-6 py-4 pr-24 focus:outline-none  "
  />
  <button 
    className="absolute right-1 top-1 bottom-1 rounded-xl bg-purpla px-4 text-white ">
    Subscribe
  </button>
</div>

      </div>
    </div>

    
    </>

  );
}
