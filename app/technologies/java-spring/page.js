"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaShieldAlt, FaCogs, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiSpring } from "react-icons/si";
import Footer from "@/components/Footer";

export default function JavaSpringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-900 to-red-900">
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaJava className="text-8xl text-orange-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Java Spring Boot
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade Java applications with Spring Boot framework for robust, scalable backend solutions.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
