import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      {/* navbar  */}
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
