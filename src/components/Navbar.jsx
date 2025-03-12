import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex items-center text-white justify-between bg-[#7D0A0A] h-25 p-4 px-10">
        <div>logo</div>
        <div>email</div>
      </div>

      {/* Mobile Navbar - Hamburger Icon */}
      <div className="p-4 px-10 mobile:hidden flex justify-between">
        <div>Menu</div>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <MenuIcon />
        </button>
      </div>

      <div className={`p-4 px-10 mobile:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4">
          <Link
            to="/"
            className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-gray-500"
          >
            <li>Home</li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-gray-500">
              Activities
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-gray-500">
              Awards & Honors
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-gray-500">
              Galleries
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-gray-500">
              Notice and Events
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-gray-500">
              Sona Documents
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-gray-500">
              About Us
            </li>
          </Link>
        </ul>
      </div>

      {/* Desktop Navbar Menu Items */}
      <div className="p-4 px-10 hidden mobile:block">
        <ul className="flex justify-between">
          <Link
            to="/"
            className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-grey-500"
          >
            <li>Home</li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-grey-500">
              Activities
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-grey-500">
              Awards & Honors
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-grey-500">
              Galleries
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-grey-500">
              Notice and Events
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-grey-500">
              Sona Documents
            </li>
          </Link>
          <Link to="/">
            <li className="p-2 transition duration-400 ease-in-out transform hover:scale-105 hover:bg-grey-500">
              About Us
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
