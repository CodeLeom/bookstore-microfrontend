import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/listing" element={<BookList />} />
        <Route path="/:bookId" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
