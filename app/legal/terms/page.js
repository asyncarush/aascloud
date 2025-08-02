"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFileContract, FaGavel, FaHandshake } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
            <FaFileContract className="text-6xl text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using AASCloud services, you accept and agree to be bound by the terms and 
                provision of this agreement. These terms apply to all visitors, users, and others who access 
                or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
              <p className="text-gray-300 mb-4">
                AASCloud provides cloud-native development, AI integration, and DevOps consulting services including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Frontend and backend development</li>
                <li>Cloud infrastructure consulting</li>
                <li>AI and machine learning integration</li>
                <li>DevOps and automation solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
              <p className="text-gray-300 mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms of Service, contact us at:
              </p>
              <p className="text-green-400 mt-2">legal@aascloud.info</p>
            </section>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
