"use client";

import SuccessStory from "../../components/SuccessStory";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FaRobot, FaMagic, FaBolt, FaPlug } from "react-icons/fa";
import { FaRocket, FaCloud, FaBrain, FaCogs, FaUserTie, FaChartLine, FaCheckCircle, FaEnvelope, FaCalendarAlt, FaHeartbeat, FaLightbulb } from "react-icons/fa";
import CTA from "../../components/CTA";
import HeroSection from "../../components/Hero-ser";
const categories = [
  {
    title: "For Startups",
    offerings: [
      { name: "MVP Launch Accelerator" },
      { name: "Cloud-Native App Development" },
      { name: "Rapid Prototyping" },
    ],
  },
  {
    title: "For Enterprises",
    offerings: [
      { name: "Legacy Modernization" },
      { name: "Enterprise AI Integration" },
      { name: "Scalable DevOps Automation" },
    ],
  },
  {
    title: "For AI-Driven Teams",
    offerings: [
      { name: "Custom LLM Solutions" },
      { name: "Data Engineering & MLOps" },
      { name: "AI Product Strategy" },
    ],
  },
];

const deepDive = [
  {
    name: "MVP Launch Accelerator",
    desc: "End-to-end MVP delivery in 8 weeks: ideation, design, build, and launch.",
    tools: ["Next.js", "AWS", "Vercel", "Tailwind"],
    features: ["Rapid prototyping", "User feedback loops", "CI/CD pipeline"],
    highlights: "Secure by design, optimized for scale and cost-efficiency.",
  },
  {
    name: "Enterprise AI Integration",
    desc: "Embed AI into business workflows. Custom models, automation, and analytics.",
    tools: ["Azure AI", "LangChain", "Docker", "Python"],
    features: ["Custom LLMs", "Data pipelines", "Role-based access"],
    highlights: "Enterprise-grade security, audit trails, and compliance.",
  },
  {
    name: "DevOps Automation Suite",
    desc: "Automate infrastructure, deployments, and monitoring for any scale.",
    tools: ["Terraform", "GitHub Actions", "Prometheus", "Kubernetes"],
    features: ["IaC", "Zero-downtime deploys", "Self-healing infra"],
    highlights: "Performance-tuned, high availability, and secure by default.",
  },
];

const tiers = [
  { name: "Basic", features: ["Email Support", "MVP Delivery", "Docs Access"] },
  { name: "Pro", features: ["Priority Support", "Custom Integrations", "Team Training"] },
  { name: "Enterprise", features: ["Dedicated Manager", "On-site Workshops", "Custom SLAs"] },
];

const tierFeatures = [
  "Email Support",
  "MVP Delivery",
  "Docs Access",
  "Priority Support",
  "Custom Integrations",
  "Team Training",
  "Dedicated Manager",
  "On-site Workshops",
  "Custom SLAs",
];

