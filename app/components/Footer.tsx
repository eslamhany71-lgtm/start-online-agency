"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  // للتحكم في ظهور واختفاء النوافذ المنبثقة
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="w-full">
        <div className="bg-[#E01E2E] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left leading-tight">
              Ready to Build, Market <br /> & Scale Your Business?
            </h2>
            <div className="flex flex-col items-center md:items-end text-white/90 text-sm font-medium">
              <p className="mb-4 text-center md:text-right">Let's create something extraordinary together.<br/>Schedule a free consultation and take the first step toward digital growth.</p>
              <Link 
                href="/contact" 
                className="bg-white text-[#E01E2E] px-6 py-3 rounded-md font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                📅 Schedule Consultation →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-gray-800 pb-12">
            
            <div className="lg:col-span-2">
              {/* Logo Section with Old Image */}
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="relative w-12 h-14 md:w-14 md:h-16">
                  <Image
                    src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
                    alt="Start Online Agency Logo"
                    fill
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl leading-none tracking-tight">START ONLINE</span>
                  <span className="text-gray-500 text-[10px] font-bold tracking-[0.3em] mt-1">AGENCY</span>
                </div>
              </Link>
              
              <p className="text-gray-400 text-sm font-medium mb-6 max-w-xs leading-relaxed">
                We build, market, and scale digital businesses through innovative marketing and technology.
              </p>
              <div className="flex gap-4">
                {['in', 'f', 'ig', 'x'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-[#E01E2E] hover:text-[#E01E2E] cursor-pointer transition-all">
                    <span className="text-xs font-bold uppercase">{social}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Navigation</h3>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/companies" className="hover:text-white transition-colors">Our Companies</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Our Services</h3>
              <ul className="space-y-3 text-sm font-medium text-gray-400 mb-8">
                <li>Digital Marketing</li>
                <li>Content Production</li>
                <li>Websites</li>
                <li>Ecommerce</li>
                <li>Custom Systems</li>
                <li>AI / Automation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li className="flex gap-3"><span className="text-gray-500">📍</span> Cairo, Egypt</li>
                <li className="flex gap-3"><span className="text-gray-500">✉️</span> hello@startonline.agency</li>
                <li className="flex gap-3"><span className="text-gray-500">📞</span> +20 122 140 5309</li>
                <li className="flex gap-3"><span className="text-gray-500">🕒</span> Mon - Fri: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-bold text-gray-500">
            <p>© 2026 Start Online Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {/* غيرنا اللينكات لزراير عشان تفتح النوافذ */}
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors focus:outline-none">Privacy Policy</button>
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors focus:outline-none">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* --- النوافذ المنبثقة (Modals) --- */}
      
      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-6 right-6 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E01E2E] hover:text-white transition-colors text-gray-500 font-bold text-xl focus:outline-none">×</button>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>At Start Online Agency, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">1. Information We Collect</h3>
              <p>We may collect personal data such as your name, email address, phone number, and project details when you fill out our contact or application forms.</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">2. How We Use Your Information</h3>
              <p>Your information is used strictly to communicate with you regarding your inquiries, projects, or job applications. We do not sell or share your data with third parties without your consent.</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">3. Data Security</h3>
              <p>We implement standard security measures to protect your data against unauthorized access or disclosure.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl">
            <button onClick={() => setIsTermsOpen(false)} className="absolute top-6 right-6 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E01E2E] hover:text-white transition-colors text-gray-500 font-bold text-xl focus:outline-none">×</button>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-6">Terms of Service</h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>Welcome to Start Online Agency. By engaging with our services, you agree to the following terms and conditions:</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">1. Services Provided</h3>
              <p>Start Online Agency provides digital marketing, software development, content production, and AI integration services as detailed in our formal proposals.</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">2. Payments & Billing</h3>
              <p>Payments for services are subject to the terms agreed upon in the individual project contracts. A deposit is typically required before work commences.</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">3. Intellectual Property</h3>
              <p>Upon full payment, the intellectual property rights of the custom-developed projects (websites, designs, systems) are transferred to the client, unless stated otherwise in the contract.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}