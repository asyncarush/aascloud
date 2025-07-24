"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Carousel slides data (must be after serviceCards is defined)
  const carouselSlides = [
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
  ];

  const [carouselIdx, setCarouselIdx] = useState(0);
  const carouselTimeout = useRef();

  // Carousel auto-slide
  React.useEffect(() => {
    carouselTimeout.current && clearTimeout(carouselTimeout.current);
    carouselTimeout.current = setTimeout(() => {
      setCarouselIdx((idx) => (idx + 1) % carouselSlides.length);
    }, 5000);
    return () => clearTimeout(carouselTimeout.current);
  }, [carouselIdx]);

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
    if (!message) return;
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

  return (
    <div className="min-h-screen flex flex-col section-bg transition-all duration-700">
      {/* Navigation */}

      {/* Hero Section - Carousel */}
      <section className="relative h-screen min-h-0 flex items-center justify-center overflow-hidden section-bg transition-all duration-700">
        {carouselSlides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              carouselIdx === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={carouselIdx !== idx}
          >
            {/* Split layout: image left, content right */}
            <div className="relative flex flex-col md:flex-row w-full h-full z-10">
              {/* Image left */}
              <div className="relative w-full md:w-1/2 h-64 md:h-full flex-shrink-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center rounded-none md:rounded-l-3xl transition-all duration-700"
                  draggable="false"
                  style={{
                    minHeight: "100%",
                    filter: "brightness(0.55) blur(2.5px)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30 md:rounded-l-3xl"
                  style={{ backdropFilter: "blur(2px)" }}
                />
              </div>
              {/* Content right */}
              <div className="flex flex-col justify-center items-start px-6 md:px-16 py-10 md:py-0 w-full md:w-1/2 bg-black/10 backdrop-blur-xl z-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-6 animate-fade-in text-left">
                  {slide.title}
                </h1>
                <p className="mt-2 max-w-xl text-lg md:text-2xl text-white/90 mb-8 font-semibold animate-fade-in delay-100 text-left">
                  {slide.desc}
                </p>
                <a
                  href={slide.ctaHref}
                  className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 text-white font-black text-xl md:text-2xl shadow-2xl hover:from-indigo-700 hover:to-purple-600 focus:outline-none transition-all duration-300 scale-100 hover:scale-105 active:scale-95 animate-fade-in delay-200"
                >
                  {slide.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* Carousel controls */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
          onClick={() =>
            setCarouselIdx(
              (carouselIdx - 1 + carouselSlides.length) % carouselSlides.length
            )
          }
          aria-label="Previous slide"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20"
          onClick={() =>
            setCarouselIdx((carouselIdx + 1) % carouselSlides.length)
          }
          aria-label="Next slide"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 ${
                carouselIdx === idx
                  ? "bg-indigo-500 border-indigo-200"
                  : "bg-white/60 border-white/80"
              } transition`}
              onClick={() => setCarouselIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <div id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Development Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              End-to-end solutions tailored to your business needs
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((card, i) => {
                return (
                  <div
                    key={card.title}
                    className="relative group rounded-xl overflow-hidden shadow-xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:backdrop-blur-2xl"
                  >
                    <div className="relative h-56 w-full">
                      {/* Service Card Image with animated overlay */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-all duration-700 group-hover:opacity-0 group-hover:blur-sm" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-2 tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-white/90 text-base font-medium mb-3 drop-shadow-lg">
                          {card.desc}
                        </p>
                        <a
                          href={card.ctaHref}
                          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500 text-white font-bold text-base shadow-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-600 hover:scale-110 active:scale-95 focus:outline-none animate-glow"
                        >
                          {card.cta}
                        </a>
                      </div>
                    </div>
                    <ul className="p-6 bg-white/80 dark:bg-black/40 rounded-2xl mt-0 flex flex-col gap-2">
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
                          <span className="text-gray-800 dark:text-gray-200 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div
        id="technologies"
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {[
                    {
                      name: "React",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                      desc: "A JavaScript library for building user interfaces",
                    },
                    {
                      name: "Next.js",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                      desc: "The React Framework for Production",
                    },
                    {
                      name: "TypeScript",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                      desc: "Strongly typed programming language",
                    },
                    {
                      name: "Tailwind CSS",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                      desc: "A utility-first CSS framework",
                    },
                    {
                      name: "Redux",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                      desc: "Predictable state container for JavaScript apps",
                    },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 flex items-center justify-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-10 w-10"
                          />
                        </div>
                        <h4 className="mt-3 font-medium text-gray-900">
                          {tech.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                          {tech.desc}
                        </p>
                      </div>
                    </div>
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
                <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {[
                    {
                      name: "Node.js",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                      desc: "JavaScript runtime built on Chrome's V8 engine",
                    },
                    {
                      name: "Express",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                      desc: "Fast, unopinionated web framework for Node.js",
                    },
                    {
                      name: "Python",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                      desc: "High-level programming language",
                    },
                    {
                      name: "Django",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                      desc: "High-level Python web framework",
                    },
                    {
                      name: "PostgreSQL",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                      desc: "Powerful open-source relational database",
                    },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 flex items-center justify-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-10 w-10"
                          />
                        </div>
                        <h4 className="mt-3 font-medium text-gray-900">
                          {tech.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                          {tech.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
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
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">
                    Mobile Development
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Cross-platform mobile applications with native performance
                </p>
                <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {[
                    {
                      name: "React Native",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                      desc: "Framework for building native apps using React",
                    },
                    {
                      name: "Flutter",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                      desc: "UI toolkit for building natively compiled applications",
                    },
                    {
                      name: "Swift",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
                      desc: "Powerful language for iOS development",
                    },
                    {
                      name: "Kotlin",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
                      desc: "Modern programming language for Android",
                    },
                    {
                      name: "Firebase",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                      desc: "App development platform",
                    },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 flex items-center justify-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-10 w-10"
                          />
                        </div>
                        <h4 className="mt-3 font-medium text-gray-900">
                          {tech.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                          {tech.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
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
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-gray-900">
                    DevOps & Cloud
                  </h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Cloud infrastructure and CI/CD pipelines for seamless
                  deployments
                </p>
                <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {[
                    {
                      name: "AWS",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                      desc: "Cloud computing platform",
                    },
                    {
                      name: "Docker",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                      desc: "Containerization platform",
                    },
                    {
                      name: "Kubernetes",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                      desc: "Container orchestration",
                    },
                    {
                      name: "GitHub Actions",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                      desc: "CI/CD and automation",
                    },
                    {
                      name: "Terraform",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
                      desc: "Infrastructure as Code",
                    },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="h-16 w-16 flex items-center justify-center">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-10 w-10"
                          />
                        </div>
                        <h4 className="mt-3 font-medium text-gray-900">
                          {tech.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                          {tech.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot Demo Section */}
      <div className="py-12 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              AI-Driven Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Experience our OpenAI GPT integration in action
            </p>
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-6">
                <h3 className="text-xl font-medium text-gray-900">
                  AI Help Center Demo
                </h3>
                <p className="mt-4 text-gray-500">
                  Try our integrated AI chatbot powered by OpenAI's GPT
                  technology. It can handle customer queries, technical FAQs,
                  and provide intelligent responses.
                </p>
                <div
                  className="mt-6 bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto space-y-4"
                  ref={chatContainerRef}
                >
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={
                        msg.from === "ai"
                          ? "flex items-start"
                          : "flex items-start justify-end"
                      }
                    >
                      {msg.from === "ai" ? (
                        <>
                          <div className="flex-shrink-0 chatbot-avatar">
                            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                              AI
                            </div>
                          </div>
                          <div className="ml-3 bg-white p-3 rounded-lg shadow-sm max-w-xs">
                            <p className="text-sm font-medium text-gray-900">
                              {msg.name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {msg.text}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="ml-3 bg-indigo-100 p-3 rounded-lg shadow-sm max-w-xs">
                          <p className="text-sm font-medium text-indigo-900">
                            {msg.name}
                          </p>
                          <p className="mt-1 text-sm text-indigo-800">
                            {msg.text}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={handleChatKeyDown}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ask me anything..."
                  />
                  <button
                    type="button"
                    onClick={handleSend}
                    className="ml-8 inline-flex items-center px-6 py-2 text-base font-bold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-500 hover:from-indigo-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div className="md:flex-1 p-6 bg-gray-50">
                <h3 className="text-xl font-medium text-gray-900">
                  AI Integration Benefits
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      24/7 automated customer support with natural language
                      understanding
                    </p>
                  </li>
                  {/* ...repeat for other benefits... */}
                </ul>
                <div className="mt-8">
                  <img
                    src="https://placehold.co/400x300"
                    alt="AI chatbot interface"
                    className="rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              About Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Experts in full-stack application development and enterprise
              solutions
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center">
                        <span
                          className={`inline-flex items-center justify-center p-2 ${
                            i % 2 === 0
                              ? "bg-green-500"
                              : i === 6
                              ? "bg-purple-500"
                              : "bg-indigo-500"
                          } rounded-full shadow-lg`}
                        >
                          <img
                            src={`https://placehold.co/96x96?text=Team+${i}`}
                            alt={`Team member ${i}`}
                            className="h-24 w-24 rounded-full"
                          />
                        </span>
                      </div>
                      <h3 className="mt-6 text-lg font-medium text-center text-gray-900">
                        Team Member {i}
                      </h3>
                      <p className="mt-1 text-sm text-center text-indigo-600">
                        Role {i}
                      </p>
                      <p className="mt-4 text-base text-gray-500 text-center">
                        This is a placeholder for a team member's bio. Add real
                        content here to describe their expertise and
                        contributions.
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="text-sm font-medium text-gray-900">
                          Technologies
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-1">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            React
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Next.js
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            TypeScript
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Tailwind
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO at TechNova",
                image: "https://randomuser.me/api/portraits/women/43.jpg",
                rating: 5,
                review:
                  "The team delivered our e-commerce platform ahead of schedule. Their attention to detail and technical expertise is unmatched. Highly recommended!",
                date: "2 weeks ago",
              },
              {
                name: "Michael Chen",
                role: "CEO at HealthPlus",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5,
                review:
                  "The AI integration they built has saved us hundreds of hours in documentation. The team was professional and understood our needs perfectly.",
                date: "1 month ago",
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager at FinSecure",
                image: "https://randomuser.me/api/portraits/women/65.jpg",
                rating: 4,
                review:
                  "Great work on our banking portal modernization. The new system is faster, more secure, and our customers love the improved UX. Will definitely work with them again!",
                date: "3 weeks ago",
              },
              {
                name: "David Kim",
                role: "Founder at EduTech Solutions",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                rating: 5,
                review:
                  "Their mobile development team built our education app from scratch. The attention to performance and user experience was exceptional.",
                date: "2 months ago",
              },
              {
                name: "Priya Patel",
                role: "Director at RetailX",
                image: "https://randomuser.me/api/portraits/women/22.jpg",
                rating: 5,
                review:
                  "The inventory management system they developed has streamlined our operations. The team was responsive and delivered beyond our expectations.",
                date: "1 week ago",
              },
              {
                name: "James Wilson",
                role: "CIO at Global Logistics",
                image: "https://randomuser.me/api/portraits/men/48.jpg",
                rating: 4,
                review:
                  "Excellent work on our logistics tracking system. The real-time updates have improved our delivery times by 30%.",
                date: "1 month ago",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={review.image}
                      alt={`${review.name}'s profile`}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-5 w-5 ${
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4">
                  <p className="text-gray-700 italic">"{review.review}"</p>
                </blockquote>
                <div className="mt-4 text-sm text-gray-500">{review.date}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Read more reviews
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Let's discuss how we can build your next project together
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-lg bg-gray-50 overflow-hidden shadow-lg p-8">
                <h3 className="text-lg font-medium text-gray-900">
                  Contact Information
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  Have questions about our services or want to discuss a
                  potential project? Reach out to our team through any of these
                  channels:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div className="ml-3 text-base text-gray-500">
                      <p>contact@techstack.example</p>
                      <p className="mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="ml-3 text-base text-gray-500">
                      <p>
                        <a href="tel:+91 7905838674">+91 7905838674</a>
                      </p>
                      <p className="mt-1">Mon-Fri from 9am to 5pm</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="ml-3 text-base text-gray-500">
                      <p>123 Tech Street</p>
                      <p className="mt-1">San Francisco, CA 94107</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-gray-900">
                    Follow Us
                  </h4>
                  <div className="mt-4 flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Instagram"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Twitter"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 overflow-hidden shadow-lg p-8">
                <form
                  action="#"
                  method="POST"
                  className="grid grid-cols-1 gap-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Frontend Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Backend Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  AI Integration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Cloud Consulting
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Technologies
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  React.js
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Java Spring Boot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  AWS/GCP
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/About"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Careers"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-base text-gray-300 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0 md:order-2">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300"
              aria-label="GitHub"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300"
              aria-label="Instagram"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300"
              aria-label="Twitter"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} TechStack Solutions. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
