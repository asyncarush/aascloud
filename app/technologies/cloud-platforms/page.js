"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaServer, FaShieldAlt } from "react-icons/fa";
import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud } from "react-icons/si";
import Footer from "@/components/Footer";

export default function CloudPlatformsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCloud className="text-8xl text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Cloud Platforms
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              AWS, Azure, and Google Cloud Platform solutions for scalable, reliable cloud infrastructure.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
