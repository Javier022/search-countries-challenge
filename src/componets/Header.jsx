import React from "react";
import Title from "./utils/Title";

const Header = () => {
  return (
    <header className="bg-blue-900">
      <div className="py-8 px-5 w-9/12 mx-auto">
        <Title text="Country Search" />
      </div>
    </header>
  );
};

export default Header;
