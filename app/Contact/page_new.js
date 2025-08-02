'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaLinkedin, FaInstagram, FaRocket, FaStar } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';
import './contact.css';

const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 600px)').matches;

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen w-full gradient-bg text-white font-sans relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovered ? 2 : 1,
          opacity: isHovered ? 0.8 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <motion.div 
        className="container mx-auto px-4 py-16 sm:py-24 relative z-10"
        variants={containerVariants}
        initial={isMobile ? false : "hidden"}
        animate={isMobile ? false : "visible"}
      >
        
        {/* Enhanced Intro Message */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="inline-block"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            We're here to help you build the future. Reach out to us for project inquiries, support, or just to say hello.
          </motion.p>
          
          {/* Animated Stars */}
          <motion.div className="flex justify-center space-x-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.3, 
                  rotate: 180,
                  color: "#fbbf24"
                }}
              >
                <FaStar className="text-yellow-400" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Enhanced Contact Form */}
          <motion.div 
            className="glass-card p-8 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-20"
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Send Us a Message 📨
              </motion.h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info & Other Sections */}
          <div className="space-y-8">
            {/* Enhanced Contact Info Card */}
            <motion.div 
              className="glass-card p-8 relative"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.15)"
              }}
            >
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contact Information 📇</h3>
              <ul className="space-y-4 text-gray-200">
                <motion.li 
                  className="flex items-center group"
                  whileHover={{ x: 10, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaEnvelope className="mr-3 text-indigo-300 group-hover:text-blue-400 transition-colors" /> 
                  <a href="mailto:as@aascloud.info" className="hover:text-white transition-colors">as@aascloud.info</a>
                </motion.li>
                <motion.li 
                  className="flex items-center group"
                  whileHover={{ x: 10, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPhone className="mr-3 text-indigo-300 group-hover:text-green-400 transition-colors" /> 
                  <a href="tel:+91 7905838674" className="hover:text-white transition-colors">+91 7905838674</a>
                </motion.li>
                <motion.li 
                  className="flex items-center group"
                  whileHover={{ x: 10, color: "#60a5fa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaMapMarkerAlt className="mr-3 text-indigo-300 group-hover:text-red-400 transition-colors" />India
                </motion.li>
              </ul>
            </motion.div>

            {/* Enhanced Support Hours */}
            <motion.div 
              className="glass-card p-8 relative"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(34, 197, 94, 0.15)"
              }}
            >
              <motion.div
                className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Support Hours 🕒</h3>
              <motion.p 
                className="text-gray-200"
                whileHover={{ color: "#10b981" }}
              >
                Monday - Friday: 10:00 AM - 6:00 PM (PST)
              </motion.p>
              <p className="text-gray-300 text-sm mt-2">We typically respond within 24 hours.</p>
            </motion.div>

            {/* Enhanced Social Media */}
            <motion.div 
              className="glass-card p-8 text-center relative"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(236, 72, 153, 0.15)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl z-0"
                style={{ pointerEvents: 'none' }}
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 40% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Follow Us 🚀</h3>
              <div className="flex justify-center space-x-8 z-10 relative">
                <a
  href="https://www.linkedin.com/company/107565947"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-blue-400 transition-colors"
>
  <motion.span
    whileHover={{ scale: 1.3, rotate: 10, color: "#3b82f6" }}
    whileTap={{ scale: 0.9 }}
    style={{ display: "inline-block" }}
  >
    <FaLinkedin size={32} />
  </motion.span>
</a>
                <a
  href="https://www.instagram.com/aascloud.info/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-pink-400 transition-colors"
>
  <motion.span
    whileHover={{ scale: 1.3, rotate: -10, color: "#ec4899" }}
    whileTap={{ scale: 0.9 }}
    style={{ display: "inline-block" }}
  >
    <FaInstagram size={32} />
  </motion.span>
</a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Remote-First Company */}
        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Remote-First Company 🌍
          </motion.h2>
          <motion.div 
            className="glass-card p-8 text-center relative overflow-hidden"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
            }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                background: [
                  "radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 0%, #8b5cf6 0%, transparent 50%)",
                  "radial-gradient(circle at 100% 100%, #ec4899 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 100%, #06b6d4 0%, transparent 50%)",
                  "radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-4xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🇮🇳
                </motion.div>
                <h3 className="text-xl font-semibold text-white">Based in India</h3>
                <p className="text-gray-300">Headquartered in Uttar Pradesh, India, bringing local expertise with global standards.</p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-4xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌐
                </motion.div>
                <h3 className="text-xl font-semibold text-white">Global Reach</h3>
                <p className="text-gray-300">Serving clients worldwide with 24/7 support across different time zones.</p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="text-4xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💼
                </motion.div>
                <h3 className="text-xl font-semibold text-white">Remote Excellence</h3>
                <p className="text-gray-300">Fully remote operations ensuring flexibility, efficiency, and cost-effective solutions.</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Remote-First?</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                {[
                  "Lower operational costs = Better pricing for you",
                  "Access to top talent globally",
                  "Faster project delivery",
                  "24/7 availability across time zones"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, color: "#10b981" }}
                  >
                    <motion.span 
                      className="text-green-400 mr-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      ✓
                    </motion.span>
                    {benefit}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>
      
      {/* Enhanced Footer */}
      <motion.footer 
        className="bg-gray-900/50 backdrop-blur-lg border-t border-white/10 mt-20 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)",
              "linear-gradient(90deg, rgba(236, 72, 153, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%)",
              "linear-gradient(90deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">SERVICES</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Frontend Development", "Backend Services", "AI Integration", "Cloud Consulting"].map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5, color: "#60a5fa" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">{service}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">TECHNOLOGIES</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["React.js", "Node.js", "Java Spring Boot", "AWS/GCP"].map((tech, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5, color: "#8b5cf6" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">{tech}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">COMPANY</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <motion.li whileHover={{ x: 5, color: "#ec4899" }}>
                  <a href="/About" className="hover:text-white transition-colors">About</a>
                </motion.li>
                <motion.li whileHover={{ x: 5, color: "#ec4899" }}>
                  <a href="#" className="hover:text-white transition-colors">Careers</a>
                </motion.li>
                <motion.li whileHover={{ x: 5, color: "#ec4899" }}>
                  <a href="#" className="hover:text-white transition-colors">Case Studies</a>
                </motion.li>
                <motion.li whileHover={{ x: 5, color: "#ec4899" }}>
                  <a href="/Contact" className="hover:text-white transition-colors">Contact</a>
                </motion.li>
              </ul>
            </motion.div>
            
            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">LEGAL</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Privacy", "Terms", "Security", "Cookies"].map((legal, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5, color: "#10b981" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="hover:text-white transition-colors">{legal}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-white/10 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#60a5fa" }}
            >
              © 2025 AAS Cloud. All rights reserved. | Built with ❤️ in India
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ContactPage;
