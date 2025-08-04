import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const TransformBusinessSection = () => {
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

        .animate-fade-in {
          animation: fade-in 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        .text-transparent {
          color: transparent;
        }
      `}</style>

      {/* React Component */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Animated Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          {/* Floating Shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200/25 rounded-full blur-xl animate-float-slow"></div>
          
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Main Heading with Text Animation */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </span>
          </h2>
          
          {/* Subtitle with Stagger Animation */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed">
            Book a free demo or consultation with our experts and discover how we can 
            <span className="font-semibold text-indigo-600"> revolutionize </span>
            your workflow.
          </p>

          {/* Enhanced CTA Button */}
          <div className="relative inline-block group">
            {/* Button Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            
            {/* Main Button */}
            <a 
              href="https://calendly.com/abhinesh1455/30min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl text-indigo-700 font-bold text-lg hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon with Animation */}
              <FaCalendarAlt className="text-blue-500 text-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              
              {/* Button Text */}
              <span className="relative">
                Schedule a Free Demo
                {/* Subtle underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              
              {/* Arrow Icon */}
              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Free consultation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>30-minute session</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>No commitment required</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransformBusinessSection;
