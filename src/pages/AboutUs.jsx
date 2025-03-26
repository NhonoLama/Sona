import PageTemplate from "../components/PGTemplate";
import missionImg from "/gallery/gallery.jpeg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <PageTemplate
        title="About Us"
        imageUrl={missionImg}
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Introduction" }]}
      />
      <div className="flex-grow p-5 mt-10 mb-20">
        <div className="h-auto min-h-0 flex flex-col items-start bg-gray-100 p-6 text-left">
          <p className="text-gray-700 mb-4 max-w-3xl">
            Welcome to our organization. We are committed to delivering
            excellence and fostering innovation. Our team works tirelessly to
            ensure that we meet the expectations of our stakeholders while
            upholding our core values of integrity and dedication.
          </p>
          <p className="text-gray-700 mb-6 max-w-3xl">
            As we move forward, we aim to build a future that is inclusive,
            sustainable, and growth-oriented. We invite you to join us on this
            journey and be a part of our success story.
          </p>

          <div className="flex justify-start space-x-6 mt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-600 text-4xl transition-transform duration-300 hover:rotate-y-360 before:absolute before:inset-0 before:bg-blue-600 before:rounded-full before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 hover:before:opacity-30"
            >
              <FaFacebook />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-400 text-4xl transition-transform duration-300 hover:rotate-y-360 before:absolute before:inset-0 before:bg-blue-400 before:rounded-full before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 hover:before:opacity-30"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-blue-700 text-4xl transition-transform duration-300 hover:rotate-y-360 before:absolute before:inset-0 before:bg-blue-700 before:rounded-full before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 hover:before:opacity-30"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-pink-500 text-4xl transition-transform duration-300 hover:rotate-y-360 before:absolute before:inset-0 before:bg-pink-500 before:rounded-full before:scale-0 before:transition-transform before:duration-300 hover:before:scale-100 hover:before:opacity-30"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
