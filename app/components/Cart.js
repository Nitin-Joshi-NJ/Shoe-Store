'use client'

import { useState,useEffect } from "react";
import Image from "next/image";

const Cart = ({items}) => {
    const [savedCartItems, setSavedCartItems] = useState([]);
    let [qty,setQty] = useState(1)
    const[newPrice,setNewPrice] = useState('')

    useEffect(() => {
        // Load data from localStorage when the component mounts
        const savedItems = localStorage.getItem('cartItems');
        if (savedItems) {
          setSavedCartItems(JSON.parse(savedItems));
        }
      }, [])

      const handleQtyChange=(e,item,value)=>{
        if(value=='+'){
        setQty((qty) => qty + 1);
        setNewPrice((price) => item.price * (qty + 1)); 
        }else{
            setQty((qty) => qty - 1);
        setNewPrice((price) => item.price * (qty - 1)); 
        }
      }

  return (
    <div className="container mx-auto my-6">
      {savedCartItems && savedCartItems.length > 0 ? (
        savedCartItems.map((item, index) => (
          <>
            <div key={index} className="flex justify-around">
              <div>
                <Image
                  src={item.image}
                  className="h-32 py-3 w-44"
                  alt="image"
                />
                <div>{item.name}</div>
              </div>
              <div className="flex items-center">
                <span>
                  <button
                    className="bg-red-600 text-white p-2 border rounded-md"
                    disabled={qty===1}
                    onClick={(e)=>handleQtyChange(e,item,'-')}
                  >
                    -
                  </button>
                </span>
                <span>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
                    placeholder={qty}
                  />
                </span>
                <span>
                  <button
                    className="bg-green-600 text-white p-2 border rounded-md"
                    onClick={(e) => handleQtyChange(e, item,'+')}
                  >
                    +
                  </button>
                </span>
              </div>
              <div className="flex items-center">
                Rs. {!newPrice ? item.price : newPrice}
              </div>
            </div>
          </>
        ))
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
