import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const ProfileCard = ({ name, post, img }) => {
  return (
    <motion.div
      className="relative w-80 h-96 bg-cover bg-center rounded-lg shadow-lg overflow-hidden flex flex-col justify-end p-6 cursor-pointer"
      style={{ backgroundImage: `url(${img})` }}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 transition-opacity"></div>

      <motion.div
        className="absolute left-0 bottom-0 bg-amber-50 p-3 px-7 w-full"
        initial={{ height: "60px" }}
        whileHover={{ height: "120px" }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        <div className="  text-center flex gap-20">
          <h3 className="font-bold">{name}</h3>
          <p>{post}</p>
        </div>
        <div className="flex gap-4 items-center mt-5">
          <FaFacebookF
            size="30px"
            className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-800 transition"
          />
          <FaTwitter
            size="30px"
            className="text-white bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
