import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import { IoIosArrowDown } from "react-icons/io";

import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import img from "/whitelogo.png";
import mobileImg from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Activities", path: "/activities" },
    {
      name: "Notice & Events",
      hasDropdown: true,
      links: [
        { name: "Notices", path: "/notices-events/notices" },
        { name: "Events", path: "/notices-events/upcoming-event" },
      ],
    },
    {
      name: "Galleries",
      hasDropdown: true,
      links: [
        { name: "Photo Gallery", path: "/gallery/photo_gallery" },
        { name: "Video Gallery", path: "/galleries/videos" },
      ],
    },
    {
      name: "Publications",
      hasDropdown: true,
      links: [{ name: "SONA Documents", path: "/publications/docs" }],
    },
    {
      name: "About Us",
      hasDropdown: true,
      links: [
        { name: "Introduction", path: "/about_us/introduction" },
        { name: "Mission and Vision", path: "/about_us/mission_vision" },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setIsOpen(false);
        setMobileDropdownOpen(null);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="xxl:flex items-center hidden text-white justify-between bg-baseRed h-20 p-4 px-15">
        <div className="flex items-center gap-7">
          <Link to="/">
            <img src={img} width="50px" alt="Logo" />
          </Link>
          <div className="text-xl font-bold">
            Society of Nepalese Architects{" "}
          </div>
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/societyofnepalesearchitects?ref=embed_page"
            target="_blank"
          >
            <FaFacebookF
              size="18px"
              className="cursor-pointer hover:scale-105 duration-200 transition hover:text-[#EAD196]"
            />
          </a>

          <FaInstagram
            size="18px"
            className="cursor-pointer hover:scale-105 duration-200 transition hover:text-[#EAD196]"
          />
          <FaTwitter
            size="18px"
            className="cursor-pointer hover:scale-105 duration-200 transition hover:text-[#EAD196]"
          />
          <FaYoutube
            size="18px"
            className="cursor-pointer hover:scale-105 duration-200 transition hover:text-[#EAD196]"
          />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="p-5 px-8 flex sticky h-11 top-0 z-20 justify-between items-center xxl:hidden bg-white">
        <Link to="/">
          <img src={mobileImg} width="30px" alt="Logo" />
        </Link>
        <button onClick={toggleMenu} className="menu-button focus:outline-none">
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      <div
        className={`mobile-menu fixed right-0 top-10 bg-white z-20 h-screen w-3/4 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="p-5 px-10 flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className={`flex justify-between items-center p-2 cursor-pointer text-sm ${
                  location.pathname === item.path
                    ? "text-baseRed font-bold"
                    : ""
                }`}
                onClick={() =>
                  item.hasDropdown
                    ? setMobileDropdownOpen(
                        mobileDropdownOpen === index ? null : index
                      )
                    : closeMenu()
                }
              >
                <Link to={item.path || "#"}>{item.name}</Link>
                {item.hasDropdown && (
                  <IoIosArrowDown
                    className={`transition-transform ${
                      mobileDropdownOpen === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
              {item.hasDropdown && mobileDropdownOpen === index && (
                <ul className="pl-6 space-y-2 bg-gray-100 rounded-md py-2">
                  {item.links.map((link, i) => (
                    <li key={i} className="p-2 hover:bg-gray-200 text-sm">
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={
                          location.pathname === link.path
                            ? "text-baseBlue font-bold"
                            : ""
                        }
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* Desktop Navbar */}
      <div className="p-5 h-15 px-20 hidden xxl:flex justify-center items-center sticky top-0 z-20 shadow-md bg-white">
        <ul className="flex gap-20 space-x-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group py-2 transition duration-300 transform hover:scale-x-105"
            >
              <Link
                to={item.path || "#"}
                className={`flex items-center gap-1 transition duration-300 ${
                  location.pathname === item.path
                    ? "text-baseRed"
                    : "hover:text-baseRed"
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <IoIosArrowDown
                    className={`transition duration-300 ${
                      location.pathname === item.path
                        ? "text-baseRed"
                        : "group-hover:text-baseRed"
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 hidden group-hover:block">
                  {item.links.map((link, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 text-black hover:text-baseRed hover:bg-gray-100 cursor-pointer transition duration-300"
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center gap-1 ${
                          location.pathname === link.path ? "text-baseRed" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
