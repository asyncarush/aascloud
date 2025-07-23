"use client";
import Link from "next/link";
import Image from "next/image";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Image src="/ass_logo.png" width={100} height={66} alt="logo" className="logo_img" />
              </Link>
              <div className="hidden md:ml-10 md:flex md:space-x-8">
                <Link href="/Services" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm">Services</Link>
                <Link href="/Careers" className="text-gray-900 font-bold px-3 py-2 text-sm">Careers</Link>
                <Link href="/About" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm">About</Link>
                <Link href="/Contact" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Careers</h1>
        <p className="text-lg text-gray-600">This is a placeholder for the Careers page. More details coming soon!</p>
      </main>
    </div>
  );
} 