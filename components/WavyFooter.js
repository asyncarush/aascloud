import React from "react";

// SVG-based animated wavy footer background
export default function WavyFooter({ children }) {
  return (
    <div className="relative bg-gradient-to-t from-gray-900 via-blue-900 to-indigo-900 pt-12 pb-4 px-4">
      {/* Animated SVG Wave */}
      <div className="absolute left-0 right-0 -top-1 w-full overflow-hidden leading-none z-0" style={{ height: '80px' }}>
        <svg className="w-full h-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerWaveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#6366f1" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
            <animateTransform attributeName="transform" type="translate" from="0,0" to="40,0" dur="4s" repeatCount="indefinite"/>
          </defs>
          <path fill="url(#footerWaveGradient)">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
              values="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z;
                      M0,30 C360,60 1080,20 1440,30 L1440,80 L0,80 Z;
                      M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </path>
        </svg>
      </div>
      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6 text-gray-200">
        {children}
      </div>
    </div>
  );
}
