"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import { SiExpress, SiMongodb, SiSocketdotio, SiNpm } from "react-icons/si";
import Footer from "@/components/Footer";

export default function NodeJSPage() {
  const features = [
    {
      icon: FaServer,
      title: "Server-Side JavaScript",
      description: "Build scalable server-side applications with JavaScript runtime"
    },
    {
      icon: FaCloud,
      title: "Event-Driven Architecture",
      description: "Non-blocking I/O operations for high-performance applications"
    },
    {
      icon: FaDatabase,
      title: "Rich Ecosystem",
      description: "Vast NPM package library for rapid development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaNodeJs className="text-8xl text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Node.js Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build fast, scalable server-side applications with Node.js - the JavaScript runtime that powers modern backend development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Node.js Advantages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center"
              >
                <feature.icon className="text-4xl text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
