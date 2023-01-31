import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../COmponents/Footer/Footer";
import Navbar from "../COmponents/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
