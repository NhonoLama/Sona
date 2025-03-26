import React from "react";

const MenuIcon = ({ isOpen }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 cursor-pointer transition-transform duration-300 ease-in-out "
    >
      <line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        className={`stroke-black stroke-2 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-[3px] rotate-45 origin-center" : ""
        }`}
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        className={`stroke-black stroke-2 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        className={`stroke-black stroke-2 transition-transform duration-300 ease-in-out ${
          isOpen ? "-translate-y-[6px] -rotate-45 origin-center" : ""
        }`}
      />
    </svg>
  );
};

export default MenuIcon;
