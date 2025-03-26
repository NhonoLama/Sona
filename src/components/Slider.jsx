import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

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
        delay: 100,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((img) => (
        <SwiperSlide key={img}>
          <img
            src={`/slider/${img}`}
            alt="photo"
            className="w-full h-full object-contain brightness-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:bottom-50 text-center text-white p-4">
            <h2 className="text-3xl font-bold mb-4 ">
              Society of Nepalese Architect
            </h2>
            <button className="rounded-2xl cursor-pointer border-2 border-dashed border-baseRed bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Join Us
            </button>
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default Slider;
