import React from "react";

const Card = ({ image, name, text, designation }) => {
  return (
    <div className="relative p-6 rounded-lg shadow-xl max-w-lg bg-[#F5F5F5]">
      <div className="absolute -top-6 left-6 w-16 h-16 rounded-full border-4 border-white overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-700 mt-6">{text}</p>
      <p className="mt-4 font-bold text-baseRed">{name}</p>
      <p className="italic text-sm text-gray-500 max-w-[250px]">
        {designation}
      </p>
      <div className="absolute bottom-10 right-7 text-white bg-baseRed px-4 py-2 hover:scale-110 transition duration-300 ease-in-out  rounded-full cursor-pointer">
        ➜
      </div>
    </div>
  );
};

export default Card;
