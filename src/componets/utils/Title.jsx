import React from "react";

const Title = ({ text, color }) => {
  return (
    <h1 className={`${color ? color : "text-white"} text-4xl font-semibold `}>
      {text}
    </h1>
  );
};

export default Title;
