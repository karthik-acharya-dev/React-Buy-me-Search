import "./App.css";

import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./index.css";

import Search from "./components/Search";
import Course from "./Pages/Course";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course searchInput={searchInput} />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
