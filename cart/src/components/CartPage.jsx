import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from local storage
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const total = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    // Dispatch custom event to notify navbar
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleCheckout = () => {
    // Navigate to checkout
    navigate("/checkout");
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        {/* If cart empty */}
        {cartItems.length === 0 ? (
          <div className="mt-6 text-gray-600 dark:text-gray-300">
            <p>Your cart is empty.</p>
            <div className="mt-4">
              <Link
                to="/listing"
                className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            {/* Left side: Items list */}
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      {/* Product image & link (if needed) */}
                      <div className="shrink-0 md:order-1">
                        <img
                          className="h-20 w-20 object-cover"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <div className="flex items-center">
                          {/* Decrement */}
                          <button
                            type="button"
                            onClick={() => {
                              const updatedCart = [...cartItems];
                              const foundIndex = updatedCart.findIndex(
                                (p) => p.id === item.id
                              );
                              if (foundIndex >= 0) {
                                // if quantity is more than 1, decrement
                                if (updatedCart[foundIndex].quantity > 1) {
                                  updatedCart[foundIndex].quantity -= 1;
                                } else {
                                  // remove item if quantity is 1
                                  updatedCart.splice(foundIndex, 1);
                                }

                                setCartItems(updatedCart);
                                localStorage.setItem(
                                  "cartItems",
                                  JSON.stringify(updatedCart)
                                );

                                // Dispatch custom event to notify navbar
                                window.dispatchEvent(new Event("cartUpdated"));
                              }
                            }}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          {/* Quantity display */}
                          <input
                            type="text"
                            readOnly
                            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white focus:outline-none"
                            value={item.quantity}
                          />
                          {/* Increment */}
                          <button
                            type="button"
                            onClick={() => {
                              const updatedCart = [...cartItems];
                              const foundIndex = updatedCart.findIndex(
                                (p) => p.id === item.id
                              );
                              if (foundIndex >= 0) {
                                updatedCart[foundIndex].quantity += 1;
                                setCartItems(updatedCart);
                                localStorage.setItem(
                                  "cartItems",
                                  JSON.stringify(updatedCart)
                                );

                                // Dispatch custom event to notify navbar
                                window.dispatchEvent(new Event("cartUpdated"));
                              }
                            }}
                            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700"
                          >
                            <svg
                              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                        {/* Price */}
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-gray-900 dark:text-white">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>

                      {/* Details & remove button */}
                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <p className="text-base font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.author}
                        </p>

                        <div className="flex items-center gap-4">
                          {/* Remove item button */}
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.id)}
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                          >
                            <FaTrash className="mr-1.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Order summary */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Items total
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${total}
                      </dd>
                    </dl>

                    {/* final total */}
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        ${total}
                      </dd>
                    </dl>
                  </div>
                </div>

                {/* Proceed to Checkout */}
                <button
                  onClick={handleCheckout}
                  className="flex w-full items-center justify-center rounded-lg bg-gray-50 px-5 py-2.5 text-sm font-bold text-black hover:bg-gray-200"
                >
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    or
                  </span>
                  <Link
                    to="/listing"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white underline hover:no-underline"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Voucher code */}
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Do you have a voucher or gift card?
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter Code"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;