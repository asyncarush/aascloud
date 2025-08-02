"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaBrain, FaChartLine, FaClock, FaGraduationCap, FaHeart, FaLinkedin, FaInstagram, FaRocket } from 'react-icons/fa';

const benefits = [
  { icon: <FaCloud className="text-blue-400 text-3xl" />, label: 'Real-world cloud & DevOps projects' },
  { icon: <FaBrain className="text-purple-400 text-3xl" />, label: 'Learn from experts (GCP, AWS, Azure)' },
  { icon: <FaChartLine className="text-pink-400 text-3xl" />, label: 'Fast-growth startup culture' },
  { icon: <FaClock className="text-green-400 text-3xl" />, label: 'Flexible, remote-friendly environment' },
  { icon: <FaGraduationCap className="text-yellow-400 text-3xl" />, label: 'Internships & certification-based training' },
  { icon: <FaHeart className="text-red-400 text-3xl" />, label: 'Supportive, collaborative team' },
];

const jobs = [
  {
    title: 'Cloud Computing Product Marketing (Training + Internship)',
    type: 'Training Program',
    location: 'Remote',
    link: 'https://forms.gle/8JHqFRXTpziBHMtm6',
  },
  {
    title: 'DevOps Internship',
    type: 'Internship',
    location: 'Remote',
    link: 'https://forms.gle/8JHqFRXTpziBHMtm6',
  },
  {
    title: 'Java Training & Internship',
    type: 'Training + Internship',
    location: 'Remote',
    link: 'https://forms.gle/8JHqFRXTpziBHMtm6',
  },
  {
    title: 'DevOps & BigCommerce Engineer (2–3 Years Experience)',
    type: 'Full-Time',
    location: 'Remote',
    link: 'https://forms.gle/iqbG5Sfu5TWp1tsx8',
  },
];

export default function CareersPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  // Floating particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="min-h-screen w-full gradient-bg text-white font-sans relative overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-40"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [-20, -100, -20], opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>
      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{ left: mouse.x - 12, top: mouse.y - 12 }}
        animate={{ opacity: 0.6, scale: 1.5 }}
      />
      {/* Hero Section */}
      <motion.section
        className="relative z-10 text-center py-20"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05, textShadow: '0 0 24px #a78bfa' }}
        >
          Build the Future with Us <FaRocket className="inline-block ml-2 text-pink-400 animate-bounce" />
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join our mission to create cutting-edge cloud, DevOps, and AI solutions. We’re looking for innovators, creators, and thinkers.
        </motion.p>
      </motion.section>
      {/* Why Join Section */}
      <motion.section
        className="relative z-10 max-w-5xl mx-auto py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Why Join AASCloud?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 flex flex-col items-center text-center shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.7, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.07, boxShadow: '0 6px 32px #a78bfa66' }}
            >
              <div>{b.icon}</div>
              <div className="mt-3 font-semibold text-md text-white">{b.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Openings */}
      <motion.section
        className="relative z-10 max-w-5xl mx-auto py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 shadow-xl border border-white/10 flex flex-col gap-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.7, type: 'spring', stiffness: 100 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #3b82f6aa' }}
            >
              <div className="flex items-center mb-2">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-3 animate-pulse"></span>
                <span className="font-bold text-lg text-white">{job.title}</span>
              </div>
              <div className="flex gap-4 text-sm text-gray-300 mb-2">
                <span className="bg-blue-500/20 px-3 py-1 rounded-lg">{job.type}</span>
                <span className="bg-purple-500/20 px-3 py-1 rounded-lg">{job.location}</span>
              </div>
              <motion.a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-pink-400/40"
                whileHover={{ scale: 1.08, boxShadow: '0 0 24px #ec4899' }}
                whileTap={{ scale: 0.97 }}
              >
                Apply Now
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Internship Banner */}
      <motion.section
        className="relative z-10 max-w-4xl mx-auto my-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="glass-card p-8 flex flex-col items-center text-center border border-white/10 shadow-2xl relative overflow-hidden"
          whileHover={{ scale: 1.02, boxShadow: '0 8px 32px #f59e42aa' }}
        >
          <motion.div
            className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-blue-400/30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Our Internship Program</h3>
          <p className="text-md text-gray-200 mb-2">Our Internship Program empowers students and early professionals to build strong foundations in real-world tech — Cloud, DevOps, AI, and more.</p>
          <p className="text-md text-pink-300 font-semibold">📩 Contact: <a href="mailto:hr@aascloud.info" className="underline hover:text-pink-400">hr@aascloud.info</a></p>
        </motion.div>
      </motion.section>
      {/* Final CTA */}
      <motion.footer
        className="relative z-10 w-full py-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="text-lg text-gray-200 mb-2">Didn’t find a role that suits you?</div>
        <div className="text-xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">Reach out to us at</div>
        <div className="text-lg text-pink-200">
          📧 <a href="mailto:hr@aascloud.info" className="underline hover:text-pink-400">hr@aascloud.info</a>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://www.linkedin.com/company/107565947" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white text-3xl transition-colors"><FaLinkedin /></a>
          <a href="https://www.instagram.com/aascloud.info/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white text-3xl transition-colors"><FaInstagram /></a>
        </div>
        <div className="text-xs text-gray-400 mt-8"> 2025 AAS Cloud. All rights reserved.</div>
      </motion.footer>
      {/* Advanced Animated Footer */}
      <motion.footer
        className="relative z-10 w-full py-16 bg-gradient-to-br from-[#2e026d]/80 to-[#15162c]/80 backdrop-blur-xl rounded-t-3xl mt-24 shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
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
        {/* Social & Bottom Bar */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between items-center border-t border-white/10 mt-12 pt-8 px-4 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="https://www.linkedin.com/company/107565947" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white text-3xl transition-colors"><FaLinkedin /></a>
            <a href="https://www.instagram.com/aascloud.info/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white text-3xl transition-colors"><FaInstagram /></a>
          </div>
          <motion.p
            className="text-gray-400 text-sm"
            whileHover={{ color: "#60a5fa" }}
          >
            © 2025 AAS Cloud. All rights reserved. | Built with ❤️ in India
          </motion.p>
        </motion.div>
      </motion.footer>
    </div>
  );
}