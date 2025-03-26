import React from "react";
import { Link } from "react-router-dom";

const PageTemplate = ({
  title,
  imageUrl,
  breadcrumb = [],
  fullPageImage = false,
}) => {
  return (
    <div className="relative w-full text-white">
      {/* Background Image */}
      <img
        className={`w-full object-cover object-top 
          ${
            fullPageImage
              ? "h-[80vh] md:h-[70vh] sm:h-[60vh]"
              : "h-[400px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
          }`}
        src={imageUrl}
        alt="Page Background"
      />

      {/* Title & Breadcrumb with Blur Effect Behind */}
      <div className="absolute bottom-5 left-5 px-4 z-10 max-w-[90%]">
        <div className="backdrop-blur-md bg-white/10 p-2 rounded-lg inline-block">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {title || "Page Title"}
          </h1>
          {breadcrumb.length > 0 && (
            <div className="flex gap-2 mt-1 text-base sm:text-lg">
              {breadcrumb.map((item, index) => (
                <span key={index}>
                  {index !== 0 && " > "}
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
