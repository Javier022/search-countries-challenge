import React from "react";

const InputSearch = ({ text, placeholder, handleChange, value, autoFocus }) => {
  return (
    <div className="mt-4">
      <label htmlFor="search" className="text-gray-500">
        {text}
      </label>
      <div className="relative mt-4">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          autoFocus={autoFocus}
          onChange={handleChange}
          id="search"
          className="text-gray-500 shadow border border-gray-500 w-full  rounded-xl py-2 pl-12 pr-3  focus:outline-none focus:border-blue-700 focus:ring-sky-500  focus:ring-1"
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputSearch;
