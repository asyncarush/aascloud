"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const serviceContent = {
  "Frontend Development": {
    desc: "Modern, accessible, and beautiful UI/UX design. Wireframes, prototypes, and user research for delightful experiences.",
    features: ["React.js, Next.js, Vue, Angular", "Responsive Design", "Performance Optimization", "Accessibility & A11y", "UI/UX Design"]
  },
  "Backend Services": {
    desc: "Robust, scalable, and secure backend solutions. REST APIs, microservices, and real-time data handling.",
    features: ["Node.js, Python, Java Spring", "API Development", "Database Management", "Authentication & Security", "Cloud Functions"]
  },
  "AI Integration": {
    desc: "Integrate AI/ML into your business. Custom models, automation, and analytics for smarter workflows.",
    features: ["Machine Learning", "NLP & Computer Vision", "OpenAI & LLMs", "Predictive Analytics", "Automation"]
  },
  "Cloud Consulting": {
    desc: "Cloud strategy, migration, and optimization. Azure, AWS, Kubernetes, and more for your digital transformation.",
    features: ["Cloud Migration", "DevOps Automation", "Kubernetes & Docker", "Cost Optimization", "Security & Compliance"]
  }
};

export default function ServiceModal({ open, onClose, service }) {
  if (!open || !service) return null;
  const { desc, features } = serviceContent[service] || {};
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/30"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-gray-200 hover:text-white text-2xl font-bold focus:outline-none"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-md">{service}</h2>
          <p className="text-gray-200 mb-4 text-base">{desc}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-100">
            {features && features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
