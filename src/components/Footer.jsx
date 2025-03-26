import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around bg-[#7D0A0A]  py-10 px-15 md:text-[1rem] text-sm text-white max-lg:block  ">
        <div>
          <div className="flex gap-4 items-center mb-4">
            <img src="/whitelogo.png" alt="logo" width="60px" />
            <span className="font-bold text-xl md:text-2xl">
              Society of Nepalese Architects
            </span>
          </div>
          <div className="flex flex-col gap-2 py-5">
            <span>Churchil Complex, Sundhara Kathmandu, Nepal</span>
            <span>Phone : 01-4262252</span>
            <span>Email : sona2047@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 max-lg:pt-10 ">
          <span className="font-bold pb-5 ">SONA.org</span>
          <Link
            to="/"
            className="duration-200 hover:brightness-400 hover:shadow-2xl hover:scale-105"
          >
            <span>Membership</span>
          </Link>
          <Link
            className="duration-200 hover:brightness-400 hover:shadow-2xl hover:scale-105"
            to="/"
          >
            <span>Become a Partner</span>
          </Link>
          <Link
            to="/"
            className="duration-200 hover:brightness-400 hover:shadow-2xl hover:scale-105"
          >
            <span>FAQ</span>
          </Link>
          <Link
            to="/"
            className="duration-200 hover:brightness-400 hover:shadow-2xl hover:scale-105"
          >
            <span>Volunteer with SONA</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-around items-center  bg-[#7D0A0A] py-10 px-15 text-white max-lg:block  ">
        <div className="max-lg:pb-4 text-sm md:text-base">
          © 2021 SONA | Developed By : Nhono Studios Pvt. Ltd.
        </div>
        <div className="flex gap-5">
          <div className="p-2 rounded-full relative cursor-pointer border-1 border-gray-400 duration-300 hover:brightness-200  hover:scale-105">
            <FaInstagram size="25px" />
          </div>
          <div className="p-2 rounded-full border-1 border-gray-400 cursor-pointer duration-300 hover:brightness-200  hover:scale-105">
            <BsFacebook size="25px" />
          </div>
          <div className="p-2 rounded-full border-1 border-gray-400 cursor-pointer duration-300 hover:brightness-200  hover:scale-105">
            <FaXTwitter size="25px" />
          </div>
          <div className="p-2 rounded-full border-1 border-gray-400 cursor-pointer duration-300 hover:brightness-200  hover:scale-105">
            <ImYoutube2 size="25px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
