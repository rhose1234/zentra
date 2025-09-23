import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { FaStar } from "react-icons/fa";



export default function Shop() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
          setProducts(data); 
        })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
    <div className='shopHero flex flex-col justify-center items-center'>
      <h1 className='text-white text-3xl lg:text-5xl font-bold'>Shop From our Stocks</h1>
      <p className='text-white mt-2'>Shop from various categories on zentra</p>
    </div>

<div className='pt-16 pb-8 categories flex flex-row justify-center items-center'>
  <div className='flex flex-row items-center  space-x-10 bg-light   rounded-full  pe-10 '>

    <div className='bg-purpla p-3 rounded-full px-8 text-white'>
    <h4 className='font-bold'>Electronics</h4>
    </div>

    <div>
    <h4 className='font-bold'>Clothing</h4>
    </div>

    <div>
    <h4 className='font-bold'>Jewelry</h4>
    </div>

    </div>
    </div>


<div className="products py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 lg:px-34">
  {products.slice(0,10).map((item) => (
    <div key={item.id} className="bg-white shadow-xl px-6 py-10 rounded-xl ">
      <div className="flex justify-center">
        <img src={item.image} className="w-50 h-60 mb-10"/>
      </div>
      <div className='flex flex-row space-x-1 items-center'>
      <div className='rounded-full h-2 w-2 bg-purpla'></div>
         <i className='text-xs text-purpla'>Category {item.category}</i>
      </div>
     
      <h2 className="text-black mt-2 text-xl font-bold h-16">{item.title.slice(0,49)}</h2>
      <p className="text-black mt-8 text-base h-20">{item.description.slice(0,80)}</p>

      <div className='flex flex-row items-center justify-between mt-6'>
        <h4 className="text-purpla font-bold text-3xl">{`$${item.price}`}</h4>
        <Link to="/">
          <button className="bg-purpla text-white rounded-md flex flex-row items-center space-x-2 py-2 px-6">
            <p className="font-bold text-white">Add to Cart</p>
            <BsCart2 className='text-white'/>
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
  ))}
</div>

    </>
  )
}
