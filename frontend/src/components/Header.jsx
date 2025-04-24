import React from 'react';

export default function Header() {
  return (
    <>
      <div className="py-4 mx-[10px] shadow-xl bg-white w-full h-full object-cover">
        <div className="flex flex-wrap justify-center items-center mt-4 space-x-6 w-full">
          <img 
            src="https://www.clayblossoms.com/uploads/2/3/9/1/23910383/new-clayblossoms-logo22-web.png" 
            className="w-[140px] h-auto transition-transform duration-300 hover:translate-x-2 cursor-pointer" 
            alt="Clayblossoms Logo"
          />
          <form className="w-[45%] max-w-md">
            <input 
              type="text" 
              placeholder="Type for search" 
              className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-400" 
            />
          </form>
          <ul className="flex space-x-8 text-gray-700 font-semibold">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Products</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          </ul>
        </div>
      </div>

    </>
  );
}
