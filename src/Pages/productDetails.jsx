import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useCart } from "../Components/cartContext";
import Popup from "../Components/popup";


export default function ProductDetails() {
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(0);
  const [popupShow, setPopupshow] = useState(false)

  const {addToCart} = useCart()

  const navigate = useNavigate()

  const handleAddtoCart = () => {
    setPopupshow(true)
    addToCart(products, count || 1)
    setTimeout(()=> {
      navigate("/shop")
    }, 3000)

  }

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  };

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err.message));
  }, [id]);

  if (!products) {
    return <p className="text-center py-30">Loading...</p>;
  }

  return (
    <>

    <div className="popup">
      {
        popupShow && ( <Popup 
        message={`${products.title} has been added to cart`}
        close={ () => setPopupshow (false)}>
        </Popup>)
      }
    </div>
      <div className="pt-30 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-8 lg:px-34 md:px-30 items-center">
        {/* Product Image */}
        <div className="">
          <img
            src={products.image}
            alt={products.title}
            className="w-100 h-100"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-6 w-full px-2">
            <div className="flex flex-row justify-between items-center mt-10 mb-6">

             <div className='flex flex-row space-x-1 items-center'>
      <div className='rounded-full h-2 w-2 bg-purpla'></div>
         <i className='text-base text-purpla'> {products.category.charAt(0).toUpperCase() + products.category.slice(1)} </i>
      </div> 

         <div className="flex flex-row items-center gap-2">
      
               <div className='flex flex-row items-center space-x-1'>
                      <FaStar className='text-yellow-300'/>
                       <FaStar className='text-yellow-300'/>
                        <FaStar className='text-yellow-300'/>
                         <FaStar className='text-yellow-300'/>
                          <FaStar className='text-yellow-300'/>
                    </div>
                     <span className="text-black font-bold">{products.rating.rate}</span>
                    </div>
            </div>
          <h1 className="text-3xl font-bold">{products.title}</h1>
          <p className="text-gray-600 text-base/8 w-full">{products.description}</p>

          <div className="flex flex-row items-center justify-between py-8">
            <div className="inline-flex items-center space-x-4 bg-white shadow-md rounded-full px-2 py-1">
              <button
                onClick={handleDecrease}
                className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition" > - </button>
              <span className="text-base font-semibold text-black w-6 text-center">
                {count}
              </span>

              <button onClick={handleIncrease}
                className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition"> + </button>
            </div>

            <h2 className="text-4xl/8 text-purpla font-extrabold"> ${products.price * count} </h2>
            
          </div>

          <button onClick={handleAddtoCart} className="flex items-center text-center justify-center gap-2 flex-row bg-purpla text-white px-6 py-3 rounded-lg font-bold transition duration-200">
            <span>Add to Cart</span>
            <MdShoppingCartCheckout className="h-6 w-6" />
          </button>

          <Link to="/shop" className="text-purpla underline">
            {" "}
            ← Back to Shop
          </Link>
        </div>
      </div>

      <div className="w-full text-base/8">
        <div className="justify-center flex flex-col text-center  ">
          <h1 className="text-black font-bold text-4xl">Terms and Conditions</h1>
          <div className="justify-center flex items-center gap-3">
             <div className="h-2 w-2 bg-red-700 rounded"></div>
            <p className="text-base">By purchasing this product, you agree to the following terms and conditions</p>
          </div>
           </div>

        <div className="lg:px:34 md:px-34 px:8 w-full py-20">
          <h2 className="text-2xl font-bold break-words">Product information</h2>
          <p className="">We strive to ensure that all product details, images, and descriptions are accurate. However, slight variations 
          in color, design, or packaging may occur.</p>

          <h2 className="text-2xl font-bold break-words  mt-6 " >Orders & Payments</h2>
          <ul className="list-disc">
            <li>All orders are subject to acceptance and availability.</li>
            <li>Prices are displayed in dollar and are subject to change without prior notice.</li>
            <li>Payment must be completed before your order is processed and shipped. </li>
          </ul>

          <h2 className="text-2xl font-bold break-words  mt-6 " >Shipping & Delivery</h2>
          <ul className="list-disc">
            <li>Delivery timelines are estimates and may vary due to unforeseen circumstances.</li>
            <li>We are not responsible for delays caused by courier services or external factors beyond our control.</li>
          </ul>

          <h2 className="text-2xl font-bold break-words  mt-6 " >Returns & Refunds</h2>
          <ul className="list-disc">
            <li>Returns are accepted within 5 days of delivery, provided the product is unused, in its original packaging, and accompanied by proof of purchase.</li>
            <li>Refunds will be processed according to our [Return Policy/Refund Policy].</li>
          </ul>
        </div>
        

       


      </div>
    </>
  );
}
