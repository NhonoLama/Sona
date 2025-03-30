import React from "react";
import Slider from "../components/Slider";
import RecentPosts from "../components/Post/RecentPosts";
import Gallery from "../components/Gallery";
import OurTeam from "../components/OurTeam";
import TestimoSection from "../components/Testimonials";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      <Slider />
      <Welcome />
      <RecentPosts />
      <Gallery />
      <TestimoSection />
      <OurTeam />
    </div>
  );
};

export default Home;
