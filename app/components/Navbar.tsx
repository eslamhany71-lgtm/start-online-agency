"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Companies", path: "/companies" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section with Old Image */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-14 md:w-14 md:h-16">
              <Image
                src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
                alt="Start Online Agency Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-gray-900 font-black text-lg md:text-xl leading-none tracking-tight">START ONLINE</span>
              <span className="text-gray-500 text-[8px] md:text-[9px] font-bold tracking-[0.35em] mt-1 uppercase">Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <div key={link.name} className="relative flex flex-col items-center">
                  <Link
                    href={link.path}
                    className={`text-sm font-bold transition-colors ${
                      isActive ? "text-gray-900" : "text-gray-500 hover:text-[#E01E2E]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <div className="absolute -bottom-2 w-5 h-[2px] bg-[#E01E2E] rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link 
              href="/contact" 
              className="bg-[#E01E2E] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 transition-all flex items-center gap-2 shadow-lg shadow-red-500/20"
            >
              Schedule Consultation <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-bold ${
                    isActive ? "text-[#E01E2E]" : "text-gray-600 hover:text-[#E01E2E]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}