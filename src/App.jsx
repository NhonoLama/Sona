import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Posts from "./pages/Posts.jsx";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import TestimoSection from "./components/Testimonials.jsx";
import PhotoGallery from "./pages/PhotoGallery.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const App = () => {
  const location = useLocation();
  const hideFor = ["/register", "*"].includes(location.pathname);
  return (
    <div className="font-Poppins">
      {!hideFor && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/photo_gallery" element={<PhotoGallery />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/testimonals" element={<TestimoSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideFor && <Footer />}
    </div>
  );
};

export default App;
