import "./App.css";
import React, { useState } from "react";
import BrandPage from "./components/BrandPage";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";

import "./index.css";
import Api from "./components/Api";
import UseEf from "./components/UseEf";
import BoxBar from "./components/BoxBar";
import Search from "./components/Search";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      {/* <Api /> */}
      {/* <UseEf /> */}
      <BoxBar searchInput={searchInput} />
    </>
  );
}

export default App;
