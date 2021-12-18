import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      {/* navbar  */}
      <Navigation />
      {/* main content */}
      <main>{children}</main>
      {/* footer  */}
      <Footer />
    </>
  );
};

export default Layout;
