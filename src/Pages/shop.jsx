import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { BsCart2 } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

import { FaStar } from "react-icons/fa";



export default function Shop() {

  const controller = new AbortController()
  

  const [products, setProducts] = useState([])
  const [visiblecount, setVisibleCount] = useState(6)
  const [categories] = useState(["Electronics", "Clothing", "Jewelry"]);
  const [selectedCategory, setSelectedCategory] = useState("Electronics");


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
          setProducts(data); 
        })
      .catch((err) => console.log(err.message));
      return () => {
    controller.abort()
  }
  }
  , 
  []);

  const filteredProducts = products.filter((item) => {
    if(selectedCategory === "Electronics"){
      return item.category === "electronics"
    }
    if(selectedCategory === "Jewelry"){
      return item.category === "jewelery"
    }
if (selectedCategory === "Clothing") {
    return item.category === "men's clothing" || item.category === "women's clothing";
  }
  return true;

  })

  const handleView = () => {
    setVisibleCount((visiblecount) => visiblecount +  10)
  }

  return (
    <>
    <div className='shopHero flex flex-col justify-center items-center'>
      <h1 className='text-white text-3xl lg:text-5xl font-bold'>Shop From our Stocks</h1>
      <p className='text-white mt-2'>Shop from various categories on zentra</p>
    </div>

 {/* Category buttons */}
 <div className='flex justify-center items-center py-16'>
      <div className="flex flex-row  items-center space-x-10 bg-light rounded-full max-w-xl">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`cursor-pointer p-3 rounded-full px-8 font-bold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-purpla text-white"
                : "hover:text-purpla"
            }`}
          >
            <h4>{cat}</h4>
          </div>
        ))}
      </div>
</div>

<div className="products py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 lg:px-34">
  {filteredProducts.slice(0,visiblecount).map((item) => (
     <Link to={`/products/${item.id}`}>
    <div key={item.id} className="bg-white shadow-xl px-6 py-10 rounded-xl ">
      <div className="flex justify-center">
        <img src={item.image} className="w-50 h-60 mb-10 "/>
      </div>
      
      <div className='flex flex-row space-x-1 items-center'>
      <div className='rounded-full h-2 w-2 bg-purpla'></div>
         <i className='text-base font-medium text-purpla'> {item.category.charAt(0).toUpperCase() + item.category.slice(1)} </i>
      </div>
     
      <h2 className="text-black mt-2 text-xl font-bold h-16">{item.title.slice(0,49)}</h2>
      <p className="text-black mt-8 text-base/6 h-20">{item.description.slice(0,80)}</p>

      <div className='flex flex-row items-center justify-between mt-6'>
        <h4 className="text-purpla font-bold text-3xl">{`$${item.price}`}</h4>

          <Link to={`/products/${item.id}`}>
          <button className="bg-purpla text-white rounded-md flex flex-row items-center space-x-2 py-2 px-6">
            <p className="font-bold text-white">View Product</p>
            <FaEye className='text-white'/>
          </button>
          </Link>
      </div>

      <div className='mt-6 flex flex-row items-center space-x-2'>
      <div className='flex flex-row items-center space-x-1'>
        <FaStar className='text-yellow-300'/>
         <FaStar className='text-yellow-300'/>
          <FaStar className='text-yellow-300'/>
           <FaStar className='text-yellow-300'/>
            <FaStar className='text-yellow-300'/>
      </div>
      <strong className='text-xs'>{item.rating.rate}</strong>
      </div>
    </div>
    </Link>
  ))}

</div>

{
  visiblecount < filteredProducts.length && (<div className='flex justify-center items-center py-8 w-full' >
  <button className='bg-transparent text-purpla border border-2 border-purpla rounded-xl py-3 px-20' 
  onClick={handleView}>View More</button>
  </div>)
}



    </>
  )
}
