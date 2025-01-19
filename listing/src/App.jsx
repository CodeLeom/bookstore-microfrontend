import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

const App = () => {
  return (
      <Routes>
        <Route path="/*" element={<BookList />} />
        <Route path="/listing" element={<BookList />} />
        <Route path="/:bookId" element={<BookDetails />} />
      </Routes>
  );
};

export default App;