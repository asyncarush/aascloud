import Link from 'next/link';
import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

export default function Footer() {
  const [serviceModal, setServiceModal] = useState(null);
    return (
      <footer className="bg-gray-900 text-gray-200 pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
<ul className="mt-4 space-y-4">
  {[
    { label: 'Frontend Development', key: 'Frontend Development' },
    { label: 'Backend Services', key: 'Backend Services' },
    { label: 'AI Integration', key: 'AI Integration' },
    { label: 'Cloud Consulting', key: 'Cloud Consulting' },
  ].map(({ label, key }) => (
    <li key={key}>
      <button
        type="button"
        className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none"
        onClick={() => setServiceModal(key)}
        aria-label={label}
      >
        <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        {label}
      </button>
    </li>
  ))}
</ul>
<ServiceModal open={!!serviceModal} service={serviceModal} onClose={() => setServiceModal(null)} />

          </div>
  
          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Technologies</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/technologies/react" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  React.js
                </Link>
              </li>
              <li>
                <Link href="/technologies/nodejs" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Node.js
                </Link>
              </li>
              <li>
                <Link href="/technologies/java-spring" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Java Spring Boot
                </Link>
              </li>
              <li>
                <Link href="/technologies/cloud-platforms" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  AWS/GCP
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/About" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link href="/Careers" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
  
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/legal/privacy" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/security" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="flex items-center gap-2 text-base text-gray-300 hover:text-white transition-colors duration-200">
                  <svg className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }