import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const fetchSlides = async () => {
  return {
    slides: [
      {
        id: 1,
        image: "/gallery/bugamti.jpg",
        text: "Bungamati Project",
      },
      {
        id: 2,
        image: "/gallery/annual.jpg",
        text: "26th Annual General Meeting",
      },
      {
        id: 3,
        image: "/gallery/conference.jpg",
        text: "National Architecture Conference 2019",
      },
      {
        id: 4,
        image: "/gallery/convention.jpg",
        text: "SONA International Convention",
      },
      {
        id: 5,
        image: "https://example.com/img5.jpg",
        text: "27th Annual General Meeting 2022",
      },

      { id: 6, image: "https://example.com/img7.jpg", text: "Lab" },
    ],
  };
};

const Gallery = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const getSlides = async () => {
      const data = await fetchSlides();
      setSlides(data.slides);
    };
    getSlides();
  }, []);

  return (
    <div className="w-full bg-white py-10">
      <h2 className="text-4xl font-bold text-center text-baseRed mb-6">
        SONA Gallery
      </h2>

      <div className="w-full max-w-7xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: true,
          }}
          className="w-full"
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="flex justify-center">
              <div className="relative w-full h-[60vh]">
                <img
                  src={slide.image}
                  alt={slide.text}
                  className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-500 hover:scale-110 hover:rotate-3"
                />
                <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 font-bold text-lg text-white drop-shadow-md">
                  {slide.text}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
