import React from "react";
import Slider from "../components/Slider";
import RecentPosts from "../components/RecentPosts";
import Gallery from "../components/Gallery";
import OurTeam from "../components/OurTeam";
import TestimoSection from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider />
      <RecentPosts />
      <Gallery />
      <TestimoSection />
      <OurTeam />
    </div>
  );
};

export default Home;
