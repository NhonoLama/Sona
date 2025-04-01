import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import recentPosts from "../Post/RPLists";

const RecentPostsSlider = () => {
  return (
    <div className="p-6 my-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl font-bold flex justify-center text-baseRed  mb-4"
      >
        Recent Posts
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
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
          {recentPosts.map((post) => (
            <SwiperSlide key={post.id} className="">
              <Link to={`/posts/${post.id}`} state={{ post }}>
                <motion.div
                  className="relative m-6 p-2 rounded-lg shadow-lg hover:scale-105 hover:translate-y-[-10px] transition-transform duration-300 ease-in-out"
                  whileHover={{ scale: 1 }}
                  whileTap={{ scale: 0.7 }}
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full rounded-lg"
                  />
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-xl font-semibold p-2 mb-3"
                  >
                    {post.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="px-2"
                  >
                    {post.subTitle}
                  </motion.p>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default RecentPostsSlider;
