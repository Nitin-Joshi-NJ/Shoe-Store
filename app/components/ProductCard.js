"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/public/nike1.png";
import image2 from "@/public/nike2.jpg";
import image3 from "@/public/nike3.png";
import image4 from "@/public/nike4.png";
import image5 from "@/public/nike5.png";
import image6 from "@/public/nike6.png";
import { useRouter } from "next/navigation";
import Cart from "./Cart";

export default function ProductCard() {
  // const [visible,setVisible] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  // const router = useRouter()
  const data = [
    {
      id: 1,
      image: image1,
      price: "5000",
      name: "Nike Shoes 1",
    },
    {
      id: 2,
      image: image2,
      price: "8000",
      name: "Nike Shoes 2",
    },
    {
      id: 3,
      image: image3,
      price: "9000",
      name: "Nike Shoes 3",
    },
    {
      id: 4,
      image: image4,
      price: "10000",
      name: "Nike Shoes 4",
    },
    {
      id: 5,
      image: image5,
      price: "14000",
      name: "Nike Shoes 5",
    },
    {
      id: 6,
      image: image6,
      price: "7000",
      name: "Nike Shoes 6",
    },
  ];

  const handleClick = (e, value) => {
    console.log(value);
    console.log(value.image.src);
    const updatedCartItems = [...cartItems, value];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    // setCartItems([...cartItems,value])
    // localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // console.log(cartItems)
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 mx-16">
      {data.map((value) => (
        <div key={value.id}>
          <Image src={value.image} alt="image" className=" h-48 w-full my-2" />
          <h1>{value.name}</h1>
          <div className="flex justify-between">
            <span>Rs. {value.price} </span>
            <span>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                onClick={(e) => handleClick(e, value)}
              >
                Add to Cart
              </button>
            </span>
          </div>
        </div>
      ))}
      {/* {cartItems.length > 0 && <Cart items={cartItems} />} */}
    </div>
  );
}
