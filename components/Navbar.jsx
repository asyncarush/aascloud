"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  return (
    <nav
      className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-white/10 dark:bg-black/30"
      style={{
        borderRadius: "0 0 1.5rem 1.5rem",
        boxShadow: "0 8px 32px 0 rgba(31,38,135,0.10)",
        transition:
          "background 0.4s cubic-bezier(.4,0,.2,1), box-shadow 0.4s cubic-bezier(.4,0,.2,1)",
      }}
    >
      {/* Animated accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500 animate-gradient-x rounded-t-xl opacity-90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent tracking-tight drop-shadow-xl select-none animate-gradient-x uppercase">
                AAS Cloud
              </span>
            </Link>
            <div className="hidden md:ml-12 md:flex md:space-x-10">
              {[
                { href: "/Services", label: "Services" },
                { href: "/About", label: "About" },
                { href: "/Contact", label: "Contact" },
                { href: "/Careers", label: "Careers" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative uppercase tracking-widest font-bold text-base px-4 py-2 text-white/90 hover:text-white transition-all duration-300 focus:outline-none after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-gradient-to-r after:from-indigo-400 after:to-purple-500 hover:after:w-3/4 hover:after:h-1 hover:after:rounded-full after:transition-all after:duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link
              href="/"
              className="ml-8 inline-flex items-center px-5 py-2 text-base font-bold rounded-full shadow-xl text-white bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500 border-2 border-transparent hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition-all duration-300 scale-100 hover:scale-105 active:scale-95 animate-glow"
              style={{ boxShadow: "0 4px 32px 0 rgba(99,102,241,0.18)" }}
            >
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            {/* Theme Toggle Button for Mobile */}

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-indigo-600 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 shadow-md transition-all duration-300 scale-100 hover:scale-110 active:scale-95"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={mobileMenuOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={mobileMenuOpen ? "block h-6 w-6" : "hidden h-6 w-6"}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={(mobileMenuOpen ? "block" : "hidden") + " md:hidden"}
        id="mobile-menu"
      >
        <div className="fixed top-0 left-0 w-full h-full z-40 flex items-start justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-sm mx-auto mt-8 bg-white/80 dark:bg-black/70 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 glass-bg animate-slide-down">
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-3xl text-indigo-500 hover:text-purple-500 focus:outline-none transition-colors"
              aria-label="Close menu"
            >
              &times;
            </button>
            {[
              { href: "/Services", label: "Services" },
              { href: "/About", label: "About" },
              { href: "/Contact", label: "Contact" },
              { href: "/Careers", label: "Careers" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block uppercase tracking-widest font-bold text-lg py-3 text-indigo-700 dark:text-white/90 hover:text-purple-500 transition-all duration-300 relative after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-0 after:h-1 after:bg-gradient-to-r after:from-indigo-400 after:to-purple-500 hover:after:w-2/3 hover:after:h-1 hover:after:rounded-full after:transition-all after:duration-300"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/"
              className="mt-4 inline-flex items-center justify-center px-8 py-3 text-lg font-extrabold rounded-full shadow-xl text-white bg-gradient-to-r from-indigo-500 via-blue-400 to-purple-500 border-2 border-transparent hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition-all duration-300 animate-glow"
              style={{ boxShadow: "0 4px 32px 0 rgba(99,102,241,0.18)" }}
              onClick={toggleMobileMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
