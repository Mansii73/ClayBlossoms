
"use client"; // 👈 Add this line at the very top

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi"; // Pottery symbol

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Left: Logo and Searchbar */}
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-green-700 hover:no-underline">
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
        {/* Dropdown */}
        <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--adaptive:adaptive] [--is-collapse:true] md:[--is-collapse:false]">
          <button
            id="hs-header-base-dropdown"
            type="button"
            className="hs-dropdown-toggle w-full p-2 flex items-center text-lg text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            aria-haspopup="menu"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 10 2.5-2.5L3 5" />
              <path d="m3 19 2.5-2.5L3 14" />
              <path d="M10 6h11" />
              <path d="M10 12h11" />
              <path d="M10 18h11" />
            </svg>
            Dropdown
            <svg
              className={`hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1 ${isDropdownOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* Dropdown content */}
          {isDropdownOpen && (
            <div
              className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md"
              role="menu"
              aria-orientation="vertical"
            >
              <div className="py-1 md:px-1 space-y-0.5">
                <a
                  className="p-2 md:px-3 flex items-center text-lg text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300 font-bold hover:underline"
                  href="#"
                >
                  About
                </a>
                <a
                  className="p-2 md:px-3 flex items-center text-lg text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300 font-bold hover:underline"
                  href="#"
                >
                  Downloads
                </a>
                <a
                  className="p-2 md:px-3 flex items-center text-lg text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300 font-bold hover:underline"
                  href="#"
                >
                  Team Account
                </a>
              </div>
            </div>
          )}
        </div>

        <Link href="/about-us" className="font-bold hover:underline text-lg text-gray-700">
          About Us
        </Link>

        <Link href="/cart" className="flex items-center gap-1 font-bold hover:underline text-lg text-gray-700">
          <FaShoppingCart />
          My Cart
        </Link>

        <Link href="/signin" className="font-bold hover:underline text-lg text-gray-700">
          Sign In
        </Link>

        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="font-bold bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}











