"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaRobot, FaChartLine, FaEye, FaComments, FaCogs } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiOpenai, SiPython } from "react-icons/si";
import Footer from "@/components/Footer";

export default function AIIntegrationPage() {
  const technologies = [
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
    { name: "PyTorch", icon: SiPytorch, color: "text-red-400" },
    { name: "OpenAI", icon: SiOpenai, color: "text-green-400" },
    { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "Machine Learning", icon: FaBrain, color: "text-purple-400" },
    { name: "Computer Vision", icon: FaEye, color: "text-blue-400" },
    { name: "NLP", icon: FaComments, color: "text-pink-400" },
    { name: "Automation", icon: FaCogs, color: "text-gray-400" }
  ];

  const services = [
    {
      title: "Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI for customer support and engagement",
      features: ["Natural Language Processing", "Multi-language Support", "Context Awareness", "Integration APIs"]
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights for informed business decisions",
      features: ["Machine Learning Models", "Real-time Predictions", "Data Visualization", "Custom Dashboards"]
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis for automated processes",
      features: ["Object Detection", "Facial Recognition", "Quality Control", "Medical Imaging"]
    },
    {
      title: "Process Automation",
      description: "AI-powered automation for operational efficiency",
      features: ["Workflow Optimization", "Document Processing", "Decision Trees", "RPA Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
              AI Integration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions that automate processes, enhance decision-making, and drive innovation.
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
            <h2 className="text-3xl font-bold text-white mb-4">AI Technologies & Frameworks</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced AI tools and frameworks for intelligent solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <h2 className="text-3xl font-bold text-white mb-4">AI Integration Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
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
            className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-md rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Embrace AI?</h2>
            <p className="text-gray-300 mb-8">
              Let's explore how AI can revolutionize your business processes and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start AI Journey
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                AI Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
