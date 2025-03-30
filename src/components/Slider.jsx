import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const images = ["slider1.jpg", "slider2.jpg", "slider3.jpg", "slider4.jpg"];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className="bg-amber-600 w-full max-h-screen relative"
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {images.map((img) => (
        <SwiperSlide key={img} className="relative">
          <img
            src={`/slider/${img}`}
            alt="photo"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <motion.h2
              className="text-3xl font-bold mb-10"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Society of Nepalese Architect
            </motion.h2>
            <motion.button
              className="rounded-2xl cursor-pointer border-2 border-dashed border-baseRed bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
