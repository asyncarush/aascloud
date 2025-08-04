import React from "react";
import { motion } from "framer-motion";

export default function SuccessStory() {
  return (
    <section className="relative py-16 md:py-20 px-4 md:px-0 bg-gradient-to-br from-[#18182A] via-[#232347] to-[#18182A] overflow-hidden">
      {/* Gradient overlay for extra glass effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#ffffff0d] via-[#00bcd477] to-[#b388ff22] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left: Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Stat Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #00bcd4bb" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col items-start glass-card cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-white/20"
          >
            <span className="flex items-center text-sm font-semibold text-blue-400 mb-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Months Since Launch
            </span>
            <span className="text-5xl font-extrabold text-white mb-2">13<span className="text-blue-400 text-3xl align-super">mo</span></span>
            <span className="text-xs text-gray-300">Founded June 2024, rapidly scaling with a vision for innovation.</span>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #00bcd4bb" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col items-start glass-card cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-white/20"
          >
            <span className="flex items-center text-sm font-semibold text-blue-400 mb-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Clients Onboarded
            </span>
            <span className="text-5xl font-extrabold text-white mb-2">25<span className="text-blue-400 text-3xl align-super">+</span></span>
            <span className="text-xs text-gray-300">Welcomed over 25 clients in our first year, with new partnerships every month.</span>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #00bcd4bb" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col items-start glass-card cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-white/20"
          >
            <span className="flex items-center text-sm font-semibold text-blue-400 mb-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Product Launches
            </span>
            <span className="text-5xl font-extrabold text-white mb-2">4<span className="text-blue-400 text-3xl align-super">+</span></span>
            <span className="text-xs text-gray-300">Launched 4 innovative digital products, with more in the pipeline.</span>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #00bcd4bb" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 flex flex-col items-start glass-card cursor-pointer transition-all duration-300 hover:border-blue-400 hover:bg-white/20"
          >
            <span className="flex items-center text-sm font-semibold text-blue-400 mb-2">
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Team Growth
            </span>
            <span className="text-5xl font-extrabold text-white mb-2">12<span className="text-blue-400 text-3xl align-super">+</span></span>
            <span className="text-xs text-gray-300">Expanded from 2 founders to 12+ talented professionals in just over a year.</span>
          </motion.div>
        </div>
        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="bg-cyan-400/70 backdrop-blur-xl border border-cyan-200/40 rounded-3xl shadow-2xl flex items-center justify-center w-full h-full p-8 min-h-[350px] glass-illustration"
          >
            <svg width="240" height="300" viewBox="0 0 240 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="180" width="200" height="100" rx="16" fill="#17E2F7" fillOpacity="0.9"/>
              <path d="M120 180L120 70" stroke="#232347" strokeWidth="6" strokeLinecap="round"/>
              <ellipse cx="120" cy="60" rx="36" ry="36" fill="#FFF9C4"/>
              <rect x="100" y="110" width="40" height="70" rx="10" fill="#232347"/>
              <path d="M120 110L120 80" stroke="#232347" strokeWidth="4" strokeLinecap="round"/>
              <path d="M120 110L110 130" stroke="#232347" strokeWidth="4" strokeLinecap="round"/>
              <path d="M120 110L130 130" stroke="#232347" strokeWidth="4" strokeLinecap="round"/>
              <rect x="80" y="210" width="80" height="20" rx="8" fill="#00BCD4" fillOpacity="0.7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center text-4xl font-extrabold mt-10 mb-2 bg-gradient-to-r from-[#B388FF] via-[#00BCD4] to-[#fff9c4] bg-clip-text text-transparent animate-gradient-move"
      >
        Our Startup Growth Journey 🚀
      </motion.h2>
    </section>
  );
}

