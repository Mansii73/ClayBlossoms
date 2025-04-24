import React from 'react';

function Navbar() {
  return (
    <header className="z-50 w-full bg-black border-b border-gray-200 dark:border-neutral-700">
      <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white font-bold text-xl">
          ClayBlossoms
        </div>

        {/* Search bar - bigger & white */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-5 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          />
        </div>

        {/* Navbar links */}
        <nav>
          <ul className="flex gap-4 text-white text-sm font-medium">
            <li>
              <a href="#" className="hover:underline hover:decoration-blue-500 hover:decoration-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:decoration-blue-500 hover:decoration-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:decoration-blue-500 hover:decoration-2">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:decoration-blue-500 hover:decoration-2">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
