import React, { useState } from "react";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <svg
      onClick={() => setIsOpen(!isOpen)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-10 h-10 cursor-pointer"
    >
      <line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        className={`stroke-black stroke-2 transition-all duration-300 ${
          isOpen ? "translate-x-2 rotate-45" : ""
        }`}
      />
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        className={`stroke-black stroke-2 transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        className={`stroke-black stroke-2 transition-all duration-300 ${
          isOpen ? "-translate-x-2 translate-y-2  -rotate-45" : ""
        }`}
      />
    </svg>
  );
};

export default MenuIcon;
