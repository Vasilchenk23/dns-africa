"use client"; 

import { useState } from "react";

export default function SearchBar() {
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('search', query);
    window.history.replaceState(null, '', '?' + queryParams.toString());
  };

  return (
    <div className="relative w-full sm:w-[70%]">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full h-[48px] px-4 py-2 pl-10 border text-black border-gray-300 rounded-full shadow-sm focus:outline-none"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 15l5 5m-5-5a7 7 0 1 0-10-10 7 7 0 0 0 10 10z"
        />
      </svg>
    </div>
  );
}
