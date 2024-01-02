import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div className="bg-gray-200 p-4 pr-8 pl-8">
      <div className="flex items-center justify-between">
        <img src="fork-and-knife.svg" alt="" className="w-8 h-8" />
        <nav className="hidden md:flex md:space-x-4 font-bold">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/restaurants">Restaurants</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/contact">Contact</ActiveLink>
        </nav>

        {/* <nav className="md:hidden flex flex-col">
          <Link to="/home" className="font-bold mb-2">
            Home
          </Link>
          <Link to="/restaurant" className="font-bold mb-2">
            Restaurant
          </Link>
          <Link to="/about" className="font-bold mb-2">
            About
          </Link>
          <Link to="/contact" className="font-bold mb-2">
            Contact
          </Link>
        </nav> */}
      </div>
    </div>
  );
};

export default Header;
