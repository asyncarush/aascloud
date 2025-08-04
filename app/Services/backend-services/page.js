"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaJava, FaPython, FaDatabase, FaCloud, FaShieldAlt } from "react-icons/fa";
import { SiSpringboot, SiExpress, SiMongodb, SiPostgresql, SiRedis, SiDocker } from "react-icons/si";
import Footer from "@/components/Footer";

export default function BackendServicesPage() {
  const technologies = [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "Java Spring", icon: SiSpringboot, color: "text-green-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Redis", icon: SiRedis, color: "text-red-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" }
  ];

  const services = [
    {
      title: "RESTful API Development",
      description: "Scalable and secure APIs for seamless data exchange",
      features: ["REST Architecture", "Authentication & Authorization", "Rate Limiting", "API Documentation"]
    },
    {
      title: "Database Design & Optimization",
      description: "Efficient database solutions for optimal performance",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup Strategies"]
    },
    {
      title: "Microservices Architecture",
      description: "Modular backend systems for enterprise scalability",
      features: ["Service Decomposition", "Inter-service Communication", "Load Balancing", "Fault Tolerance"]
    },
    {
      title: "Cloud Integration",
      description: "Cloud-native backend solutions for modern applications",
      features: ["AWS/Azure/GCP", "Serverless Functions", "Container Orchestration", "Auto-scaling"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-6">
              Backend Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Robust, scalable, and secure backend solutions that power your applications and drive business success.
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
            <h2 className="text-3xl font-bold text-white mb-4">Backend Technologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge backend technologies for reliable and performant systems
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
            <h2 className="text-3xl font-bold text-white mb-4">Our Backend Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive backend development solutions for modern applications
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
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
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
            className="bg-gradient-to-r from-blue-500/20 to-cyan-600/20 backdrop-blur-md rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Need Robust Backend Solutions?</h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s build a powerful backend infrastructure that scales with your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
