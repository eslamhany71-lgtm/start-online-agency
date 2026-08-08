"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* جزء اللوجو */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/">
              <Image
                src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
                alt="Start Online Logo"
                width={45}
                height={45}
                className="object-contain"
              />
            </Link>
            <span className="text-foreground font-extrabold text-xl tracking-tight">
              START <span className="text-primary">ONLINE</span>
            </span>
          </div>

          {/* جزء اللينكات */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              href="/" 
              className={`transition-colors text-sm font-semibold ${pathname === "/" ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors text-sm font-semibold ${pathname === "/about" ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              About Us
            </Link>
            <Link 
              href="/companies" 
              className={`transition-colors text-sm font-semibold ${pathname === "/companies" ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              Our Companies
            </Link>
            <Link 
              href="/services" 
              className={`transition-colors text-sm font-semibold ${pathname === "/services" ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              Services
            </Link>
            <Link 
              href="/careers" 
              className={`transition-colors text-sm font-semibold ${pathname === "/careers" ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors text-sm font-semibold ${pathname === "/contact" ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
            >
              Contact
            </Link>
          </div>

          {/* زرار حجز الاستشارة */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-500/20 flex items-center gap-2">
                Schedule Consultation <span>→</span>
              </button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}