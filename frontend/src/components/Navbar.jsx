"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Left: Logo and Searchbar */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-700 hover:no-underline"
        >
          <GiStoneWheel size={30} />
          ClayBlossoms
        </Link>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="border border-gray-300 rounded-full pl-12 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 w-[350px] font-bold"
          />
          <FaSearch className="absolute left-4 text-gray-400" size={20} />
        </div>
      </div>

      {/* Right: Navigation Links */}
      <div className="flex items-center gap-8 text-lg font-bold text-gray-700">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/about-us" className="hover:underline">
          About 
        </Link>

        <Link href="/products" className="hover:underline">
          Products
        </Link>

        <Link href="/contact" className="hover:underline">
          Contact
        </Link>

        <Link href="/signup" className="hover:underline">
          SignUp
        </Link>

        <Link
          href="/cart"
          className="flex items-center gap-1 hover:underline"
        >
          <FaShoppingCart />
          Cart
        </Link>

        {/* Get Started Button
        <Link
          href="/get-started"
          className="font-bold bg-green-600 text-white px-4 py-2 rounded-half hover:bg-green-700 transition"
        >
          Get Started
        </Link> */}
      </div>
    </nav>
  );
}











