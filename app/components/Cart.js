"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Cart = ({ items }) => {
  const [savedCartItems, setSavedCartItems] = useState([]);
  // const [newPrice, setNewPrice] = useState("");
  const [cartItems, setCartItems] = useState(items);

  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedItems = localStorage.getItem("cartItems");
    if (savedItems) {
      setSavedCartItems(JSON.parse(savedItems));
    }
  }, []);

  const handleQtyChange = (e, item, value) => {
    let updatedCartItems;
    const originalPrice = item.price / item.qty;
    if (value === "+") {
      updatedCartItems = savedCartItems.map((itemm) => {
        if (itemm.id === item.id) {
          const updatedQty = item.qty + 1;
          const updatedPrice = originalPrice * updatedQty;
          return { ...itemm, qty: updatedQty, price: updatedPrice };
        }
        return itemm;
      });
    } else if (value === "-" && item.qty > 1) {
      updatedCartItems = savedCartItems.map((itemm) => {
        if (itemm.id === item.id) {
          const updatedQty = item.qty - 1;
          const updatedPrice = originalPrice * updatedQty;
          return { ...itemm, qty: updatedQty, price: updatedPrice };
        }
        return itemm;
      });
    } else {
      updatedCartItems = savedCartItems.filter((itemm) => itemm.id !== item.id);
    }
    setSavedCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const calculatedPrice = () => {
    let totalPrice = 0;
    savedCartItems.map((item) => {
      totalPrice += Number(item.price);
    });
    return totalPrice;
  };

  return (
    <div className="container mx-auto my-6">
      {savedCartItems && savedCartItems.length > 0 ? (
        <>
          {savedCartItems.map((item, index) => (
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
                    onClick={(e) => handleQtyChange(e, item, "-")}
                  >
                    -
                  </button>
                </span>
                <span>
                  <input
                    type="text"
                    className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none w-14 text-center"
                    value={item.qty}
                  />
                </span>
                <span>
                  <button
                    className="bg-green-600 text-white p-2 border rounded-md"
                    onClick={(e) => handleQtyChange(e, item, "+")}
                  >
                    +
                  </button>
                </span>
              </div>
              <div className="flex items-center">Rs. {item.price}</div>
            </div>
          ))}
          <h2 className="flex justify-end m-8 mr-20 font-bold">
            <span>Total Price </span>
            <span className="ml-2">Rs. {calculatedPrice()}</span>
          </h2>
        </>
      ) : (
        <h2 className="text-center m-56 font-bold">Your cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;
