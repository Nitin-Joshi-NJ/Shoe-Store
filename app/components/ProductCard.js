"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "@/public/nike1.png";
import image2 from "@/public/nike2.jpg";
import image3 from "@/public/nike3.png";
import image4 from "@/public/nike4.png";
import image5 from "@/public/nike5.png";
import image6 from "@/public/nike6.png";
import { useRouter } from "next/navigation";
import Cart from "./Cart";
import Alerts from "./Alerts";

export default function ProductCard() {
  // const [visible,setVisible] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  // const router = useRouter()
  const data = [
    {
      id: 1,
      qty: 1,
      image: image1,
      price: "5000",
      name: "Nike Shoes 1",
    },
    {
      id: 2,
      qty: 1,
      image: image2,
      price: "8000",
      name: "Nike Shoes 2",
    },
    {
      id: 3,
      qty: 1,
      image: image3,
      price: "9000",
      name: "Nike Shoes 3",
    },
    {
      id: 4,
      qty: 1,
      image: image4,
      price: "10000",
      name: "Nike Shoes 4",
    },
    {
      id: 5,
      qty: 1,
      image: image5,
      price: "14000",
      name: "Nike Shoes 5",
    },
    {
      id: 6,
      qty: 1,
      image: image6,
      price: "7000",
      name: "Nike Shoes 6",
    },
  ];

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const handleAddToCart = (e, value) => {
    // alert('item added to cart')
    // console.log(value);
    // console.log(value.image.src);
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === value.id
    );
    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      const updatedItem = { ...updatedCartItems[existingItemIndex] };
      updatedItem.qty += 1;
      updatedItem.price = value.price * updatedItem.qty; // Assuming price is a string, converting it to integer for calculations
      updatedCartItems[existingItemIndex] = updatedItem;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      // If the product is not already in the cart, add it
      const updatedCartItems = [...cartItems, { ...value, qty: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      // alert(`${value.name} has been added to your cart.`);
    }
    // setValue(true)
    // window.alert(`${value.name} has been added to your cart.`);
    setShowAlert(true)
    setTimeout(()=>{
      setShowAlert(false)
    },1000)
  };

  return (
    <>
      {showAlert && (
        <Alerts
          type={"info"}
          message={"Item Added to Your Cart"}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-16">
        {data.map((value) => (
          <div key={value.id}>
            <Image
              src={value.image}
              alt="image"
              className=" h-48 w-full my-2"
            />
            <h1>{value.name}</h1>
            <div className="flex justify-between">
              <span>Rs. {value.price} </span>
              <span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  onClick={(e) => handleAddToCart(e, value)}
                >
                  Add to Cart
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
