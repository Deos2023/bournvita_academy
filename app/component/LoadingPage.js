"use client";

import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="relative flex flex-col items-center">
        {/* Spinning ring animation */}
        <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 mb-6 border-4 border-white rounded-full animate-spin-slow">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="1 4 1 10 7 10"/>
            <polyline points="23 20 23 14 17 14"/>
            <polyline points="1 4 23 20"/>
          </svg>
        </div>
        {/* Animated title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight animate-wave">
          Arun Lal
        </h1>
        {/* Optional subtitle */}
        <p className="mt-2 text-white text-opacity-80 text-sm sm:text-base md:text-lg animate-fade-in">
          Loading amazing content...
        </p>
      </div>
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
