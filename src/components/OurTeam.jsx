import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

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
      <div className="font-bold text-baseRed text-3xl mb-6">Our Team</div>
      <div className="flex flex-wrap justify-center gap-6">
        {profiles.slice(0, visibleCount).map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            post={profile.position}
            img={profile.image}
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="my-8">
        {visibleCount < profiles.length && (
          <button
            onClick={() => setVisibleCount(profiles.length)}
            className="border-2 border-baseBlue text-baseRed px-6 py-2 rounded-full hover:bg-baseRed hover:scale-110 cursor-pointer hover:text-white transition"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default OurTeam;
