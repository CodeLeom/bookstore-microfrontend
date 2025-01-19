import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const ListingApp = React.lazy(() => import("listing/App"));
console.log("ListingApp: ", ListingApp);
// const CartApp = React.lazy(() => import("cart/App"));
// const CheckoutApp = React.lazy(() => import("checkout/App"));

const routers = createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route index element={<HomePage />} />
    <Route path="/listing/*" element={<ListingApp />} />
    {/* <Route path="/cart/*" element={<CartApp />} /> */}
    {/* <Route path="/checkout/*" element={<CheckoutApp />} /> */}
  </Route>
);

export default createBrowserRouter(routers);
