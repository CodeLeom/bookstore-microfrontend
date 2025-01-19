import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <div className="bg-gray-900">
        <Routes>
          <Route path="/" element={<CartPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
    </div>
  );
};

export default App;