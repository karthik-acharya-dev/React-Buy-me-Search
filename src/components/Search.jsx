import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search({ searchInput, setSearchInput }) {
  return (
    <div className="bg-blue-700 w-full px-10 py-3 flex">
      <span className="text-[30px]  w-[20%] font-mono text-white font-extrabold">
        Buy Me Search
      </span>
      <input
        type="text"
        placeholder="Search Something"
        value={searchInput}
        className="px-5 py-3 w-[30%] rounded"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <div className="flex justify-end w-[50%]">
        <ul className="flex  text-white text-lg font-semibold">
          <Link
            to="/"
            className="hover:bg-blue-950 w-[100px] flex items-center justify-center rounded-md"
          >
            Home
          </Link>
          <Link
            to="/Course"
            className="hover:bg-blue-950 w-[100px] flex items-center justify-center rounded-md"
          >
            Course
          </Link>

          <Link
            to="/Contact"
            className="hover:bg-blue-950 w-[100px] flex items-center justify-center rounded-md"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}
