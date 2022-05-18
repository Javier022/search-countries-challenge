import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="py-3 w-9/12 mx-auto px-5">{children}</main>
    </>
  );
};

export default Layout;
