"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
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
            <FaShieldAlt className="text-6xl text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Privacy Policy
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
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                At AASCloud, we collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Name, email address, and contact information</li>
                <li>Professional information and company details</li>
                <li>Project requirements and technical specifications</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about projects and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices and security alerts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption 
                and security protocols to safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-blue-400 mt-2">privacy@aascloud.info</p>
            </section>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
