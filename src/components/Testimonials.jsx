import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const testimonialsData = [
  {
    image: "/profileui.jpg",
    name: "Pratik Timilsina",
    text: "Excited to share the happiness that I received US$ 3000.00...",
    designation: "Recipient Honored by Facebook, USA",
  },
  {
    image: "/profileui.jpg",
    name: "Mohan Gurung",
    text: "Very happy to be part of the Rocket Engineering Competition...",
    designation: "Team Leader: Rocketry Project, GARUDA, USA",
  },
  {
    image: "/profileui.jpg",
    name: "Sophiya Khadka",
    text: "I am truly delighted to express my happiness...",
    designation: "Bronze Medal Int’l Taekwondo Poomsae Championship",
  },
];

const TestimoSection = () => {
  return (
    <div className="my-25 mx-4">
      <span className="text-4xl font-bold text-baseRed flex justify-center mb-10 max-xxl:text-3xl">
        What People Say
      </span>
      <div className="relative w-full h-[750px] overflow-hidden xxl:h-[650px] max-xxl:flex-col max-xxl:items-center">
        <div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] max-xxl:w-[400px] max-xxl:h-[200px]">
            <svg
              viewBox="0 0 600 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full rounded-4xl"
            >
              <path
                d="M0,150 C150,250 450,50 600,150 L600,300 L0,300 Z"
                fill="rgba(125, 10, 10 ,0.9)"
              />
            </svg>
          </div>
        </div>

        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`${
              index === 0
                ? "xxl:absolute my-4 xxl:top-10 xxl:left-30 xxl:rotate-[3deg]"
                : index === 1
                ? "xxl:absolute my-2 xxl:top-20 xxl:right-30 xxl:rotate-[-4deg]"
                : "xxl:absolute my-2 xxl:top-80 xxl:left-150 xxl:rotate-[3deg]"
            } z-10 transform transition-transform duration-300 hover:scale-105 max-xxl:mt-5 max-xxl:static`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.3 }}
          >
            <Card {...testimonial} />
          </motion.div>
        ))}

        {/* View All Button */}
        <div className="flex xxl:m-auto ml-30 xxl:absolute xxl:bottom-10 left-1/2 transform -translate-x-1/2 ">
          <motion.button
            className="border-2 border-baseBlue text-baseRed px-6 py-2 rounded-full hover:bg-baseRed hover:scale-110 cursor-pointer hover:text-white transition"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5 }}
          >
            View All ➜
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestimoSection;
