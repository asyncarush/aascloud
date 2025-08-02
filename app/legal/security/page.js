"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield, FaKey } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function SecurityPage() {
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
            <FaShieldAlt className="text-6xl text-red-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Security Policy
            </h1>
            <p className="text-lg text-gray-300">
              Your security is our priority
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-8 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your data including encryption, 
                secure transmission protocols, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Infrastructure Security</h2>
              <p className="text-gray-300 mb-4">Our security measures include:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>End-to-end encryption for data transmission</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Multi-factor authentication for all accounts</li>
                <li>Secure cloud infrastructure with 24/7 monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Incident Response</h2>
              <p className="text-gray-300">
                We have established procedures for detecting, responding to, and recovering from security incidents. 
                Our team is trained to handle security breaches promptly and effectively.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Report Security Issues</h2>
              <p className="text-gray-300">
                If you discover a security vulnerability, please report it to:
              </p>
              <p className="text-red-400 mt-2">security@aascloud.info</p>
            </section>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
