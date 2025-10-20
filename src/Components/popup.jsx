import React, { useEffect } from 'react'
import checkmark from "../assets/checkmark.gif"

export default function Popup({message, close}) {

    useEffect(() => {
        const timer = setInterval(() => {
            close()
        }, 2000)
   
    
    return () => clearInterval(timer)
      },
    [close] )

  return ( 
    <>
     <div className="fixed inset-0 flex justify-center items-center  bg-opacity-40 z-50">
      <div className="flex flex-col justify-center items-center px-6 py-4 bg-white rounded-lg shadow-xl text-center">
           <img src={checkmark} alt="" className='w-30 h-30' />
        <p className="text-purpla font-semibold">{message}</p>
      </div>
    </div>
      
    </>
  )
}
