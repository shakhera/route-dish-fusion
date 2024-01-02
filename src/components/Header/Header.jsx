import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-200 p-4 pr-8 pl-8">
      <div className="flex items-center justify-between">
        <img src="fork-and-knife.svg" alt="" className="w-8 h-8" />
        <nav className="hidden md:flex md:space-x-4 font-bold">
          <Link to="/">Home</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
