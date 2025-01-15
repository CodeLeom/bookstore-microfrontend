import React from "react";
import { useParams, Link } from "react-router-dom";

const books = {
  1: {
    id: 1,
    title: "Losing Hansley Manor",
    author: "M.Y. Storie",
    price: 20.99,
    image: "http://localhost:3000/assets/mano.png",
    description:
      "This gripping novel tells the haunting story of betrayal and secrets that go back many generations in the Hanley family. Alexander Hanley has spent his simple life in awe of his heritage and the ancestors he has only ever known through legendary tales. This all changes when he receives a windfall inheritance, including the stately Hanley Manor, and is suddenly thrust into a plush existence that threatens the essence of his being. Alexander sets upon a quest for knowledge and understanding that can only be found within the walls and halls of Hanley Manor. On his journey, he discovers some forgotten spaces and unearths secrets that were meant to stay hidden forever. The truths and remnants of a history once erased will become of great consequence to the legacy of Alexander’s family and his very survival"
  },
  2: {
    id: 2,
    title: "The Summer Heist",
    author: "M.Y. Storie",
    price: 35.75,
    image: "http://localhost:3000/assets/summer.png",
    description:
      "Jorgie longed to escape the cluster of thieving misfits she’d called friends for most of her life. She’d outgrown her past and needed a new beginning. So, she ran away from everything and everyone she’d ever known, with no real plan. But no matter how far she ran, the thrill of mischief was still in her heart. It boiled through her blood. After all, could a person really change that much?  On a whim, Jorgie found herself alone and headed to the 1939 New York World’s Fair. Where else could she blend in more anonymously? And there were so many sparkly and priceless collectibles known to be on display at this once-in-a-lifetime event. It was too easy, too fun, too tempting. It was the dawn of a new day. She had her eye on the Blue Pendant of Aldovia and no one could stop her. That is until someone did. And that is where the mystery begins."
  },
  3: {
    id: 3,
    title: "Whispers of a Town called Luna",
    author: "M.Y. Storie",
    price: 65.45,
    image: "http://localhost:3000/assets/whispers.png",
    description:
      "The year is 1820 and the town is called Luna. Twin brothers, once fiercely at odds, come together to unwind knotted secrets buried in the town’s menacing past. This quaint southern town, with its gentile and prosperous people, is not what it appears to be on the surface. Or is it? As the mysteries unfold, the brothers learn much about themselves, their destinies, and their capacities for change.  But will they have the fortitude to do what is expected of them? And can they save the future of the town and the lives of the many people who call it home?"
  }
};

const BookDetails = () => {
  const { bookId } = useParams();
  const book = books[bookId];

  if (!book) {
    return <div className="p-4">Book not found.</div>;
  }

  const handleAddToCart = () => {
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
    <div className="p-4">
      <Link to="/listing" className="text-blue-600">&larr; Back to Listing</Link>
      <div className="flex flex-col md:flex-row mt-4 gap-4">
        <img src={book.image} alt={book.title} className="w-48 h-48" />
        <div>
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-gray-600">by {book.author}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">${book.price}</p>
          <p className="mb-4">{book.description}</p>
          <button
            onClick={handleAddToCart}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;