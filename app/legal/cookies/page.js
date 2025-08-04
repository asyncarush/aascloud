"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCookie, FaCogs, FaChartBar } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <FaCookie className="text-6xl text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-300">
              How we use cookies on our website
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience and improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-gray-300">Required for the website to function properly and cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                  <p className="text-gray-300">Remember your preferences and provide enhanced features.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300">
                You can control and manage cookies through your browser settings. However, disabling certain 
                cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                For questions about our cookie policy, contact us at:
              </p>
              <p className="text-yellow-400 mt-2">cookies@aascloud.info</p>
            </section>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
