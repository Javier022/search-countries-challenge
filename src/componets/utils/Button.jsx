import React from "react";

const Button = ({ text = "", fn, name = "", selected = false }) => {
  return (
    <button
      name={name}
      onClick={(e) => fn && fn(e)}
      className={`${
        selected ? "bg-blue-900 text-white" : "bg-white text-gray-500"
      }  h-10 w-40 rounded font-semibold border border-gray-500 shadow`}
    >
      {text}
    </button>
  );
};

export default Button;