const caseStudies = [
  {
    client: "FintechX",
    problem: "Manual onboarding slowed user growth.",
    solution: "Automated KYC with AI workflow.",
    outcome: "+30% onboarding speed, 99% compliance.",
  },
  {
    client: "HealthAI",
    problem: "Unreliable legacy data pipelines.",
    solution: "Modernized with cloud-native ETL.",
    outcome: "Data latency cut by 80%, higher reliability.",
  },
  {
    client: "EduScale",
    problem: "Low student engagement in LMS.",
    solution: "AI-powered personalized learning paths.",
    outcome: "+40% engagement, improved outcomes.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section>
        <HeroSection/>
      </section>
  

      {/* Service Categories */}
      {/* Glassy Stat/Service Card Grid Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-0 bg-gradient-to-br from-[#18182A] via-[#232347] to-[#18182A] overflow-hidden">
        {/* Glass overlay for extra effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#ffffff0d] via-[#00bcd477] to-[#b388ff22] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Stat/Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 flex flex-col items-start hover:scale-105 transition group">
              <FaRocket className="text-blue-400 text-3xl mb-2 group-hover:scale-110 transition" />
              <span className="text-4xl font-extrabold text-white mb-1">MVP Launch</span>
              <span className="text-base text-gray-200">End-to-end MVP delivery in 8 weeks, from idea to launch.</span>
            </div>
            {/* Card 2 */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 flex flex-col items-start hover:scale-105 transition group">
              <FaCloud className="text-indigo-400 text-3xl mb-2 group-hover:scale-110 transition" />
              <span className="text-4xl font-extrabold text-white mb-1">Cloud Native</span>
              <span className="text-base text-gray-200">Modern scalable apps, cloud migration, and automation.</span>
            </div>
            {/* Card 3 */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 flex flex-col items-start hover:scale-105 transition group">
              <FaBrain className="text-purple-400 text-3xl mb-2 group-hover:scale-110 transition" />
              <span className="text-4xl font-extrabold text-white mb-1">AI Solutions</span>
              <span className="text-base text-gray-200">Custom LLMs, AI product strategy, and data pipelines.</span>
            </div>
            {/* Card 4 */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 p-8 flex flex-col items-start hover:scale-105 transition group">
              <FaCogs className="text-pink-400 text-3xl mb-2 group-hover:scale-110 transition" />
              <span className="text-4xl font-extrabold text-white mb-1">DevOps Automation</span>
              <span className="text-base text-gray-200">CI/CD, IaC, monitoring, and zero-downtime deploys.</span>
            </div>
          </div>
          {/* Right: Illustration */}
          <div className="flex justify-center items-center">
            {/* DevOps/Integration SVG illustration */}
            <motion.svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
              {/* Clouds pulse */}
              <motion.ellipse cx="60" cy="55" rx="30" ry="16" fill="#e0e7ff"
                animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
              <motion.ellipse cx="90" cy="48" rx="20" ry="13" fill="#c7d2fe"
                animate={{ scale: [1, 1.04, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }} />
              <motion.ellipse cx="120" cy="54" rx="22" ry="15" fill="#a5b4fc"
                animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.6 }} />
              {/* Gear rotates */}
              <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} origin="180 32">
                <circle cx="180" cy="32" r="18" fill="#6366f1" />
                <circle cx="180" cy="32" r="9" fill="#fff" />
                <rect x="176" y="14" width="8" height="10" rx="2" fill="#6366f1" />
                <rect x="176" y="40" width="8" height="10" rx="2" fill="#6366f1" />
                <rect x="162" y="28" width="10" height="8" rx="2" fill="#6366f1" transform="rotate(-45 162 28)" />
                <rect x="194" y="28" width="10" height="8" rx="2" fill="#6366f1" transform="rotate(45 194 28)" />
              </motion.g>
              {/* Server boxes slide in */}
              <motion.rect x="55" y="80" width="28" height="12" rx="3" fill="#818cf8"
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }} />
              <motion.rect x="95" y="80" width="28" height="12" rx="3" fill="#818cf8"
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }} />
              <motion.rect x="135" y="80" width="28" height="12" rx="3" fill="#818cf8"
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }} />
              {/* Arrows draw in */}
              <motion.path d="M83 68 Q100 75 117 68" stroke="#6366f1" strokeWidth="4" fill="none" markerEnd="url(#arrowhead2)"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
              <motion.path d="M123 68 Q140 75 157 68" stroke="#6366f1" strokeWidth="4" fill="none" markerEnd="url(#arrowhead2)"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />
              <defs>
                <marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                  <polygon points="0 0, 8 4, 0 8" fill="#6366f1" />
                </marker>
              </defs>
            </motion.svg>
          </div>
        </div>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mt-16 tracking-tight animate-pulse">
          Our Services, Reimagined 🚀
        </h2>
      </section>

      {/* Deep Dive Service Cards */}
      <section className="py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-900">Featured Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Fade up, blue shadow, rocket icon */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, type: "spring" }}
            className="relative bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-blue-300/60 p-8 flex flex-col gap-4 overflow-hidden group hover:border-blue-500 hover:shadow-blue-400/60 hover:scale-105 transition duration-300"
          >
            <div className="absolute -top-7 -left-7 bg-blue-400 rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-4 border-white/60 group-hover:animate-bounce">
              <FaRocket className="text-white text-2xl" />
            </div>
            <div className="text-xl font-extrabold text-blue-800 mb-2 mt-8 flex items-center gap-2">MVP Launch Accelerator</div>
            <div className="text-gray-700 mb-4">End-to-end MVP delivery in 8 weeks: ideation, design, build, and launch.</div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Next.js</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">AWS</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Vercel</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Tailwind</span>
            </div>
            <ul className="list-disc ml-5 text-gray-800 text-sm mb-2">
              <li>Rapid prototyping</li>
              <li>User feedback loops</li>
              <li>CI/CD pipeline</li>
            </ul>
            <div className="text-green-700 font-semibold text-xs mt-2">Secure by design, optimized for scale and cost-efficiency.</div>
          </motion.div>
          {/* Card 2: Scale in, purple border, brain icon */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.8, type: "spring", delay: 0.15 }}
            className="relative bg-gradient-to-br from-purple-100/60 via-white/30 to-blue-50/60 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-indigo-300/50 p-8 flex flex-col gap-4 overflow-hidden group hover:border-indigo-500 hover:shadow-indigo-400/50 hover:scale-105 transition duration-300"
          >
            <div className="absolute -top-7 -left-7 bg-indigo-400 rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-4 border-white/60 group-hover:animate-pulse">
              <FaBrain className="text-white text-2xl" />
            </div>
            <div className="text-xl font-extrabold text-indigo-800 mb-2 mt-8 flex items-center gap-2">Enterprise AI Integration</div>
            <div className="text-gray-700 mb-4">Embed AI into business workflows. Custom models, automation, and analytics.</div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Azure AI</span>
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">LangChain</span>
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Docker</span>
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs">Python</span>
            </div>
            <ul className="list-disc ml-5 text-gray-800 text-sm mb-2">
              <li>Custom LLMs</li>
              <li>Data pipelines</li>
              <li>Role-based access</li>
            </ul>
            <div className="text-green-700 font-semibold text-xs mt-2">Enterprise-grade security, audit trails, and compliance.</div>
          </motion.div>
          {/* Card 3: Rotate in, green glow, cogs icon */}
          <motion.div 
            initial={{ rotate: -8, opacity: 0, y: 30 }} 
            whileInView={{ rotate: 0, opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, type: "spring", delay: 0.25 }}
            className="relative bg-gradient-to-br from-green-100/60 via-white/30 to-blue-50/60 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-purple-300/50 p-8 flex flex-col gap-4 overflow-hidden group hover:border-purple-500 hover:shadow-purple-400/50 hover:scale-105 transition duration-300"
          >
            <div className="absolute -top-7 -left-7 bg-green-400 rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-4 border-white/60 group-hover:animate-wiggle">
              <FaCogs className="text-white text-2xl" />
            </div>
            <div className="text-xl font-extrabold text-purple-800 mb-2 mt-8 flex items-center gap-2">DevOps Automation Suite</div>
            <div className="text-gray-700 mb-4">Automate infrastructure, deployments, and monitoring for any scale.</div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Terraform</span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">GitHub Actions</span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Prometheus</span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">Kubernetes</span>
            </div>
            <ul className="list-disc ml-5 text-gray-800 text-sm mb-2">
              <li>IaC</li>
              <li>Zero-downtime deploys</li>
              <li>Self-healing infra</li>
            </ul>
            <div className="text-green-700 font-semibold text-xs mt-2">Performance-tuned, high availability, and secure by default.</div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Service Tier Table */}
      <section className="py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-900">Service Packages</h2>
        <div className="overflow-x-auto max-w-5xl mx-auto rounded-3xl shadow-2xl bg-white/30 backdrop-blur-2xl border-2 border-blue-200/60">
          <table className="min-w-full rounded-2xl overflow-hidden">
            <thead>
              <motion.tr 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-r from-blue-100 via-blue-50 to-indigo-100 text-blue-900 shadow-md"
              >
                <th className="px-6 py-3 font-bold text-left">Feature</th>
                <th className="px-6 py-3 font-bold">Basic</th>
                <th className="px-6 py-3 font-bold">Pro</th>
                <th className="px-6 py-3 font-bold">Enterprise</th>
              </motion.tr>
            </thead>
            <tbody>
              {tierFeatures.map((f, i) => (
                <motion.tr
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="border-b border-blue-100/60 bg-white/40 hover:bg-blue-50/70 transition"
                >
                  <td className="px-4 py-2 font-semibold text-gray-700">{f}</td>
                  {tiers.map((t, j) => (
                    <motion.td 
                      key={t.name}
                      whileHover={t.features.includes(f) ? { scale: 1.2, color: '#22c55e' } : {}}
                      className="bg-white/70 px-4 py-2 text-center rounded-lg transition"
                    >
                      {t.features.includes(f) ? 
                        <span className="text-green-500 font-bold transition-transform duration-200 hover:animate-pulse">✔</span> : 
                        <span className="text-gray-300">—</span>
                      }
                    </motion.td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mini Case Studies */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Mini Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Fade up, blue glow, bounce icon */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, type: "spring" }}
            className="relative bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-blue-300/60 p-8 flex flex-col gap-4 overflow-hidden group hover:border-blue-500 hover:shadow-blue-400/60 hover:scale-105 transition duration-300"
          >
            <div className="absolute -top-7 -left-7 bg-blue-400 rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-4 border-white/60 group-hover:animate-bounce">
              <FaChartLine className="text-white text-2xl" />
            </div>
            <div className="text-2xl font-extrabold text-blue-900 mt-8 mb-2 flex items-center gap-2">FintechX</div>
            <div className="bg-white/30 rounded-xl p-3 text-gray-800 text-sm font-semibold shadow-inner border border-white/30 mb-1">
              <span className="text-blue-600">Problem:</span> Manual onboarding slowed user growth.
            </div>
            <div className="bg-white/20 rounded-xl p-3 text-gray-700 text-sm border border-white/20">
              <span className="font-semibold text-blue-500">Solution:</span> Automated KYC with AI workflow.
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 font-bold text-xs mt-2 shadow border border-green-200">
              <FaCheckCircle className="text-green-500" /> Outcome: +30% onboarding speed, 99% compliance.
            </div>
          </motion.div>
          {/* Card 2: Scale in, purple pulse, pulse icon */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.8, type: "spring", delay: 0.15 }}
            className="relative bg-gradient-to-br from-purple-100/60 via-white/30 to-blue-50/60 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-purple-300/50 p-8 flex flex-col gap-4 overflow-hidden group hover:border-purple-500 hover:shadow-purple-400/50 hover:scale-105 transition duration-300"
          >
            <div className="absolute -top-7 -left-7 bg-purple-400 rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-4 border-white/60 group-hover:animate-pulse">
              <FaHeartbeat className="text-white text-2xl" />
            </div>
            <div className="text-2xl font-extrabold text-purple-900 mt-8 mb-2 flex items-center gap-2">HealthAI</div>
            <div className="bg-white/30 rounded-xl p-3 text-gray-800 text-sm font-semibold shadow-inner border border-white/30 mb-1">
              <span className="text-purple-600">Problem:</span> Unreliable legacy data pipelines.
            </div>
            <div className="bg-white/20 rounded-xl p-3 text-gray-700 text-sm border border-white/20">
              <span className="font-semibold text-purple-500">Solution:</span> Modernized with cloud-native ETL.
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 font-bold text-xs mt-2 shadow border border-green-200">
              <FaCheckCircle className="text-green-500" /> Outcome: Data latency cut by 80%, higher reliability.
            </div>
          </motion.div>
          {/* Card 3: Rotate in, green neon, wiggle icon */}
          <motion.div 
            initial={{ rotate: -8, opacity: 0, y: 30 }} 
            whileInView={{ rotate: 0, opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, type: "spring", delay: 0.25 }}
            className="relative bg-gradient-to-br from-green-100/60 via-white/30 to-blue-50/60 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-green-300/50 p-8 flex flex-col gap-4 overflow-hidden group hover:border-green-500 hover:shadow-green-400/50 hover:scale-105 transition duration-300"
          >
            <div className="absolute -top-7 -left-7 bg-green-400 rounded-full shadow-lg w-14 h-14 flex items-center justify-center border-4 border-white/60 group-hover:animate-wiggle">
              <FaLightbulb className="text-white text-2xl" />
            </div>
            <div className="text-2xl font-extrabold text-green-900 mt-8 mb-2 flex items-center gap-2">EduScale</div>
            <div className="bg-white/30 rounded-xl p-3 text-gray-800 text-sm font-semibold shadow-inner border border-white/30 mb-1">
              <span className="text-green-600">Problem:</span> Low student engagement in LMS.
            </div>
            <div className="bg-white/20 rounded-xl p-3 text-gray-700 text-sm border border-white/20">
              <span className="font-semibold text-green-500">Solution:</span> AI-powered personalized learning paths.
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 font-bold text-xs mt-2 shadow border border-green-200">
              <FaCheckCircle className="text-green-500" /> Outcome: +40% engagement, improved outcomes.
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI-Powered Automation Feature Section (Enhanced) */}
      <section className="relative py-16 max-w-4xl mx-auto text-center">
        {/* Animated floating magic badge */}
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring' }}
          className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
          <motion.span
            className="inline-flex items-center justify-center bg-gradient-to-tr from-purple-400 via-indigo-400 to-blue-400 rounded-full shadow-2xl w-16 h-16 border-4 border-white/40 backdrop-blur-xl"
            animate={{ boxShadow: [
              "0 0 16px 4px #c084fc66, 0 0 32px 8px #818cf866",
              "0 0 32px 8px #818cf866, 0 0 16px 4px #c084fc66"
            ] }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            <FaMagic className="text-white text-3xl drop-shadow-lg animate-pulse" />
          </motion.span>
        </motion.div>
        {/* Animated heading */}
        <motion.h2
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text mb-10 flex items-center justify-center gap-3"
        >
          <FaRobot className="text-purple-400 drop-shadow mr-2 animate-bounce" />
          AI-Powered Automation
        </motion.h2>
        {/* Glassy card with depth and hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', delay: 0.2 }}
          whileHover={{ scale: 1.025, boxShadow: "0 8px 60px 0 #a5b4fc77, 0 1.5px 12px 0 #818cf866" }}
          className="relative bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-purple-300/60 p-12 flex flex-col items-center gap-6 overflow-hidden group transition duration-300"
        >
          {/* Subtle radial bg effect */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{background: "radial-gradient(circle at 60% 30%, #c7d2fe33 0%, #fff0 80%)"}} />
          {/* Animated SVG: Magic wand floats and sparkles pulse */}
          <motion.svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2 z-10"
            animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            <rect x="41" y="18" width="8" height="44" rx="4" fill="#6366f1"/>
            <rect x="41" y="18" width="8" height="44" rx="4" fill="#a5b4fc" fillOpacity="0.5"/>
            <circle cx="45" cy="16" r="6" fill="#fff" stroke="#6366f1" strokeWidth="2"/>
            <motion.circle cx="67" cy="32" r="2.5" fill="#818cf8" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: 0.2 }} />
            <motion.circle cx="23" cy="32" r="2.5" fill="#818cf8" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }} />
            <motion.circle cx="45" cy="68" r="2.5" fill="#a5b4fc" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.3, repeat: Infinity, repeatType: "reverse", delay: 0.7 }} />
            <motion.circle cx="58" cy="48" r="1.8" fill="#c7d2fe" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse", delay: 0.4 }} />
            <motion.circle cx="32" cy="48" r="1.8" fill="#c7d2fe" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", delay: 0.8 }} />
          </motion.svg>
          <p className="text-indigo-900 font-bold text-lg mb-2 z-10">Unleash automation across your business with AI-driven workflows.</p>
          <ul className="text-left text-indigo-800 text-base font-medium space-y-2 mt-2 z-10">
            <motion.li whileHover={{ scale: 1.08, color: "#a21caf" }} className="flex items-center gap-2 transition">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-200 via-indigo-100 to-blue-100 shadow border border-purple-200">
                <FaBolt className="text-purple-500 text-lg" />
              </span>
              Smart process automation & triggers
            </motion.li>
            <motion.li whileHover={{ scale: 1.08, color: "#2563eb" }} className="flex items-center gap-2 transition">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-100 shadow border border-blue-200">
                <FaChartLine className="text-blue-600 text-lg" />
              </span>
              Real-time data analysis & reporting
            </motion.li>
            <motion.li whileHover={{ scale: 1.08, color: "#059669" }} className="flex items-center gap-2 transition">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-200 via-indigo-100 to-blue-100 shadow border border-green-200">
                <FaPlug className="text-green-600 text-lg" />
              </span>
              Integration with your favorite SaaS tools
            </motion.li>
            <motion.li whileHover={{ scale: 1.08, color: "#6366f1" }} className="flex items-center gap-2 transition">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-200 via-purple-100 to-blue-100 shadow border border-indigo-200">
                <FaRobot className="text-indigo-500 text-lg" />
              </span>
              Custom AI agents for repetitive tasks
            </motion.li>
          </ul>
        </motion.div>
      </section>

      {/* Success Story Section (reuse) */}
      <section className="py-12">
        <SuccessStory />
      </section>

      {/* Final CTA Section */}
      <section>
        <CTA/>
      </section>
      <Footer />
    </div>
  );
}