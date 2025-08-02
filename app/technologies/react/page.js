"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCode, FaMobile, FaRocket } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiStyledcomponents, SiJest } from "react-icons/si";
import Footer from "@/components/Footer";

export default function ReactPage() {
  const features = [
    {
      icon: FaCode,
      title: "Component-Based Architecture",
      description: "Build encapsulated components that manage their own state for better maintainability"
    },
    {
      icon: FaRocket,
      title: "High Performance",
      description: "Virtual DOM and efficient diffing algorithm for optimal rendering performance"
    },
    {
      icon: FaMobile,
      title: "Cross-Platform",
      description: "Write once, run everywhere - web, mobile, and desktop applications"
    }
  ];

  const ecosystem = [
    { name: "Next.js", icon: SiNextdotjs, description: "Full-stack React framework" },
    { name: "Redux", icon: SiRedux, description: "Predictable state container" },
    { name: "Styled Components", icon: SiStyledcomponents, description: "CSS-in-JS styling" },
    { name: "Jest", icon: SiJest, description: "JavaScript testing framework" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaReact className="text-8xl text-blue-400 mx-auto mb-6 animate-spin-slow" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
              React.js Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build dynamic, interactive user interfaces with React.js - the most popular JavaScript library for modern web development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose React?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center"
              >
                <feature.icon className="text-4xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">React Ecosystem</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystem.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <tool.icon className="text-4xl text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
