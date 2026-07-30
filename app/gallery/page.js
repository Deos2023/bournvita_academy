"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlay, FaImage, FaVideo, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hero from "../../public/assests/img5.jpeg";

// 1. Catalog of Local Media Assets (Videos & Images)
const localVideos = [
  {
    id: "vid-1",
    type: "video",
    title: "Academy Practice & Batting Drills",
    src: "/assests/WhatsApp Video 2025-05-07 at 1.45.41 PM.mp4",
    poster: "/assests/img1.jpeg"
  },
  {
    id: "vid-2",
    type: "video",
    title: "Net Practice & Technique Session",
    src: "/assests/WhatsApp Video 2026-07-30 at 12.24.41 PM.mp4",
    poster: "/assests/img2.jpg"
  },
  {
    id: "vid-3",
    type: "video",
    title: "Bowling Machine Training",
    src: "/assests/WhatsApp Video 2026-07-30 at 12.24.42 PM.mp4",
    poster: "/assests/img3.jpeg"
  },
  {
    id: "vid-4",
    type: "video",
    title: "Youth Player Development Session",
    src: "/assests/WhatsApp Video 2026-07-30 at 12.24.43 PM (1).mp4",
    poster: "/assests/img4.jpeg"
  },
  {
    id: "vid-5",
    type: "video",
    title: "Fielding & Agility Drills",
    src: "/assests/WhatsApp Video 2026-07-30 at 12.24.43 PM.mp4",
    poster: "/assests/img5.jpeg"
  },
  {
    id: "vid-6",
    type: "video",
    title: "Academy Match Practice Highlights",
    src: "/assests/WhatsApp Video 2026-07-30 at 12.24.44 PM.mp4",
    poster: "/assests/img6.jpeg"
  }
];

const localImagesWebp = Array.from({ length: 21 }, (_, i) => ({
  id: `img-webp-${i + 1}`,
  type: "image",
  title: `Academy Moment ${i + 1}`,
  src: `/img1/1 (${i + 1}).webp`
}));

const localImagesAssets = [
  { id: "img-ast-1", type: "image", title: "Training Ground Action", src: "/assests/img1.jpeg" },
  { id: "img-ast-2", type: "image", title: "Practice Pitch Session", src: "/assests/img2.jpg" },
  { id: "img-ast-3", type: "image", title: "Coaching Mentorship", src: "/assests/img3.jpeg" },
  { id: "img-ast-4", type: "image", title: "Academy Group Squad", src: "/assests/grp.jpg" },
  { id: "img-ast-5", type: "image", title: "Team Huddle", src: "/assests/img4.jpeg" },
  { id: "img-ast-6", type: "image", title: "Net Practice", src: "/assests/img5.jpeg" },
  { id: "img-ast-7", type: "image", title: "Batting Technique", src: "/assests/img6.jpeg" },
  { id: "img-ast-8", type: "image", title: "Bowling Action", src: "/assests/img7.jpeg" },
  { id: "img-ast-9", type: "image", title: "Fielding Drills", src: "/assests/img8.jpeg" },
  { id: "img-ast-10", type: "image", title: "Match Simulation", src: "/assests/img9.jpeg" },
  { id: "img-ast-11", type: "image", title: "Academy Practice Ground", src: "/assests/img10.jpeg" },
  { id: "img-ast-12", type: "image", title: "Coaching Session", src: "/assests/img11.jpeg" },
  { id: "img-ast-13", type: "image", title: "Fitness & Conditioning", src: "/assests/img12.jpeg" },
  { id: "img-ast-14", type: "image", title: "Junior Squad Practice", src: "/assests/img13.jpeg" },
  { id: "img-ast-15", type: "image", title: "Academy Facilities", src: "/assests/img14.jpeg" },
  { id: "img-ast-16", type: "image", title: "Match Day Highlights", src: "/assests/img15.jpeg" },
  { id: "img-ast-17", type: "image", title: "Turf Pitch Practice", src: "/assests/img16.jpeg" },
  { id: "img-ast-18", type: "image", title: "Player Assessment", src: "/assests/img17.jpeg" },
  { id: "img-ast-19", type: "image", title: "Mentorship Session", src: "/assests/img18.jpeg" },
  { id: "img-ast-20", type: "image", title: "Academy Mentors", src: "/assests/profile1.jpg" },
  { id: "img-ast-21", type: "image", title: "Head Coach Arun Lal", src: "/assests/profile2.jpg" },
  { id: "img-ast-22", type: "image", title: "Academy Main Pitch", src: "/assests/hero.jpeg" }
];

