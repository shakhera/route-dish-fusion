import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-300 py-4 fixed bottom-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; 2023 Route Dish Fusion</p>
          <div>
            <Link to="/about" className="mx-2 hover:text-white">
              About
            </Link>
            <Link to="/contact" className="mx-2 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
