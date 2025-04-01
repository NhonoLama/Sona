import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./RPSideBar";

const Posts = () => {
  const { id } = useParams();
  const location = useLocation();
  const post = location.state?.post;

  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!post) {
    return (
      <motion.div
        className="p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p>This post doesn't exist or was accessed incorrectly.</p>
      </motion.div>
    );
  }

  return (
    <div className="m-15 flex justify-between gap-8 items-start">
      {/* Main Post Content */}
      <motion.div
        key={id}
        className="max-w-200"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold py-2">{post.title}</h1>
        <span className="text-gray-500">{post.date}</span>
        <motion.img
          src={post.img}
          alt={post.title}
          className="w-250 rounded-lg my-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.p
          className="mt-4 text-lg text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {post.content}
        </motion.p>
      </motion.div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Posts;
