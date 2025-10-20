import React from "react";
import { useCart } from "../Components/cartContext";
import { Link } from "react-router-dom";
import { FaMoneyCheck } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";



export default function Cart() {
  const { cartItems, removeItem} = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  

  

  return (
    <div className="px-8 lg:px-34 md:px-30 py-40">

      {cartItems.length === 0 ? (
        <div>
        <h1 className="text-3xl font-bold mb-8 text-purpla text-center ">Your Shopping Cart</h1>
        <p className="text-gray-600 text-center">Your cart is empty😪!!!!</p>
        </div>
      ) : (
        <>
        <div> 
            <h1 className="text-3xl font-bold mb-8 text-purpla text-start ">Your Shopping Cart</h1>
          {cartItems.map((item) => (
            

            <div
              key={item.product.id}
              className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-20 h-20 object-contain rounded-md"
                />
                <div>
                  <h2 className="font-bold text-lg">{item.product.title}</h2>
                  <p className="text-gray-500 text-sm">${item.product.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
             
                <p className="font-medium">Qty: {item.quantity}</p>
                <p className="font-bold text-purpla">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>

                 <button onClick={() => removeItem(item.product.id)} >
                <IoTrash className="text-red-500"/>
              </button>
              </div>
            </div>
           
          ))}
           </div>

          <div className="flex justify-between items-center mt-10">
            <h3 className="text-xl font-bold">Total:</h3>
            <h3 className="text-2xl font-bold text-purpla">${total.toFixed(2)}</h3>
          </div>

          <Link>
           <button  className="flex items-center text-center justify-center gap-2 flex-row bg-purpla text-white px-6 py-3 rounded-lg font-bold transition duration-200 mt-10">
                      <span>Make Payments</span>
                      <FaMoneyCheck className="h-6 w-6" />
                    </button>
           </Link>
        </>
      )}
    </div>
  );
}
