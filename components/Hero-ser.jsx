import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <>
      {/* CSS Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
        }

        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        .text-transparent {
          color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Secondary gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 via-purple-800/30 to-slate-900/50"></div>
          
          {/* Floating Shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-purple-500/25 rounded-full blur-lg animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/15 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl animate-float"></div>
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.4) 1px, transparent 0)',
              backgroundSize: '50px 50px'
            }}
          ></div>

          {/* Animated Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-shimmer"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-shimmer"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Main Heading with Enhanced Gradient */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Empowering Innovation,
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Delivering Results
            </span>
          </h1>
          
          {/* Subtitle with Better Contrast */}
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
            We help <span className="font-semibold text-blue-300">startups</span>, 
            <span className="font-semibold text-purple-300"> enterprises</span>, and 
            <span className="font-semibold text-indigo-300"> AI teams</span> build, launch, and scale 
            digital products with speed and confidence.
          </p>

          {/* Enhanced CTA Button */}
          <div className="relative inline-block group">
            {/* Button Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            
            {/* Main Button */}
            <a 
              href="mailto:contact@yourcompany.com" 
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white font-bold text-lg hover:bg-white/20 hover:scale-105 hover:shadow-purple-500/25 transition-all duration-300 group"
            >
              {/* Icon with Animation */}
              <FaEnvelope className="text-blue-300 text-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              
              {/* Button Text */}
              <span className="relative">
                Get Started
                {/* Subtle underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </span>
              
              {/* Arrow Icon */}
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Optional: Add some feature highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Lightning Fast Development</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              <span>Scalable Architecture</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
