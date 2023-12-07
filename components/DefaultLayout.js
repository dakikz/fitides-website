import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DefaultLayout = ({ children }) => {
  const navItems = [
    {
      pageName: "About",
      pageUrl: "/about",
    },
    {
      pageName: "Products",
      pageUrl: "/products",
    },
    {
      pageName: "Exports",
      pageUrl: "/exports",
    },
    {
      pageName: "Contact",
      pageUrl: "/contact",
    },
  ];
  return (
    <div>
      <Navbar navItems={navItems} />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
