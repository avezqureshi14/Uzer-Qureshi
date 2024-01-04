import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Search = ({ isLoading, setIsLoading }) => {

  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-2 border-gray rounded-l-md focus:outline-none bg-customColor text-white hover:text-white"
        />
        <button
          className="bg-customColor text-white font-bold py-2 px-4 rounded-r-md hover:bg-gray-300 hover:text-black"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
