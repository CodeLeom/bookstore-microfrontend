import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    // <div className="bg-gray-900">
    <Router>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
    // </div>
  );
};

export default App;
