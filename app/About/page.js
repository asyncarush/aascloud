"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FaCloud, 
  FaRobot, 
  FaCode, 
  FaCogs, 
  FaMobile, 
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaRocket,
  FaEye,
  FaHandshake,
  FaQuoteLeft,
  FaCertificate,
  FaAws,
  FaDocker,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaGlobe,
  FaMicrosoft
} from "react-icons/fa";
import { SiKubernetes, SiNeo4J } from "react-icons/si";
import Footer from "@/components/Footer";

// --- TimelineTree and TimelineTreeNode ---
const timelineTree = [
  {
    year: "2025",
    event: "AASCloud.info Founded",
    description: "Started with a vision to revolutionize cloud-native solutions",
    icon: <FaRocket />,
    children: [
      {
        year: "2025 Q2",
        event: "First AI Integration",
        description: "Launched our first AI-powered automation platform",
        icon: <FaRobot />,
        children: [
          {
            year: "2025 Q3",
            event: "Cloud Expansion",
            description: "Expanded services to multi-cloud deployments",
            icon: <FaCloud />,
            children: [
              {
                year: "2025 Q4",
                event: "Enterprise Partnerships",
                description: "Established key partnerships with major cloud providers",
                icon: <FaHandshake />,
                children: [
                  {
                    year: "2026",
                    event: "Global Reach",
                    description: "Planning international expansion and advanced AI services",
                    icon: <FaGlobe />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function TimelineTreeNode({ node, depth = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: depth * 0.15 }}
      viewport={{ once: true }}
      className="flex flex-col items-center relative"
    >
      {/* Connector from parent */}
      {depth > 0 && (
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-full mb-2"></div>
      )}
      {/* Node badge */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 via-fuchsia-500 to-yellow-400 shadow-[0_4px_32px_4px_rgba(0,255,255,0.25)] border-4 border-white/90 text-white text-3xl font-extrabold drop-shadow-[0_2px_12px_rgba(0,255,255,0.4)] mb-2">
          {node.icon}
        </div>
        <span className="text-xs font-bold text-fuchsia-700 bg-white/80 px-4 py-1 rounded-full shadow-[0_2px_12px_rgba(245,0,255,0.13)] border border-fuchsia-200 backdrop-blur-md mb-1">
          {node.year} - {node.event}
        </span>
        <div className="bg-white/95 rounded-2xl shadow-lg px-6 py-3 mt-1 border border-cyan-100 max-w-xs text-center backdrop-blur-md">
          <p className="text-gray-700 text-sm font-medium drop-shadow-sm">{node.description}</p>
        </div>
      </div>
      {/* Children nodes */}
      {node.children && node.children.length > 0 && (
        <div className="flex flex-row gap-10 mt-8">
          {node.children.map((child, i) => (
            <TimelineTreeNode node={child} depth={depth + 1} key={i} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function AboutPage() {
  const services = [
    "Cloud Deployment & Infrastructure",
    "DevOps Pipelines & Automation", 
    "AI & Knowledge Graphs",
    "Web Development & Applications",
    "Process Automation & Integration"
  ];

  const timeline = [
    { year: "2025", event: "AASCloud.info Founded", description: "Started with a vision to revolutionize cloud-native solutions" },
    { year: "2025 Q2", event: "First AI Integration", description: "Launched our first AI-powered automation platform" },
    { year: "2025 Q3", event: "Cloud Expansion", description: "Expanded services to multi-cloud deployments" },
    { year: "2025 Q4", event: "Enterprise Partnerships", description: "Established key partnerships with major cloud providers" },
    { year: "2026", event: "Global Reach", description: "Planning international expansion and advanced AI services" }
  ];

  const coreValues = [
    { icon: FaLightbulb, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: FaShieldAlt, title: "Security", description: "Ensuring robust protection for all solutions" },
    { icon: FaUsers, title: "Collaboration", description: "Working together to achieve exceptional results" },
    { icon: FaHeart, title: "Empowerment", description: "Enabling businesses to reach their full potential" },
    { icon: FaRocket, title: "Excellence", description: "Delivering quality that exceeds expectations" },
    { icon: FaHandshake, title: "Transparency", description: "Building trust through open communication" }
  ];

  const techStack = [
    { name: "Microsoft Azure", icon: FaMicrosoft, color: "text-blue-500" },
    { 
      name: "AWS", 
      icon: FaAws, 
      color: "text-orange-500",
      className: "transform hover:scale-110 transition-transform"
    },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
    { name: "Docker", icon: FaDocker, color: "text-blue-400" },
    { name: "Neo4j", icon: SiNeo4J, color: "text-green-500" },
    { name: "AI/ML", icon: FaRobot, color: "text-purple-500" }
  ];

  const certifications = [
    "ISO 27001 Security Management",
    "Microsoft Azure Certified", 
    "Kubernetes Administrator (CKA)",
    "DevOps Professional Certification",
    "AWS Solutions Architect"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
  {/* Background: Animated Lines */}
  <div className="absolute inset-0 z-0">
    <svg width="100%" height="100%" className="absolute inset-0 w-full h-full" style={{ minHeight: '100vh' }}>
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00c6fb" />
          <stop offset="100%" stopColor="#6a82fb" />
        </linearGradient>
      </defs>
      <polyline points="0,200 400,50 800,400 1200,100 1600,350" fill="none" stroke="url(#glow)" strokeWidth="2" filter="url(#glowFilter)" opacity="0.7">
        <animate attributeName="points" dur="8s" repeatCount="indefinite"
          values="0,200 400,50 800,400 1200,100 1600,350; 0,250 400,100 800,350 1200,150 1600,300; 0,200 400,50 800,400 1200,100 1600,350" />
      </polyline>
      <circle cx="400" cy="50" r="6" fill="#00c6fb">
        <animate attributeName="cy" values="50;100;50" dur="8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="1200" cy="100" r="6" fill="#6a82fb">
        <animate attributeName="cy" values="100;150;100" dur="8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="800" cy="400" r="6" fill="#fff">
        <animate attributeName="cy" values="400;350;400" dur="8s" repeatCount="indefinite"/>
      </circle>
    </svg>
  </div>

  {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center justify-center">
      <div className="mb-4">
        <span className="inline-block px-4 py-1 rounded-full border border-blue-400 text-blue-300 text-xs font-semibold bg-white/5 backdrop-blur-sm">With Certified Professionals</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
        <span className="block text-white">AI Powered</span>
        <span className="block">
          Digital <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">TRANSFORMATION</span>
        </span>
      </h1>
      <p className="text-base md:text-lg text-gray-300 mb-8">AI-Driven Innovation Across Blockchain, Cloud DevOps & eCommerce Platforms</p>
      <a href="mailto:contact@aascloud.info" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300">Get a quote</a>
    </div>
  </section>

      <section className="relative py-20 px-4 overflow-x-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
          {/* Timeline Tabs (Left) */}
          <div className="space-y-3 md:space-y-6">
            {timeline.map((item, idx) => (
              <motion.button
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`w-full text-left px-6 py-4 rounded-l-lg font-semibold text-lg transition-all duration-300 shadow-md border-l-4 ${idx === 0 ? 'bg-gradient-to-r from-orange-400 via-pink-400 to-violet-500 text-white border-pink-400' : 'bg-white text-gray-700 border-transparent hover:bg-pink-50 hover:text-pink-700'}`}
              >
                {item.event}
              </motion.button>
            ))}
          </div>

          {/* Tree Timeline (Center) */}
          <div className="flex flex-col items-center justify-center w-full py-8">
            <TimelineTreeNode node={timelineTree[0]} />
          </div>
        </div>
      </section>
      {/* Core Values */}
      <section className="relative py-20 px-4 overflow-hidden bg-gray-900">
        {/* Animated Aurora Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-400 to-transparent rounded-full filter blur-3xl animate-pulse-slow animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold mb-16 text-center text-white drop-shadow-lg">
              Our Core <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative p-8 text-center bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -10, rotate: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full filter blur-xl"></div>
                    <div className="relative z-10">
                      <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 shadow-lg">
                        <IconComponent className="text-4xl text-white" />
                      </div>
                      <h4 className="text-2xl font-bold mb-3 text-white">{value.title}</h4>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

    
      {/* Call to Action */}
      <section className="relative py-24 px-4 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10" style={{ perspective: '1000px' }}>
          <motion.div
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl font-extrabold mb-6 text-white drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Journey</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Ready to be part of the future? We're always looking for talented individuals passionate about cloud technology, AI, and innovation.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="/Careers" 
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(99, 102, 241, 0.5)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaUsers className="mr-3" />
                View Career Opportunities
              </motion.a>
              <motion.a 
                href="/Contact" 
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 rounded-xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(217, 70, 239, 0.5)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaEnvelope className="mr-3" />
                Apply for Internships
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver exceptional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className={`flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${tech.className || ''}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 ${tech.color} bg-opacity-10`}>
                    <Icon className="text-3xl" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-center">{tech.name}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standard Footer */}
      <Footer />
    </div>
  );
}

export default AboutPage;
