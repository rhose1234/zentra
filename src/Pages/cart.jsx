import React, { useState } from "react";
import { useCart } from "../Components/cartContext";
import { Link } from "react-router-dom";
import { FaMoneyCheck } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";



export default function Cart() {
  const { cartItems, removeItem, updateQuantity} = useCart();
  // const [count, setCount] = useState([item.quantity]);
  
  const handleIncrease = (id) => {
    updateQuantity(id, "increase")
  };
  const handleDecrease = (id) => {
    updateQuantity (id, "decrease")
    
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  

  

  return (
     <>
    <div className="px-8 lg:px-34 md:px-30 py-40">

      {cartItems.length === 0 ? (
        <div className="">
        <h1 className="text-3xl font-bold mb-8 text-purpla text-center ">Buy Something now 👀</h1>
        <p className="text-gray-600 text-center">Your cart is empty!!!!</p>
        </div>
      ) : (
       
        <div>
        <h1 className="text-3xl font-bold  text-purpla text-start mb-10 ">Minister of enjoyment, Intercontinental 💃🏿 </h1>

        <div className="w-full px-4 md:px-10 shadow-sm bg-white py-10 rounded-xl"> 
          {cartItems.map((item) => (
            

            <div
              key={item.product.id}
              className="flex flex-col md:flex-row  items-center justify-between mb-6 border-b border-gray-200 pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-20 h-20 object-contain rounded-md"
                />
                <div>
                  <h2 className="font-bold text-lg w-48 md:w-80">{item.product.title}</h2>
                  <p className="text-gray-500 text-sm">{`$${item.product.price} per one`}</p>
                </div>
              </div>

             
              {/* increase and decrease button */}
            <div className="flex flex-row items-center justify-between py-8">
            <div className="inline-flex items-center space-x-4 bg-white shadow-md rounded-full px-2 py-1">
              <button
                onClick={() => handleDecrease(item.product.id)}
                className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition" > - </button>
              <span className="text-base font-semibold text-black w-6 text-center">{item.quantity}</span>

              <button onClick={() => handleIncrease(item.product.id)}
                className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition"> + </button>
            </div>

            <h2 className="ms-2 text-xl text-purpla font-extrabold items-center"> ${(item.product.price * item.quantity).toLocaleString(undefined, {maximumFractionDigits : 2, minimumFractionDigits : 2})} </h2>
            
          </div>

           <div >
          
              <button className="flex flex-col text-xs cursor-pointer text-red-500 text-center items-center space-x-6" onClick={() => removeItem(item.product.id)} >
                <IoTrash className="text-red-500"/>
                 <p>Remove Item</p>
              </button>
              
              </div>

            </div>
           
          ))}
         

           </div>

              {/* total price and pay button */}
          <div className="flex justify-between items-center mt-10 px-8 md:px-20 bg-light py-8">
          <div className="flex justify-between flex-col items-center">
            <h3 className="text-sm font-bold mb-4">Total Price :</h3>
            <h3 className="text-3xl font-bold text-purpla">${total.toLocaleString(undefined, {maximumFractionDigits : 2, minimumFractionDigits: 2})}</h3>
          </div>

          <Link className="flex justify-center md:justify-end w-full" to="/invoice">
           <button  className="flex items-center text-center justify-center gap-2 flex-row bg-purpla text-white px-20 py-3 rounded-lg font-bold transition duration-200 mt-10">
                      <span>Pay Now</span>
                      <FaMoneyCheck className="h-6 w-6" />
                    </button>
           </Link>
              </div>
        </div>
         
      )}

       {/* terms and conditions */}
      <div className="w-full text-base/8 pt-20 pb-10" id="terms">
        <div className="justify-center flex flex-col text-center  ">
          <h1 className="text-black font-bold text-3xl">Terms and Conditions</h1>
          <div className="justify-center flex items-center gap-3">
             <div className="h-2 w-2 bg-red-700 rounded"></div>
            <p className="text-base">By purchasing this product, you agree to the following terms and conditions</p>
          </div>
           </div>

        <div className="lg:px:34 md:px-34 px:8 w-full py-10">
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
    </div>
     </>
  );
}