const allMedia = [...localVideos, ...localImagesAssets, ...localImagesWebp];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all"); // 'all' | 'images' | 'videos'
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredMedia = allMedia.filter((item) => {
    if (filter === "images") return item.type === "image";
    if (filter === "videos") return item.type === "video";
    return true;
  });

  const selectedItem = selectedIndex !== null ? filteredMedia[selectedIndex] : null;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === 0 ? filteredMedia.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === filteredMedia.length - 1 ? 0 : prev + 1));
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev(e);
      if (e.key === "ArrowRight") handleNext(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredMedia]);

  const imageCount = allMedia.filter((item) => item.type === "image").length;
  const videoCount = allMedia.filter((item) => item.type === "video").length;

  return (
    <div className="relative bg-[#1e1e1e] font-sans text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[45vh] min-h-[350px] w-full">
        <Image
          src={hero}
          alt="Bournvita Cricket Academy Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-black/60 to-black/70 flex flex-col items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-wide mb-3">
              ACADEMY <span className="text-[#f3ff00]">GALLERY</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
              Explore practice sessions, matches, video analysis, and moments from Bournvita Cricket Academy.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md ${
              filter === "all"
                ? "bg-[#f3ff00] text-black scale-105 shadow-[#f3ff00]/20"
                : "bg-[#2d2d2d] text-gray-300 hover:bg-[#3d3d3d] hover:text-white"
            }`}
          >
            <span>All</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                filter === "all" ? "bg-black text-[#f3ff00]" : "bg-[#444] text-gray-200"
              }`}
            >
              {allMedia.length}
            </span>
          </button>

          <button
            onClick={() => setFilter("images")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md ${
              filter === "images"
                ? "bg-[#f3ff00] text-black scale-105 shadow-[#f3ff00]/20"
                : "bg-[#2d2d2d] text-gray-300 hover:bg-[#3d3d3d] hover:text-white"
            }`}
          >
            <FaImage className="text-base" />
            <span>Images</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                filter === "images" ? "bg-black text-[#f3ff00]" : "bg-[#444] text-gray-200"
              }`}
            >
              {imageCount}
            </span>
          </button>

          <button
            onClick={() => setFilter("videos")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md ${
              filter === "videos"
                ? "bg-[#f3ff00] text-black scale-105 shadow-[#f3ff00]/20"
                : "bg-[#2d2d2d] text-gray-300 hover:bg-[#3d3d3d] hover:text-white"
            }`}
          >
            <FaVideo className="text-base" />
            <span>Videos</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                filter === "videos" ? "bg-black text-[#f3ff00]" : "bg-[#444] text-gray-200"
              }`}
            >
              {videoCount}
            </span>
          </button>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="group relative bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg border border-gray-800 cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#f3ff00]/40 h-72 sm:h-80"
            >
              {item.type === "video" ? (
                <>
                  {/* Video Poster Image (Lightweight thumbnail - zero network stream blocking) */}
                  <Image
                    src={item.poster || "/assests/img1.jpeg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index > 4 ? "lazy" : "eager"}
                  />
                  {/* Video Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#f3ff00] text-black flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <FaPlay className="ml-1 text-xl" />
                    </div>
                  </div>
                  {/* Video Badge */}
                  <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <FaVideo /> VIDEO
                  </div>
                </>
              ) : (
                <>
                  {/* Image Item with Responsive Sizes & Lazy Loading */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading={index > 5 ? "lazy" : "eager"}
                    onError={(e) => {
                      console.error(`Failed to load image: ${item.src}`);
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-semibold truncate">{item.title}</p>
                  </div>
                  {/* Image Badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[#f3ff00] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-[#f3ff00]/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaImage /> IMAGE
                  </div>
                </>
              )}

              {/* Title Bar at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <p className="text-white text-sm font-medium truncate">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredMedia.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No media items found in this category.</p>
          </div>
        )}
      </section>

      {/* Lightbox / Video Player Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-5 text-white hover:text-[#f3ff00] bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Navigation Controls */}
          {filteredMedia.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#f3ff00] bg-black/50 hover:bg-black/80 p-3.5 rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Previous Media"
              >
                <FaChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#f3ff00] bg-black/50 hover:bg-black/80 p-3.5 rounded-full transition-colors z-50 cursor-pointer"
                aria-label="Next Media"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </>
          )}

          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <div className="w-full max-h-[75vh] bg-black rounded-lg overflow-hidden flex items-center justify-center">
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[75vh] w-auto h-auto rounded-lg shadow-2xl"
                />
              </div>
            ) : (
              <div className="relative w-full h-[75vh]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                />
              </div>
            )}

            {/* Media Title & Counter */}
            <div className="mt-4 flex items-center justify-between w-full max-w-4xl px-2 text-gray-300 text-sm">
              <span className="font-semibold text-white text-base truncate">{selectedItem.title}</span>
              <span className="bg-[#2a2a2a] px-3 py-1 rounded-full text-xs font-mono text-[#f3ff00] border border-gray-700">
                {selectedIndex + 1} / {filteredMedia.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

