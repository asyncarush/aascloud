"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaUsers, FaClock } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "E-commerce Platform Modernization",
      client: "TechVision Solutions",
      challenge: "Legacy system migration to modern cloud infrastructure",
      solution: "React.js frontend with Node.js backend on AWS",
      results: ["50% faster load times", "99.9% uptime", "300% increase in conversions"],
      technologies: ["React", "Node.js", "AWS", "MongoDB"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      client: "DataFlow Corp",
      challenge: "Real-time data processing and visualization",
      solution: "Machine learning models with interactive dashboards",
      results: ["Real-time insights", "40% better predictions", "Automated reporting"],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
      title: "Microservices Architecture Implementation",
      client: "Enterprise Solutions Inc",
      challenge: "Monolithic application scalability issues",
      solution: "Containerized microservices with Kubernetes",
      results: ["10x better scalability", "Reduced deployment time", "Improved reliability"],
      technologies: ["Java Spring", "Docker", "Kubernetes", "Azure"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-world success stories showcasing how we've helped businesses transform through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-purple-400 mb-4">Client: {study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <FaChartLine className="text-green-400 mr-3" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-indigo-500/20 to-purple-600/20 backdrop-blur-md rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
