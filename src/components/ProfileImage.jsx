import React, { useState } from 'react';

export default function ProfileImage({ className = '', alt = 'Bharathiraja M', borderAndShadow = true }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Clean, thin white border like a real LinkedIn avatar, with absolutely NO shadow!
  const baseStyles = borderAndShadow 
    ? "border-2 border-white shadow-none bg-slate-100" 
    : "border-none shadow-none bg-transparent";

  return (
    <div className={`relative overflow-hidden rounded-full aspect-square flex items-center justify-center ${baseStyles} ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center z-20">
          <div className="w-8 h-8 rounded-full border-3 border-blue-600 border-t-transparent animate-spin" />
        </div>
      )}

      {hasError ? (
        // Beautiful Recruiter-ready Fallback Silhouette Avatar
        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col items-center justify-center text-white p-4">
          <svg
            className="w-1/2 h-1/2 text-white/95"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span className="text-base font-bold tracking-wider mt-2.5 font-mono">BM</span>
        </div>
      ) : (
        // Main Profile Image: Edge-to-Edge with object-top alignment (JUST LIKE LINKEDIN!)
        <img
          src="/assets/profile.jpg"
          alt={alt}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full rounded-full object-cover object-top transition-all duration-300 hover:scale-[1.01] ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
    </div>
  );
}
