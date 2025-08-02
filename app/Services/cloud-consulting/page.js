"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";
// import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiKubernetes, SiDocker, SiTerraform } from "react-icons/si";
import Footer from "@/components/Footer";

export default function CloudConsultingPage() {
  const technologies = [
    { name: "AWS", icon: SiAmazonaws, color: "text-orange-400" },
    { name: "Azure", icon: SiMicrosoftazure, color: "text-blue-400" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "text-green-400" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    { name: "Terraform", icon: SiTerraform, color: "text-purple-400" },
    { name: "Security", icon: FaShieldAlt, color: "text-red-400" },
    { name: "Monitoring", icon: FaChartLine, color: "text-yellow-400" },
  ];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamless transition of your applications to the cloud",
      features: [
        "Assessment & Planning",
        "Data Migration",
        "Application Modernization",
        "Zero-downtime Migration",
      ],
    },
    {
      title: "Infrastructure as Code",
      description: "Automated, scalable, and reproducible cloud infrastructure",
      features: [
        "Terraform Templates",
        "CI/CD Pipelines",
        "Environment Management",
        "Cost Optimization",
      ],
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development and deployment processes",
      features: [
        "Container Orchestration",
        "Monitoring & Logging",
        "Auto-scaling",
        "Security Integration",
      ],
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud environments",
      features: [
        "Identity Management",
        "Data Encryption",
        "Compliance Audits",
        "Threat Detection",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-teal-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Cloud Consulting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Expert cloud consulting services to accelerate your digital
              transformation and optimize your cloud infrastructure.
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Cloud Platforms & Tools
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Leading cloud technologies for enterprise-grade solutions
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Cloud Consulting Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              End-to-end cloud solutions for modern businesses
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
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
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
            className="bg-gradient-to-r from-green-500/20 to-teal-600/20 backdrop-blur-md rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Cloud Transformation?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's design and implement a cloud strategy that drives your
              business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Cloud Journey
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
