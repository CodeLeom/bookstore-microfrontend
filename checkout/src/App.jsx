import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import ThankYouPage from "./components/ThankYouPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;