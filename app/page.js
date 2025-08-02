"use client";
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FaStar, FaPaperPlane, FaEnvelope, FaRobot, FaMagic, FaLightbulb, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NeuralNetworkFlow from "../components/NeuralNetworkFlow";
import WavyFooter from "../components/WavyFooter";
import Footer from "../components/Footer";
import SuccessStory from "../components/SuccessStory";

export default function HomePage() {
  // Mobile device detection for disabling animation on phone only
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia('(max-width: 600px)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  // Performance and accessibility optimizations
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Touch gesture handling
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Chatbot state
  const [chatMessages, setChatMessages] = useState([
    {
      from: "ai",
      name: "AI Assistant",
      text: "Hello! I'm your AI assistant. How can I help you today with your technical questions?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatContainerRef = useRef(null);
  
  // Viewport detection
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateViewport = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);
  
  // Touch gesture detection for carousel
  const minSwipeDistance = 50;
  
  const onTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);
  
  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);
  
  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) {
      return;
    }
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCarouselIdx((prev) => (prev + 1) % carouselSlides.length);
    } else if (isRightSwipe) {
      setCarouselIdx((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    }
  }, [touchStart, touchEnd]);

  // Service cards data
  const serviceCards = [
    {
      title: "Frontend Development",
      desc: "High-performance React.js applications with Next.js for SSR when needed. We build responsive, accessible UIs that delight users and drive engagement.",
      cta: "Learn More",
      ctaHref: "#contact",
      features: [
        "React.js/Next.js Applications",
        "Mobile-responsive Design",
        "Optimized Web Performance",
      ],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=4000&q=95",
    },
    {
      title: "Backend & APIs",
      desc: "Robust Node.js, Express, and serverless APIs. Secure, scalable, and maintainable backends for all your business needs.",
      cta: "See Backend",
      ctaHref: "#contact",
      features: [
        "Node.js/Express APIs",
        "Serverless Functions",
        "Database Integration",
      ],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=4000&q=95",
    },
    {
      title: "Cloud & DevOps",
      desc: "AWS, Azure, GCP, Docker, Kubernetes. CI/CD pipelines, infrastructure-as-code, and automated deployments.",
      cta: "Cloud Solutions",
      ctaHref: "#contact",
      features: [
        "Cloud-Native Apps",
        "Kubernetes & Docker",
        "CI/CD Automation",
      ],
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=4000&q=95",
    },
    {
      title: "AI & Automation",
      desc: "Integrate AI chatbots, automation, and GPT-powered solutions into your business.",
      cta: "AI Services",
      ctaHref: "#contact",
      features: ["AI Chatbots", "Business Automation", "GPT Integration"],
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=4000&q=95",
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform mobile app development using React Native and modern stacks. Beautiful, performant apps for iOS and Android.",
      cta: "Mobile Apps",
      ctaHref: "#contact",
      features: ["React Native Apps", "iOS & Android", "App Store Deployment"],
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=4000&q=95",
    },
    {
      title: "UI/UX Design",
      desc: "Modern, accessible, and beautiful UI/UX design. Wireframes, prototypes, and user research for delightful experiences.",
      cta: "See Design",
      ctaHref: "#contact",
      features: ["Wireframing", "Prototyping", "User Research"],
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=4000&q=95",
    },
  ];

  // Memoized carousel slides data for performance
  const carouselSlides = useMemo(() => [
    {
      title: serviceCards[0].title,
      desc: serviceCards[0].desc,
      img: serviceCards[0].image,
      cta: serviceCards[0].cta,
      ctaHref: serviceCards[0].ctaHref,
    },
    {
      title: serviceCards[1].title,
      desc: serviceCards[1].desc,
      img: serviceCards[1].image,
      cta: serviceCards[1].cta,
      ctaHref: serviceCards[1].ctaHref,
    },
    {
      title: serviceCards[2].title,
      desc: serviceCards[2].desc,
      img: serviceCards[2].image,
      cta: serviceCards[2].cta,
      ctaHref: serviceCards[2].ctaHref,
    },
    {
      title: serviceCards[3].title,
      desc: serviceCards[3].desc,
      img: serviceCards[3].image,
      cta: serviceCards[3].cta,
      ctaHref: serviceCards[3].ctaHref,
    },
  ], [serviceCards]);

  // Carousel state with performance optimization
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Auto-advance carousel with pause on interaction
  useEffect(() => {
    if (!isAutoPlaying || isUserInteracting || shouldReduceMotion) {
      return;
    }
    
    const interval = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [carouselSlides.length, isAutoPlaying, isUserInteracting, shouldReduceMotion]);
  
  // Pause autoplay on user interaction
  const handleUserInteraction = useCallback(() => {
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 10000); // Resume after 10s
  }, []);

  // Navbar transparency on scroll
  const [navSolid, setNavSolid] = useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setNavSolid(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle sending chat message
  const handleSend = () => {
    const message = chatInput.trim();
    if (!message) {
      return;
    }
    setChatMessages((msgs) => [
      ...msgs,
      { from: "user", name: "You", text: message },
    ]);
    setChatInput("");
    setTimeout(() => {
      setChatMessages((msgs) => [
        ...msgs,
        {
          from: "ai",
          name: "AI Assistant",
          text: "I'm a demo AI assistant. In a real implementation, I would connect to OpenAI's API to provide intelligent responses to your questions about our services and technologies.",
        },
      ]);
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }
    }, 1000);
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }, 10);
    }
  };

  // Handle Enter key in chat input
  const handleChatKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);

  // Service modal state
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  // Handle service card click
  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  // Close service modal
  const closeServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  // Service details data
  const serviceDetails = {
    "Frontend Development": {
      technologies: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      deliverables: ["Responsive Web Applications", "Progressive Web Apps (PWA)", "Single Page Applications (SPA)", "Component Libraries", "Performance Optimization"],
      timeline: "2-8 weeks",
      process: ["Requirements Analysis", "UI/UX Design", "Development", "Testing", "Deployment", "Maintenance"]
    },
    "Backend & APIs": {
      technologies: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"],
      deliverables: ["RESTful APIs", "GraphQL APIs", "Database Design", "Authentication Systems", "Real-time Features"],
      timeline: "3-10 weeks",
      process: ["Architecture Planning", "Database Design", "API Development", "Security Implementation", "Testing", "Documentation"]
    },
    "Cloud & DevOps": {
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      deliverables: ["Cloud Infrastructure", "CI/CD Pipelines", "Container Orchestration", "Monitoring Setup", "Security Configuration"],
      timeline: "2-6 weeks",
      process: ["Infrastructure Assessment", "Cloud Migration", "Pipeline Setup", "Security Hardening", "Monitoring", "Optimization"]
    },
    "AI & Automation": {
      technologies: ["OpenAI GPT", "LangChain", "Python", "TensorFlow", "PyTorch", "Hugging Face", "Vector Databases"],
      deliverables: ["AI Chatbots", "Document Processing", "Workflow Automation", "Custom AI Models", "Integration APIs"],
      timeline: "4-12 weeks",
      process: ["AI Strategy", "Data Preparation", "Model Development", "Integration", "Testing", "Deployment"]
    },
    "Mobile Apps": {
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Connect"],
      deliverables: ["iOS Applications", "Android Applications", "Cross-platform Apps", "App Store Deployment", "Push Notifications"],
      timeline: "6-16 weeks",
      process: ["App Design", "Development", "Testing", "App Store Submission", "Launch", "Maintenance"]
    },
    "UI/UX Design": {
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Framer"],
      deliverables: ["User Research", "Wireframes", "Prototypes", "Design Systems", "Usability Testing"],
      timeline: "2-8 weeks",
      process: ["Research", "Wireframing", "Visual Design", "Prototyping", "Testing", "Handoff"]
    }
  };

  return (
    <div className="min-h-screen flex flex-col section-bg transition-all duration-700">
      {/* Navigation */}

      {/* Hero Section - Enhanced Carousel - Fully Responsive */}
      <section 
        className="relative h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden section-bg transition-all duration-700 safe-area-inset"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="banner"
        aria-label="Hero carousel"
      >
        {carouselSlides.map((slide, idx) => (
          <motion.div
            key={slide.title}
            className={`absolute inset-0 w-full h-full ${
              carouselIdx === idx ? "z-10" : "z-0"
            }`}
            initial={isMobile ? false : { opacity: 0 }}
            animate={isMobile ? false : { 
              opacity: carouselIdx === idx ? 1 : 0,
              scale: carouselIdx === idx ? 1 : 1.05
            }}
            transition={isMobile ? undefined : { 
              duration: shouldReduceMotion ? 0.1 : 0.7,
              ease: "easeInOut"
            }}
            aria-hidden={carouselIdx !== idx}
            style={{
              y: carouselIdx === idx ? backgroundY : 0
            }}
          >
            {/* Responsive layout: stacked on mobile, side-by-side on desktop */}
            <div className="relative flex flex-col lg:flex-row w-full h-full z-10">
              {/* Image section - responsive heights */}
              <div className="relative w-full lg:w-1/2 h-2/5 sm:h-1/2 lg:h-full flex-shrink-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center rounded-none lg:rounded-l-3xl transition-all duration-700"
                  draggable="false"
                  style={{
                    minHeight: "100%",
                    filter: "brightness(0.55) blur(2.5px)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30 lg:rounded-l-3xl"
                  style={{ backdropFilter: "blur(2px)" }}
                />
              </div>
              {/* Content section - responsive padding and positioning */}
              <div className="relative flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-6 lg:py-0 w-full lg:w-1/2 bg-black/10 backdrop-blur-xl z-20 min-h-[60vh] lg:min-h-full">
                {/* Floating badge - responsive positioning */}
                <motion.div 
                  initial={{ opacity: 0, y: -30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.7, type: 'spring', delay: 0.2 }}
                  className="absolute -top-2 sm:-top-4 lg:-top-8 left-4 sm:left-6 lg:left-8 z-30"
                >
                  <motion.span
                    className="inline-flex items-center justify-center bg-gradient-to-tr from-pink-400 via-orange-400 to-blue-400 rounded-full shadow-xl w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 sm:border-3 lg:border-4 border-white/40 backdrop-blur-xl"
                    animate={{ boxShadow: [
                      "0 0 18px 4px #fb718588, 0 0 32px 8px #38bdf866",
                      "0 0 32px 8px #38bdf866, 0 0 18px 4px #fb718588"
                    ] }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                  >
                    <FaStar className="text-yellow-300 text-sm sm:text-xl lg:text-3xl drop-shadow-lg animate-pulse" />
                  </motion.span>
                </motion.div>
                {/* Animated heading with gradient - Fully Responsive */}
                <motion.h1 
                  initial={{ scale: 0.93, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ 
                    duration: 1.1, 
                    type: 'spring', 
                    delay: 0.3, 
                    backgroundPosition: { repeat: Infinity, duration: 3 } 
                  }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold mb-3 sm:mb-4 lg:mb-6 text-left bg-gradient-to-r from-pink-300 via-orange-300 via-blue-300 to-teal-300 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-2xl leading-tight"
                  style={{ backgroundSize: '200% 200%', backgroundPosition: '0% 50%' }}
                >
                  {slide.title}
                </motion.h1>
                {/* Animated subheading - Responsive */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-1 sm:mt-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white/90 mb-4 sm:mb-6 lg:mb-8 font-semibold text-left leading-relaxed"
                >
                  {slide.desc}
                </motion.p>
                {/* Glassy animated button - Fully Responsive */}
                <motion.a
                  href={slide.ctaHref}
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 4px 32px 0 #fb718588, 0 1.5px 8px 0 #38bdf866", 
                    borderColor: "#fb7185", 
                    background: "linear-gradient(90deg, rgba(253,242,248,0.9) 0%, rgba(240,245,255,0.9) 100%)" 
                  }}
                  transition={{ duration: 0.3, type: 'spring', delay: 0.9 }}
                  className="relative inline-flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 rounded-full bg-white/20 border-2 border-pink-200/50 shadow-xl font-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl backdrop-blur-2xl text-white hover:text-pink-700 transition mb-2 z-10 group min-h-[44px] btn-mobile"
                >
                  <motion.span
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
                    className="inline-flex"
                  >
                    <FaPaperPlane className="text-pink-300 text-sm sm:text-base lg:text-lg xl:text-xl group-hover:text-orange-500 transition" />
                  </motion.span>
                  <span className="hidden sm:inline">{slide.cta}</span>
                  <span className="sm:hidden">Start</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Carousel controls - Enhanced with better UX */}
        <motion.button
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-3 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-sm transition-all duration-300 focus-visible touch-optimized"
          onClick={() => {
            setCarouselIdx(
              (carouselIdx - 1 + carouselSlides.length) % carouselSlides.length
            );
            handleUserInteraction();
          }}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
          aria-label="Previous slide"
          disabled={carouselSlides.length <= 1}
        >
          <FaChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
        </motion.button>
        
        <motion.button
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 sm:p-3 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-sm transition-all duration-300 focus-visible touch-optimized"
          onClick={() => {
            setCarouselIdx((carouselIdx + 1) % carouselSlides.length);
            handleUserInteraction();
          }}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
          aria-label="Next slide"
          disabled={carouselSlides.length <= 1}
        >
          <FaChevronRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
        </motion.button>
        {/* Enhanced pagination dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20 safe-area-inset">
          {carouselSlides.map((_, idx) => (
            <motion.button
              key={idx}
              className={`relative rounded-full border-2 min-h-[44px] min-w-[44px] sm:min-h-auto sm:min-w-auto flex items-center justify-center transition-all duration-300 focus-visible touch-optimized ${
                carouselIdx === idx
                  ? "bg-indigo-500 border-indigo-200 w-8 h-2.5 sm:w-10 sm:h-3"
                  : "bg-white/60 border-white/80 w-2.5 h-2.5 sm:w-3 sm:h-3 hover:bg-white/80"
              }`}
              onClick={() => {
                setCarouselIdx(idx);
                handleUserInteraction();
              }}
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.2 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={carouselIdx === idx ? "true" : "false"}
            >
              <span className="sr-only">Slide {idx + 1}</span>
              {carouselIdx === idx && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"
                  layoutId="activeSlide"
                  transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Autoplay control */}
        <motion.button
          className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20 min-h-[44px] min-w-[44px] flex items-center justify-center backdrop-blur-sm transition-all duration-300 focus-visible"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.9 }}
          aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoPlaying ? (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </motion.button>
      </section>

      {/* Services Section */}
      <section className="section-spacing relative safe-area-inset">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-fluid-2xl lg:text-fluid-3xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-fluid-base md:text-fluid-lg text-white/80 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </motion.div>
        </div>
      </section>
      
      <div
        id="services"
        className="relative py-16 min-h-[80vh] bg-white bg-[url('/mesh-bg.png')] bg-top bg-cover bg-no-repeat overflow-hidden"
      >
        <NeuralNetworkFlow style={{ top: 0, left: 0, width: "100%", height: "350px", zIndex: 1 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl tracking-tight font-extrabold bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl sm:text-5xl">
              Comprehensive Development Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-700 dark:text-gray-300 mx-auto">
              End-to-end solutions tailored to your business needs
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: shouldReduceMotion ? 0 : -10, scale: shouldReduceMotion ? 1 : 1.02 }}
                className="relative group card-responsive bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 h-full cursor-pointer touch-optimized"
                onClick={() => handleServiceClick(card)}
              >
                {/* Animated glass shine */}
                <span className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-gradient-to-tr from-white/60 via-transparent to-white/10 opacity-0 group-hover:opacity-60 transition-opacity duration-700 animate-glassy-shine" />
                <div className="relative h-60 w-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-all duration-700 group-hover:opacity-40 group-hover:blur-sm rounded-t-3xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-xl mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-white/90 text-base font-medium mb-4 drop-shadow-lg">
                      {card.desc}
                    </p>
                    <button
                      onClick={() => handleServiceClick(card)}
                      className="inline-block px-7 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500 text-white font-bold text-base shadow-xl transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 hover:scale-110 active:scale-95 focus:outline-none animate-glow backdrop-blur-md border border-white/30 cursor-pointer"
                    >
                      {card.cta}
                    </button>
                  </div>
                </div>
                <ul className="p-6 bg-white/60 dark:bg-white/10 rounded-2xl mt-0 flex flex-col gap-3 backdrop-blur-md border border-white/20">
                  {card.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-indigo-600 mb-1 gap-2"
                    >
                      <svg
                        className="flex-shrink-0 h-5 w-5 mr-0 text-gradient-indigo-purple"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-800 dark:text-gray-100 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Glassy border light effect */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-white/30 group-hover:border-indigo-300/60 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
@keyframes glassy-shine {
  0% { opacity: 0; }
  40% { opacity: 0.5; }
  100% { opacity: 0; }
}
.animate-glassy-shine {
  animation: glassy-shine 2.5s ease-in-out infinite;
}
.shadow-glass {
  box-shadow: 0 8px 40px 0 rgba(80, 80, 180, 0.14), 0 1.5px 4px 0 rgba(80, 80, 180, 0.10);
}
`}</style>

      {/* Technology Stack Section */}
      <div
        id="technologies"
        className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <NeuralNetworkFlow style={{ top: 0, left: 0, width: "100%", height: "350px", zIndex: 1 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Technology Stack
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              We leverage cutting-edge technologies to build robust, scalable,
              and high-performance applications
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {/* Frontend Technologies */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">
                    Frontend Development
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Building responsive, interactive user interfaces with modern
                  JavaScript frameworks and libraries
                </p>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "React",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                      desc: "A JavaScript library for building user interfaces",
                      skills: ["Components & JSX", "Hooks & State", "Props & Events", "Virtual DOM"],
                      resources: ["React Official Docs", "React Tutorial", "Codecademy React", "freeCodeCamp"],
                      level: "Beginner to Advanced",
                      timeToLearn: "2-4 months"
                    },
                    {
                      name: "Next.js",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                      desc: "The React Framework for Production",
                      skills: ["SSR & SSG", "API Routes", "File-based Routing", "Image Optimization"],
                      resources: ["Next.js Learn", "Vercel Docs", "Next.js Handbook", "YouTube Tutorials"],
                      level: "Intermediate",
                      timeToLearn: "1-2 months"
                    },
                    {
                      name: "TypeScript",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                      desc: "Strongly typed programming language",
                      skills: ["Type Annotations", "Interfaces", "Generics", "Decorators"],
                      resources: ["TypeScript Handbook", "TypeScript Deep Dive", "Execute Program", "Type Challenges"],
                      level: "Intermediate",
                      timeToLearn: "1-3 months"
                    },
                    {
                      name: "Tailwind CSS",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
                      desc: "A utility-first CSS framework",
                      skills: ["Utility Classes", "Responsive Design", "Custom Components", "Dark Mode"],
                      resources: ["Tailwind Docs", "Tailwind UI", "Headless UI", "Tailwind Play"],
                      level: "Beginner",
                      timeToLearn: "2-4 weeks"
                    },
                    {
                      name: "Redux",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                      desc: "Predictable state container for JavaScript apps",
                      skills: ["Actions & Reducers", "Store Management", "Middleware", "Redux Toolkit"],
                      resources: ["Redux Docs", "Redux Toolkit", "Egghead Redux", "Dave Ceddia Blog"],
                      level: "Intermediate",
                      timeToLearn: "1-2 months"
                    }
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-8 w-8"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {tech.desc}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {tech.level}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {tech.timeToLearn}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Study Resources:</h5>
                        <ul className="space-y-1">
                          {tech.resources.map((resource, resIdx) => (
                            <li key={resIdx} className="flex items-center text-xs text-gray-600">
                              <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">
                    Backend Development
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Robust server-side solutions with high performance and
                  scalability
                </p>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Node.js",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                      desc: "JavaScript runtime built on Chrome's V8 engine",
                      skills: ["Event Loop", "NPM Packages", "File System", "HTTP Modules"],
                      resources: ["Node.js Docs", "Node.js Tutorial", "The Node.js Handbook", "NodeSchool"],
                      level: "Intermediate",
                      timeToLearn: "2-3 months"
                    },
                    {
                      name: "Express",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                      desc: "Fast, unopinionated web framework for Node.js",
                      skills: ["Routing", "Middleware", "Template Engines", "Error Handling"],
                      resources: ["Express.js Guide", "MDN Express Tutorial", "Express in Action", "FreeCodeCamp"],
                      level: "Beginner to Intermediate",
                      timeToLearn: "1-2 months"
                    },
                    {
                      name: "Python",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                      desc: "High-level programming language",
                      skills: ["Data Structures", "OOP", "Libraries", "Web Scraping"],
                      resources: ["Python.org Tutorial", "Automate the Boring Stuff", "Real Python", "Python Crash Course"],
                      level: "Beginner to Advanced",
                      timeToLearn: "3-6 months"
                    },
                    {
                      name: "Django",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                      desc: "High-level Python web framework",
                      skills: ["Models & ORM", "Views & Templates", "Admin Interface", "Authentication"],
                      resources: ["Django Tutorial", "Django for Beginners", "Two Scoops of Django", "Django Girls"],
                      level: "Intermediate",
                      timeToLearn: "2-4 months"
                    },
                    {
                      name: "PostgreSQL",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                      desc: "Powerful open-source relational database",
                      skills: ["SQL Queries", "Indexing", "Transactions", "Performance Tuning"],
                      resources: ["PostgreSQL Tutorial", "PostgreSQL Documentation", "SQL Bolt", "W3Schools SQL"],
                      level: "Beginner to Advanced",
                      timeToLearn: "2-4 months"
                    }
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-8 w-8"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {tech.desc}
                          </p>
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {tech.level}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {tech.timeToLearn}
                        </span>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.skills.map((skill, skillIdx) => (
                            <span
                              key={skillIdx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Study Resources:</h5>
                        <ul className="space-y-1">
                          {tech.resources.map((resource, resIdx) => (
                            <li key={resIdx} className="flex items-center text-xs text-gray-600">
                              <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">Mobile Development</h3>
                </div>
                <p className="mt-4 text-gray-600">Cross-platform mobile applications with native performance.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "React Native",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                      desc: "Build native apps with React",
                      skills: ["JavaScript/ES6+", "React Hooks", "Component Styling", "State Management", "Native Module Bridging"],
                      resources: ["React Native Docs", "Fullstack Open - Part 10", "Handlebar Labs", "egghead.io"],
                      level: "Intermediate",
                      timeToLearn: "3-6 months"
                    },
                    {
                      name: "Flutter",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                      desc: "Google's UI toolkit for beautiful apps",
                      skills: ["Dart Programming", "Widget Composition", "State Management (Bloc)", "Async Programming", "Firebase"],
                      resources: ["Flutter Docs", "Flutter Bootcamp", "Flutter Community", "Awesome Flutter"],
                      level: "Beginner to Advanced",
                      timeToLearn: "2-5 months"
                    },
                    {
                      name: "Swift",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
                      desc: "Language for Apple platforms",
                      skills: ["Swift Language", "SwiftUI", "Core Data", "Combine Framework", "XCode"],
                      resources: ["Apple Developer Docs", "Hacking with Swift", "Ray Wenderlich", "Stanford CS193p"],
                      level: "Intermediate to Advanced",
                      timeToLearn: "4-8 months"
                    },
                    {
                      name: "Kotlin",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
                      desc: "Modern language for Android",
                      skills: ["Kotlin Language", "Android Jetpack", "Coroutines", "Room Database", "Android Studio"],
                      resources: ["Kotlin Docs", "Android Developer Docs", "Google Codelabs", "MindOrks"],
                      level: "Intermediate to Advanced",
                      timeToLearn: "4-8 months"
                    },
                    {
                      name: "Firebase",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                      desc: "Backend-as-a-Service platform",
                      skills: ["Authentication", "Firestore", "Cloud Functions", "Storage", "Security Rules"],
                      resources: ["Firebase Docs", "Fireship.io", "Firebase YouTube", "Google Codelabs"],
                      level: "Beginner to Intermediate",
                      timeToLearn: "1-3 months"
                    }
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl">
                          <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">{tech.name}</h4>
                          <p className="text-sm text-gray-500">{tech.desc}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">{tech.level}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">{tech.timeToLearn}</span>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.skills.map((skill, skillIdx) => (
                            <span key={skillIdx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{skill}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Study Resources:</h5>
                        <ul className="space-y-1">
                          {tech.resources.map((resource, resIdx) => (
                            <li key={resIdx} className="flex items-center text-xs text-gray-600">
                              <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">DevOps & Cloud</h3>
                </div>
                <p className="mt-4 text-gray-600">Cloud infrastructure and CI/CD pipelines for seamless deployments.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                    name: "AWS",
                    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                    desc: "Amazon's cloud computing platform",
                    skills: ["EC2 & S3", "VPC Networking", "IAM Roles", "Lambda", "CloudFormation"],
                    resources: ["AWS Training", "A Cloud Guru", "Adrian Cantrill", "AWS Whitepapers"],
                    level: "Beginner to Advanced",
                    timeToLearn: "3-9 months"
                  },
                    {
                      name: "Docker",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                      desc: "Containerization platform",
                      skills: ["Dockerfile", "Image Management", "Docker Compose", "Networking", "Volumes"],
                      resources: ["Docker Docs", "Play with Docker", "Docker Curriculum", "Bret Fisher's Course"],
                      level: "Beginner to Intermediate",
                      timeToLearn: "1-2 months"
                    },
                    {
                      name: "Kubernetes",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                      desc: "Container orchestration system",
                      skills: ["Pods & Deployments", "Services & Ingress", "ConfigMaps & Secrets", "StatefulSets", "Helm"],
                      resources: ["Kubernetes Docs", "Kubernetes by Example", "KTHW", "CKAD/CKA Prep"],
                      level: "Intermediate to Advanced",
                      timeToLearn: "4-8 months"
                    },
                    {
                      name: "GitHub Actions",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                      desc: "Automate workflows in GitHub",
                      skills: ["Workflow Syntax", "Runners", "Actions Marketplace", "Secrets Management", "CI/CD Patterns"],
                      resources: ["GitHub Actions Docs", "GitHub Learning Lab", "Awesome Actions", "Community Forums"],
                      level: "Beginner to Intermediate",
                      timeToLearn: "1-3 months"
                    },
                    {
                      name: "Terraform",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
                      desc: "Infrastructure as Code tool",
                      skills: ["HCL Syntax", "Providers", "Modules", "State Management", "Terraform Cloud"],
                      resources: ["Terraform Docs", "HashiCorp Learn", "Terraform Registry", "Anton Babenko"],
                      level: "Intermediate",
                      timeToLearn: "2-4 months"
                    }
                  ].map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                      className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-amber-300 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl">
                          <img src={tech.icon} alt={tech.name} className="h-8 w-8" />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold text-gray-900">{tech.name}</h4>
                          <p className="text-sm text-gray-500">{tech.desc}</p>
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">{tech.level}</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">{tech.timeToLearn}</span>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</h5>
                        <div className="flex flex-wrap gap-1">
                          {tech.skills.map((skill, skillIdx) => (
                            <span key={skillIdx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">{skill}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Study Resources:</h5>
                        <ul className="space-y-1">
                          {tech.resources.map((resource, resIdx) => (
                            <li key={resIdx} className="flex items-center text-xs text-gray-600">
                              <div className="w-1 h-1 bg-amber-400 rounded-full mr-2"></div>
                              {resource}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Story Section */}
      <SuccessStory />

      {/* AI Solutions Section */}
      <div id="ai-solutions" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-4">
              Intelligent Automation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Advanced AI Solutions
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI technology and automation
            </p>
          </div>
          <div className="relative mt-16">
            {/* Animated background elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
              {/* AI Capability Card 1 - 3D Tilt Effect */}
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 hover:border-indigo-500/30 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Process Automation</h3>
                  <p className="text-gray-400 mb-6">Automate repetitive tasks and workflows with intelligent process automation, reducing manual effort by up to 70%.</p>
                  <ul className="space-y-3">
                    {['Document processing', 'Data extraction', 'Workflow automation'].map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <svg className="w-5 h-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <motion.a 
                      href="#contact"
                      className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-medium text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore More
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* AI Capability Card 2 - Glass Morphism */}
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full border border-white/10 hover:border-blue-400/30 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Intelligent Analytics</h3>
                  <p className="text-gray-300 mb-6">Gain valuable insights from your data with advanced analytics and predictive modeling capabilities.</p>
                  <ul className="space-y-3">
                    {['Real-time dashboards', 'Predictive analytics', 'Custom reporting'].map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <motion.a 
                      href="#contact"
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white font-medium text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore More
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* AI Capability Card 3 - Floating Animation */}
              <motion.div 
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 h-full border border-gray-800 hover:border-pink-500/30 transition-colors duration-300">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 mx-auto"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Natural Language Processing</h3>
                  <p className="text-gray-400 mb-6">Extract meaning and context from text data with our advanced NLP capabilities.</p>
                  <ul className="space-y-3">
                    {['Sentiment analysis', 'Entity recognition', 'Text classification'].map((item, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center text-gray-400 group-hover:text-white transition-colors duration-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <motion.a 
                      href="#contact"
                      className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg text-white font-medium text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore More
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Built for the Future of Cloud + AI Feature Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.h2 
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Built for the Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                Cloud + AI
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Revolutionize your workflow with AI-powered cloud solutions that adapt to your needs
            </motion.p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Feature 1: Smart Knowledge Hub */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.4)"
              }}
              className="relative group bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 hover:border-purple-400/50 transition-all duration-500"
            >
              {/* Floating PNG Illustration */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaRobot className="text-white text-2xl sm:text-3xl" />
              </motion.div>
              
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                >
                  <FaLightbulb className="text-white text-2xl sm:text-3xl" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>🧠</span>
                  <span>Smart Knowledge Hub</span>
                </h3>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                  AI searches your cloud docs in seconds. From PDFs to logs — just ask.
                </p>
                
                {/* Feature highlights */}
                <div className="space-y-3">
                  {[
                    "Instant document search",
                    "Natural language queries", 
                    "Multi-format support"
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Feature 2: DevOps Copilot */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.4)"
              }}
              className="relative group bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 hover:border-pink-400/50 transition-all duration-500"
            >
              {/* Floating PNG Illustration */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FaMagic className="text-white text-2xl sm:text-3xl" />
              </motion.div>
              
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-violet-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                >
                  <FaRobot className="text-white text-2xl sm:text-3xl" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>⚙️</span>
                  <span>DevOps Copilot</span>
                </h3>
                
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                  Generate infra code, debug deploys, and automate your pipeline with LLMs.
                </p>
                
                {/* Feature highlights */}
                <div className="space-y-3">
                  {[
                    "Auto-generate infrastructure",
                    "Intelligent debugging", 
                    "Pipeline automation"
                  ].map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16 lg:mt-20"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(139, 92, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Experience the Future</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaPaperPlane className="text-xl group-hover:rotate-12 transition-transform" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

            {/* Form */}

            <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent"> Amazing Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Get in touch with our expert team and let's discuss your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">as@aascloud.info</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+91- 7905838674</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">Remote<br />Global</p>
                </div>
              </div>

              <div className="pt-8">
  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    {/* Instagram */}
    <a href="https://www.instagram.com/aascloud.info/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300">
  <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
  </svg>
</a>
    {/* LinkedIn */}
    <a href="https://www.linkedin.com/company/107565947/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300">
      <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  </div>
</div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <form action="https://formspree.io/f/movldyan" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="" className="bg-gray-900">Select a service</option>
                    <option value="frontend" className="bg-gray-900">Frontend Development</option>
                    <option value="backend" className="bg-gray-900">Backend & APIs</option>
                    <option value="cloud" className="bg-gray-900">Cloud & DevOps</option>
                    <option value="ai" className="bg-gray-900">AI & Automation</option>
                    <option value="mobile" className="bg-gray-900">Mobile Apps</option>
                    <option value="design" className="bg-gray-900">UI/UX Design</option>
                    <option value="other" className="bg-gray-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    Send Message
                    <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>

                <p className="text-sm text-gray-400 text-center">
                  We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {isServiceModalOpen && selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeServiceModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {selectedService.title}
              </h2>
              <button
                onClick={closeServiceModal}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Service Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {selectedService.desc}
            </p>

            {/* Service Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technologies */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceDetails[selectedService.title]?.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full text-sm text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Deliverables
                </h3>
                <ul className="space-y-2">
                  {serviceDetails[selectedService.title]?.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & Pricing */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Timeline & Pricing
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{serviceDetails[selectedService.title]?.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Our Process
                </h3>
                <div className="space-y-3">
                  {serviceDetails[selectedService.title]?.process.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                onClick={closeServiceModal}
              >
                Get Started
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                onClick={closeServiceModal}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
      </div>
    );
}