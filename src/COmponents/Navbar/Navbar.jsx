import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-gray-800 text-white ">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-gray-800 rounded-box w-52"
            >
              <li>
                <Link to={""}>Home</Link>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/history"}>Reading History</Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost  text-right normal-case text-2xl"
          >
            NoonPost
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/history"}>Reading History</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
