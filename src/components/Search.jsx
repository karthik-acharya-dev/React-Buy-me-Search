import React, { useState } from "react";

export default function Search({ searchInput, setSearchInput }) {
  return (
    <div className="bg-blue-700 w-full px-10 py-3 flex">
      <input
        type="text"
        placeholder="Search Something"
        value={searchInput}
        className="px-5 py-3 w-[40%] rounded"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <div className="text-white font-extrabold flex justify-end w-[60%] ">
        <span className="text-[30px]  font-mono"> Buy Me Search</span>
      </div>
    </div>
  );
}
