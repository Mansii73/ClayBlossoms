"use client"; // 👈 Add this line at the very top

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi"; // Pottery symbol

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <GiStoneWheel size={28} className="text-amber-700" />
              <span className="text-xl font-serif font-semibold text-gray-800">
                ClayBlossoms
              </span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search for pottery..."
                className="w-[300px] pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-gray-700"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/about-us" 
              className="text-gray-600 hover:text-amber-700 transition-colors duration-200"
            >
              About Us
            </Link>

            <Link 
              href="/cart" 
              className="flex items-center space-x-1 text-gray-600 hover:text-amber-700 transition-colors duration-200"
            >
              <FaShoppingCart size={18} />
              <span>Cart</span>
            </Link>

            {/* Login Button */}
            <Link 
              href="/login"
              className="text-gray-600 hover:text-amber-700 transition-colors duration-200"
            >
              Login
            </Link>

            {/* Sign Up Button */}
            <Link 
              href="/signin"
              className="px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}