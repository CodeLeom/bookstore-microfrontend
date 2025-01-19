import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [shippingDetails, setShippingDetails] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage so we can display it in checkout
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity),
    0
  ).toFixed(2);

  const handlePlaceOrder = () => {
    // Clear cart
    localStorage.removeItem("cartItems");


    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
      name,
      location,
      shippingDetails,
      items: cartItems,
      date: Date.now()
    });
    localStorage.setItem("orders", JSON.stringify(orders));

    // Then navigate to ThankYou page
    navigate("/thank-you");
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Checkout
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          {/* Cart Items Section */}
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {cartItems.length === 0 ? (
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <p className="mb-4 text-gray-500 dark:text-gray-400">
                  Your cart is empty.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                  >
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <div className="shrink-0 md:order-1">
                        {/* Book image */}
                        <img
                          className="h-20 w-20 object-cover"
                          src={item.image}
                          alt={item.title}
                        />
                      </div>

                      <div className="md:order-2 w-full min-w-0 flex-1 space-y-2 md:max-w-md">
                        {/* Book title + author */}
                        <p className="text-base font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </p>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          {item.author}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Quantity: <span className="font-semibold">{item.quantity}</span>
                        </p>
                      </div>

                      <div className="md:order-3 flex items-center justify-end md:justify-end gap-2">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar with Order Summary & User Form */}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            {/* Order summary */}
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>

              <div className="space-y-4">
                {/* Basic summary (just total) */}
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${total}
                    </dd>
                  </dl>
                  {/* If you want to show shipping, tax, etc. - Hardcoded example */}
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Shipping
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      $0.00
                    </dd>
                  </dl>
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
            </div>

            {/* User Info Form */}
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handlePlaceOrder();
                }}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5
                               text-sm text-gray-900 focus:border-primary-500
                               focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700
                               dark:text-white dark:placeholder-gray-400
                               dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5
                               text-sm text-gray-900 focus:border-primary-500
                               focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700
                               dark:text-white dark:placeholder-gray-400
                               dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Your city or address"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="shippingDetails"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Shipping Details
                  </label>
                  <textarea
                    id="shippingDetails"
                    rows="3"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5
                               text-sm text-gray-900 focus:border-primary-500
                               focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700
                               dark:text-white dark:placeholder-gray-400
                               dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Any instructions or address details..."
                    required
                    value={shippingDetails}
                    onChange={(e) => setShippingDetails(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 
                             text-sm font-medium text-white hover:bg-primary-800 focus:outline-none
                             focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700
                             dark:focus:ring-primary-800"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;