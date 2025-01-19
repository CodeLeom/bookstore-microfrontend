import React, {useEffect, useState} from "react";
import { Link, Outlet } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa';


const Navbar = () => {
  const [itemCount, setItemCount] = useState(0);

  // Function to update the item count from localStorage
  const updateItemCount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setItemCount(count);
  };

  useEffect(() => {
    // Initial load
    updateItemCount();

    // Listen for the custom event from CartPage
    const handleCartUpdated = () => {
      updateItemCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    // Cleanup
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  return (
    <React.Suspense fallback={<div className="p-4">Loading...</div>}>
    <div className="min-h-screen bg-gray-50">
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <Link to="/" className="text-xl font-bold">
        <img src="/assets/logo.png" alt="bookstore logo" className="w-40 h-10" />
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/listing" className="text-lg font-semibold">
          Books
        </Link>
        <Link to="/checkout" className="text-lg font-semibold">
          Checkout
        </Link>

        <Link to="/cart" className="relative">
          <FaShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full px-1">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  </div>
  </React.Suspense>
  );
};

export default Navbar;