import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

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