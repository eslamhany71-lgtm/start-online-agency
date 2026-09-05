"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // دي عشان تقفل القائمة بتاعت الموبايل تلقائي أول ما تدوس على أي لينك
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Companies", path: "/companies" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-[rgba(17,17,17,0.04)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 relative z-[101]">
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
              <span className="text-[#111111] font-black text-lg md:text-xl leading-none tracking-tight">START ONLINE</span>
              <span className="text-[#666A73] text-[8px] md:text-[9px] font-bold tracking-[0.35em] mt-1 uppercase">Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation (مخفي في الموبايل) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <div key={link.name} className="relative flex flex-col items-center group">
                  <Link
                    href={link.path}
                    className={`text-[13px] font-bold transition-colors ${
                      isActive ? "text-[#111111]" : "text-[#666A73] hover:text-[#E01E2E]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* خط أحمر تحت اللينك النشط */}
                  {isActive && (
                    <div className="absolute -bottom-[28px] w-full h-[2px] bg-[#E01E2E] rounded-t-full"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Link 
              href="/contact" 
              className="bg-[#E01E2E] text-white px-6 h-[44px] rounded-[10px] font-bold text-[13px] hover:bg-red-700 hover:-translate-y-[1px] transition-all flex items-center gap-2 shadow-sm"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Button (زرار القائمة في الموبايل) */}
          <div className="md:hidden flex items-center relative z-[101]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 -mr-2 text-[#111111] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Mobile Menu Dropdown (شكل القائمة لما تفتح في الموبايل) */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-[rgba(17,17,17,0.08)] shadow-2xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-8 flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path}
                className={`block px-4 py-3.5 rounded-[12px] text-[15px] font-bold transition-all ${
                  isActive ? "bg-red-50 text-[#E01E2E]" : "text-[#111111] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* زرار التواصل جوه الموبايل */}
          <div className="pt-6 mt-2 border-t border-[rgba(17,17,17,0.04)]">
            <Link 
              href="/contact" 
              className="bg-[#E01E2E] text-white w-full h-[52px] rounded-[12px] font-bold text-[15px] flex items-center justify-center shadow-lg shadow-red-500/20 active:scale-95 transition-transform"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}