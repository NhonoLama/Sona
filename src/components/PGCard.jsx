import React from "react";
import { motion } from "framer-motion";
import backimg from "/gallery/gallery.jpeg";

const PhotoGalleryCard = ({ title, imageUrl, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg w-70 h-70 overflow-hidden relative cursor-pointer flex flex-col justify-end"
      style={{
        backgroundImage: `url(${backimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
    >
      <motion.div
        className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.5 }}
      />

      {/* Title at the bottom */}
      <motion.div
        className="text-center p-2 bg-baseRed text-white text-sm font-semibold flex justify-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default PhotoGalleryCard;
