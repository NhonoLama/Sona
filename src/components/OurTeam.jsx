import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";

const OurTeam = () => {
  const [profiles, setProfiles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = {
        profiles: [
          {
            id: 1,
            name: "Iswor Lal Joshi",
            position: "President",
            image: "/gallery/bugamti.jpg",
          },
          {
            id: 2,
            name: "Yek Raj Adhikari",
            position: "Vice President",
            image: "/gallery/bugamti.jpg",
          },
          {
            id: 3,
            name: "Bhubaneswari Prajuli",
            position: "Vice President",
            image: "/gallery/bugamti.jpg",
          },
          {
            id: 4,
            name: "Dilli Ram Sapkota",
            position: "Vice President",
            image: "/gallery/bugamti.jpg",
          },
          {
            id: 5,
            name: "Arjun Basnet",
            position: "General Secretary",
            image: "/gallery/bugamti.jpg",
          },
          {
            id: 6,
            name: "Abhishek Mananda Bajracharya",
            position: "Deputy General Secretary",
            image: "/gallery/bugamti.jpg",
          },
          {
            id: 7,
            name: "Lokendra Acharya",
            position: "Treasurer",
            image: "/gallery/bugamti.jpg",
          },
        ],
      };
      setProfiles(data.profiles);
    };

    fetchProfiles();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="font-bold text-baseRed text-3xl mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Team
      </motion.div>
      <div className="flex flex-wrap justify-center gap-10">
        {profiles.slice(0, visibleCount).map((profile, index) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: index * 0.3 }}
            delay={1.2}
          >
            <ProfileCard
              name={profile.name}
              post={profile.position}
              img={profile.image}
            />
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.div
        className="my-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {visibleCount < profiles.length && (
          <button
            onClick={() => setVisibleCount(profiles.length)}
            className=" border-2 border-baseBlue text-baseRed px-6 py-2 rounded-full hover:bg-baseRed hover:scale-105 cursor-pointer hover:text-white transition"
          >
            Show More ➜
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default OurTeam;
