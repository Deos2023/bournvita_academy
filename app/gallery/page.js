"use client";

import Image from "next/image";
import { useState } from "react";
import hero from "../../public/assests/img5.jpeg"

// Use correct filenames and paths (adjust if needed)
const images = Array.from({ length: 20 }, (_, i) => `/img1/1 (${i + 1}).webp`);

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="relative  bg-[#1e1e1e] font-cor overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[80vh] max-h-[450px] w-full">
  {/* Background Image */}
  <Image
    src={hero}
    alt="Hero Background"
    fill
    className="object-cover"
    priority
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center text-white px-4">
  <div className="text-center max-w-4xl px-4">
              
              <p className="text-4xl sm:text-8xl font-bold mb-6 md:mb-8">
              Gallery
              </p>
            </div>
  </div>
</div>

      {/* Gallery Grid */}
      <section className="] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index}`}
                width={500}
                height={700}
                
                className="w-full h-96 object-cover shadow-md transition-transform hover:scale-105 duration-300"
                loading={index > 3 ? "lazy" : "eager"}
                onError={(e) => {
                  console.error(`Failed to load image: ${src}`);
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Enlarged"
                fill
                style={{ objectFit: "contain" }}
                className="shadow-lg"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
