import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RecentPostsSlider = () => {
  const recentPosts = [
    { title: "Post 1", content: "This is the first post." },
    { title: "Post 2", content: "This is the second post." },
    { title: "Post 3", content: "This is the third post." },
    { title: "Post 4", content: "This is the fourth post." },
    { title: "Post 5", content: "This is the fifth post." },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>

      <Swiper
        modules={[Pagination, Navigation]}
        className="h-100 "
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, type: "fraction" }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1300: { slidesPerView: 3 },
        }}
      >
        {recentPosts.map((post, index) => (
          <SwiperSlide key={index} className="">
            <div className="relative m-10 bg-amber-700 p-6 rounded-lg shadow-lg hover:scale-105 hover:translate-y-[-10px] transition-transform duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p>{post.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecentPostsSlider;
