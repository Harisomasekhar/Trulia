// src/components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-800 p-3 pl-2">
      <div className="container mx-auto hidden md:flex space-x-4 ">
        <div className="container mx-auto hidden md:flex space-x-4 flex justify-start items-start">
          <a href="/" className="text-black text-2xl font-bold">
            trulia
          </a>
          <div className="relative group px-2 py-1">
            <a
              href="/"
              className="px-2 py-1 text-blackhover:text-black font-bold hover:bg-blue-500 rounded-md "
            >
              Buy
            </a>
            <div className="absolute left-0 hidden mt-2 w-48 rounded-md shadow-lg bg-white group-hover:block">
              <p>Hyderabad</p>
              <a
                href="/home1"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Homes for Sale
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Open Houses
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                New Houses
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Recently Sold
              </a>
            </div>
          </div>
          <div className="relative group px-2 py-1">
            <a
              href="/"
              className="px-2 py-1 text-blackhover:text-black font-bold hover:bg-blue-500 rounded-md"
            >
              Rent
            </a>
            <div className="absolute left-0 hidden mt-2 w-48 rounded-md shadow-lg bg-white group-hover:block">
              <p>Hyderabad</p>
              <a
                href="/home1"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                All Rentals
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Appartements for Rent
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Houses for Rent
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Post a rental listing
              </a>
            </div>
          </div>
          <div className="relative group px-2 py-1">
            <a
              href="/"
              className="px-2 py-1 text-blackhover:text-black font-bold hover:bg-blue-500 rounded-md"
            >
              Mortgage
            </a>
            <div className="absolute left-0 hidden mt-2 w-48 rounded-md shadow-lg bg-white group-hover:block">
              <p>Hyderabad</p>
              <a
                href="/home1"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Mortgage Overview
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Get pre-qualified
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Mortgage rates
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Refinance Rates
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Mortgage Caluclater
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Afordbility Caluclater
              </a>
              <a
                href="/home2"
                className="block px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
              >
                Refinance Caluclater
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:flex space-x-1 justify-end">
          <a
            href="/services"
            className="text-blackhover:text-black font-bold w-48"
          >
            Saved Homes
          </a>
          <a
            href="/contact"
            className="text-blackhover:text-black font-bold w-48"
          >
            Saved Searches
          </a>
          <a
            href="/contact"
            className="border border-black rounded-md font-bold text-blackhover:text-black w-48 py-1"
          >
            Sign up or Login
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
