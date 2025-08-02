"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import Footer from "@/components/Footer";

export default function FrontendDevelopmentPage() {
  const technologies = [
    { name: "React.js", icon: FaReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Vue.js", icon: FaVuejs, color: "text-green-400" },
    { name: "Angular", icon: FaAngular, color: "text-red-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" }
  ];

  const services = [
    {
      title: "Single Page Applications (SPA)",
      description: "Fast, responsive web applications with seamless user experience",
      features: ["React/Vue/Angular", "State Management", "Routing", "API Integration"]
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Web apps that work like native mobile applications",
      features: ["Offline Support", "Push Notifications", "App-like Experience", "Cross-platform"]
    },
    {
      title: "E-commerce Platforms",
      description: "Custom online stores with modern shopping experiences",
      features: ["Payment Integration", "Inventory Management", "User Authentication", "Mobile Responsive"]
    },
    {
      title: "Dashboard & Admin Panels",
      description: "Intuitive interfaces for data management and analytics",
      features: ["Data Visualization", "Real-time Updates", "User Management", "Custom Reports"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              Frontend Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Creating stunning, responsive, and user-friendly web interfaces that engage your audience and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technologies We Use</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We leverage the latest frontend technologies to build modern, scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <tech.icon className={`text-4xl ${tech.color} mx-auto mb-3`} />
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Frontend Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive frontend development solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-8 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-md rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your frontend development needs and create a solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
