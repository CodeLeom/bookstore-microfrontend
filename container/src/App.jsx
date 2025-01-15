import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ListingApp = React.lazy(() => import("listing/App"));
const CartApp = React.lazy(() => import("cart/App"));
const CheckoutApp = React.lazy(() => import("checkout/App"));

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Navbar />
        <React.Suspense fallback={<div className="p-4">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listing/*" element={<ListingApp />} />
            <Route path="/cart/*" element={<CartApp />} />
            <Route path="/checkout/*" element={<CheckoutApp />} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
};

export default App;