// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className=" container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white font-bold text-xl">Shoe Store</div>
        </Link>
        <div className="flex">
          <Link href="/products">
            <div className="text-white mx-4">Products</div>
          </Link>
          <Link href="/cart">
            <div className="text-white mx-4">Cart</div>
          </Link>
          <Link href="/register">
            <div className="text-white mx-4">Login/Register</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
