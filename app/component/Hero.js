"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Slide data
const SLIDES = [
  {
    image: '/images/ca-hero.jpg',
    title: 'Dreaming of CA?',
    subtitle: 'New Batch For CA Foundation & Final Starting Soon',
    cta: 'Join Us',
  },
  {
    image: '/images/ca-hero2.jpg', // Make sure this image exists in your public folder
    title: 'Achieve Your Goals',
    subtitle: 'Expert Guidance for Every Step',
    cta: 'Get Started',
  },
  {
    image: '/images/ca-hero3.jpg', // Make sure this image exists in your public folder
    title: 'Success Awaits',
    subtitle: 'Enroll Today for Exclusive Benefits',
    cta: 'Enroll Now',
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }, AUTO_SLIDE_INTERVAL);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, paused]);

  const goTo = (idx) => {
    setCurrent(idx);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Animation variants
  const imageVariants = {
    enter: { opacity: 0, scale: 0.96, x: 60 },
    center: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.96, x: -60, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  const textVariants = {
    enter: { opacity: 0, y: 40 },
    center: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  return (
    <section
      className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-700 overflow-hidden flex items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative glassmorphism background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0891b2"
            fillOpacity="0.18"
            d="M0,160 C480,320 960,0 1440,160 L1440,600 L0,600 Z"
          />
        </svg>
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-10 md:py-16">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center text-left space-y-6 md:space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-4"
            >
              <h1 className="text-white drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-yellow-400 via-white to-teal-200 bg-clip-text ">
                {SLIDES[current].title}
              </h1>
              <p className="text-yellow-300 text-lg sm:text-xl md:text-2xl font-semibold drop-shadow">
                {SLIDES[current].subtitle}
              </p>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 px-8 py-3 bg-white/30 backdrop-blur-md hover:bg-yellow-400/80 text-black font-semibold rounded-2xl text-lg shadow-xl transition border border-yellow-200"
              >
                {SLIDES[current].cta}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left Arrow Button - moved further to the side */}
        <button
          aria-label="Previous"
          onClick={prevSlide}
          className="absolute left-0 md:left-[-40px] top-1/2 transform -translate-y-1/2 z-20 bg-white/80 shadow-2xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-yellow-100/80 transition border-2 border-yellow-300"
          style={{ left: '-24px' }} // For extra space on all screens
        >
          <span className="text-3xl font-bold text-teal-600">&#8592;</span>
        </button>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden flex items-center justify-center border-8 border-white shadow-2xl"
            style={{
              borderTop: '8px solid #facc15', // yellow-400
              borderRight: '8px solid #facc15',
              borderBottom: '8px solid #14b8a6', // teal-500
              borderLeft: '8px solid #14b8a6',
              background: 'linear-gradient(135deg, #facc15 0%, #14b8a6 100%)',
              boxShadow: '0 8px 32px 0 rgba(20,184,166,0.25), 0 1.5px 8px 0 rgba(250,204,21,0.12)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={SLIDES[current].image}
                src={SLIDES[current].image}
                alt={SLIDES[current].title}
                className="object-cover w-full h-full"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 60 }}
                draggable={false}
              />
            </AnimatePresence>
            {/* Decorative arcs */}
            <div className="absolute inset-0 rounded-full pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="190"
                  stroke="#facc15"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  stroke="#14b8a6"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          {/* Dots for navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full border-2 border-yellow-300 transition ${current === idx ? 'bg-yellow-400 scale-125' : 'bg-white/60'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow Button - moved further to the side */}
        <button
          aria-label="Next"
          onClick={nextSlide}
          className="absolute right-0 md:right-[-40px] top-1/2 transform -translate-y-1/2 z-20 bg-white/80 shadow-2xl rounded-full w-12 h-12 flex items-center justify-center hover:bg-yellow-100/80 transition border-2 border-yellow-300"
          style={{ right: '-24px' }} // For extra space on all screens
        >
          <span className="text-3xl font-bold text-teal-600">&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;