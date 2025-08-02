"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const NewNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const mainNavItems = [
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources" },
  ];

  const secondaryNavItems = [
    { href: "/cloud-computing", label: "Cloud Computing" },
    { href: "/devops", label: "DevOps" },
    { href: "/ai-ml", label: "AI & ML" },
    { href: "/security", label: "Security" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/5 backdrop-blur-xl shadow-lg border-b border-white/10' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}
    >
      {/* Top Layer */}
      <div className={`transition-all duration-300 ${scrolled ? 'py-1 sm:py-2' : 'py-2 sm:py-3'}`}>
        <div className="container-responsive">
          <div className="flex items-center justify-between h-12 sm:h-14 lg:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-45">
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm sm:text-lg">AAS</span>
                </div>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                <span className="hidden sm:inline">AAS CLOUD</span>
                <span className="sm:hidden">AAS</span>
              </span>
            </Link>

            {/* Desktop Navigation - Top */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 lg:px-3 py-2 text-sm lg:text-base font-medium text-white/90 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              {/* Search Button */}
              <button 
                onClick={toggleSearch}
                className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-3 lg:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm lg:text-base font-medium rounded-full hover:opacity-90 transition-opacity min-h-[44px]"
              >
                <span className="lg:hidden">Contact</span>
                <span className="hidden lg:inline">Contact Sales</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-md text-white/80 hover:text-white focus:outline-none hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Layer - Secondary Navigation */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-0 opacity-0' : 'h-8 sm:h-10 opacity-100'} hidden lg:block`}>
        <div className="container-responsive h-full">
          <div className="flex items-center justify-center h-full space-x-4 lg:space-x-6 text-xs lg:text-sm">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors duration-200 px-2 py-1 rounded hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div ref={searchRef} className="w-full max-w-xs sm:max-w-md lg:max-w-2xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search AAS Cloud..."
                className="w-full bg-white/10 border border-white/20 rounded-full py-3 sm:py-4 px-4 sm:px-6 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                autoFocus
              />
              <button 
                onClick={toggleSearch}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg fixed inset-0 z-50 pt-16 sm:pt-20 overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {[...mainNavItems, ...secondaryNavItems].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-lg transition-colors duration-200 min-h-[44px] flex items-center"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 mt-4">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity min-h-[44px] flex items-center justify-center"
                onClick={toggleMobileMenu}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NewNavbar;
