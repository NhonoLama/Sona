import React, { useState, useEffect } from "react";
import PageTemplate from "../components/PGTemplate";
import PhotoGalleryCard from "../components/PGCard";
import bgimg from "/gallery/gallery.jpeg";
import { TbDownload } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";

const photoGalleryData = [
  {
    title: "Annual SONA Function 2081",
    galleryImages: [],
  },
  {
    title: "SONA Fair 2081",
    galleryImages: [
      "/assets/gallery2-1.jpg",
      "/assets/gallery2-2.jpg",
      "/assets/gallery2-3.jpg",
    ],
  },
  {
    title: "Sports Day 2081",
    galleryImages: ["/assets/gallery3-1.jpg", "/assets/gallery3-2.jpg"],
  },
  {
    title: "SONA Competition 2081",
    galleryImages: [
      "/assets/gallery4-1.jpg",
      "/assets/gallery4-2.jpg",
      "/assets/gallery4-3.jpg",
    ],
  },
  {
    title: "Cultural Dance Program 2081",
    galleryImages: [
      "/assets/gallery5-1.jpg",
      "/assets/gallery5-2.jpg",
      "/assets/gallery5-3.jpg",
    ],
  },
];

const PhotoGallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (fullscreenImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [fullscreenImage]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (fullscreenImage) {
        if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "ArrowLeft") {
          handlePrev();
        } else if (event.key === "Escape") {
          setFullscreenImage(null);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fullscreenImage, selectedGallery, currentIndex]);

  const handleNext = () => {
    if (selectedGallery) {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % selectedGallery.galleryImages.length
      );
      setFullscreenImage(
        selectedGallery.galleryImages[
          (currentIndex + 1) % selectedGallery.galleryImages.length
        ]
      );
    }
  };

  const handlePrev = () => {
    if (selectedGallery) {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedGallery.galleryImages.length) %
          selectedGallery.galleryImages.length
      );
      setFullscreenImage(
        selectedGallery.galleryImages[
          (currentIndex - 1 + selectedGallery.galleryImages.length) %
            selectedGallery.galleryImages.length
        ]
      );
    }
  };

  return (
    <div>
      <PageTemplate
        title="Photo Gallery"
        imageUrl={bgimg}
        breadcrumb={[{ label: "Home", path: "/" }, { label: "Photo Gallery" }]}
      />

      <div className="flex-grow p-5 mt-10 mb-20">
        <h1 className="text-2xl font-bold text-center">Photo Gallery</h1>
        <p className="text-center">Explore our collection of photos.</p>

        {/* Fullscreen Image Viewer with Slider and Download Option */}
        {fullscreenImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
            <button
              className="absolute left-5 text-white text-3xl cursor-pointer"
              onClick={handlePrev}
            >
              &#10094;
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute right-5 text-white text-3xl cursor-pointer"
              onClick={handleNext}
            >
              &#10095;
            </button>

            {/* Close button (ImCross) */}
            <button
              className="absolute top-6 right-10 text-white text-2xl cursor-pointer"
              onClick={() => setFullscreenImage(null)}
            >
              <IoMdCloseCircle className="w-6 h-6" />
            </button>

            {/* Download button (IoMdDownload) */}
            <a
              href={fullscreenImage}
              download
              className="absolute top-5 right-24 text-white text-2xl"
            >
              <TbDownload className="w-7 h-7" />
            </a>
          </div>
        )}

        {/* If a gallery is selected, show its images in 300x300 size */}
        {selectedGallery ? (
          <div className="max-w-6xl mx-auto px-4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-5 place-items-center">
              {selectedGallery.galleryImages.map((img, index) => (
                <div className="flex justify-center" key={index}>
                  <img
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-[300px] h-[300px] object-cover rounded-lg shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                    onClick={() => {
                      setFullscreenImage(img);
                      setCurrentIndex(index);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Main galleries album (Updated for mobile centering)
          <div className="max-w-5xl mx-auto px-4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-5 place-items-center">
              {photoGalleryData.map((photo, index) => (
                <PhotoGalleryCard
                  key={index}
                  title={photo.title}
                  imageUrl={photo.galleryImages[0]} // Use first image as thumbnail
                  onClick={() => setSelectedGallery(photo)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
