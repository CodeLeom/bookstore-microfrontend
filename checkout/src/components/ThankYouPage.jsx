import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  // Pull the array of orders from localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  // Select the most recent order
  const mostRecentOrder = orders[orders.length - 1];

  const handleReturnShopping = () => {
    navigate("/");
  };

  // Safely extract fields; if the user didn't store some data, default to "N/A".
  const date = mostRecentOrder?.date ? new Date(mostRecentOrder.date).toLocaleDateString() : "N/A";
  const paymentMethod = mostRecentOrder?.paymentMethod || "Credit Card";
  const name = mostRecentOrder?.name || "N/A";
  const location = mostRecentOrder?.shippingDetails || "N/A";

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
          Thanks for your order!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
          Your order{" "}
          <span className="font-medium text-gray-900 dark:text-white hover:underline">
            #7564804
          </span>{" "}
          will be processed within 24 hours during working days. We will notify
          you by email once your order has been shipped.
        </p>

        {/* Order info box */}
        <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Date
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {date}
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Payment Method
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {paymentMethod}
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Name
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {name}
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              location
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {location}
            </dd>
          </dl>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleReturnShopping}
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none
                       bg-white rounded-lg border border-gray-200 hover:bg-gray-100
                       hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100
                       dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400
                       dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Return to shopping
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;