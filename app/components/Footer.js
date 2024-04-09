import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 py-4 mt-10">
      <div className="container mx-auto text-white flex justify-between">
        <div>
          <div className="text-gray-400 mb-2">ABOUT</div>
          <div>Contact Us</div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Stories</div>
        </div>
        <div>
          <div className="text-gray-400 mb-2">Help</div>
          <div>Payments</div>
          <div>Shipping</div>
          <div>Cancellation and Returns</div>
          <div>FAQ</div>
        </div>
        <div>
          <div className="text-gray-400 mb-2">Consumer Policy</div>
          <div>Terms of Use</div>
          <div>Security</div>
          <div>Privacy</div>
          <div>Sitemap</div>
        </div>
        <div>
          <div className="text-gray-400 mb-2">Mail Us</div>
          <div>
            shoestore@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
