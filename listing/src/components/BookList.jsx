import React from "react";
import { Link } from "react-router-dom";

// Sample data
const books = [
  {
    id: 1,
    title: "Losing Hansley Manor",
    author: "M.Y. Storie",
    price: 20.99,
    image: "http://localhost:3000/assets/mano.png"
  },
  {
    id: 2,
    title: "The Summer Heist",
    author: "M.Y. Storie",
    price: 35.75,
    image: "http://localhost:3000/assets/summer.png"
  },
  {
    id: 3,
    title: "Whispers of a Town called Luna",
    author: "M.Y. Storie",
    price: 65.45,
    image: "http://localhost:3000/assets/whispers.png"
  }
];

const BookList = () => {
  // Helper function to add a book to the cart (in localStorage)
  const handleAddToCart = (book) => {
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Check if book is already in cart
    const foundIndex = existingCart.findIndex((item) => item.id === book.id);
    if (foundIndex >= 0) {
      // Increase quantity
      existingCart[foundIndex].quantity += 1;
    } else {
      // Add new item
      existingCart.push({ ...book, quantity: 1 });
    }
    // Save updated cart
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // Navigate to cart
    window.location.href = "/cart";
  };

  return (
    <div className="px-6">
      <h2 className="text-2xl font-bold my-4">Available Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="w-full bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <img src={book.image} alt={book.title} className="rounded-t-lg h-48 pt-4 object-scale-down w-full" />
            <div className="px-4 py-2">
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">{book.title}</h3>
              <p className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-800 w-24">{book.author}</p>
              <p className="text-2xl font-bold text-gray-900">${book.price}</p>
              <div className="flex gap-2 mt-2 mb-2">
                <Link
                  to={`/${book.id}`}
                  className="py-1.5 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleAddToCart(book)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;