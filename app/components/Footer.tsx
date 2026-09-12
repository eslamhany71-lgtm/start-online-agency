"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#0A0A0A] border-t border-[rgba(255,255,255,0.05)] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[rgba(255,255,255,0.1)] pb-12">
          
          {/* Logo & Social */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-12">
                <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Logo" fill className="object-contain brightness-0 invert" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg leading-none tracking-tight">START ONLINE</span>
                <span className="text-[#666A73] text-[9px] font-bold tracking-[0.3em] mt-1">AGENCY</span>
              </div>
            </Link>
            <p className="text-[#666A73] text-[14px] font-medium mb-8 max-w-xs leading-[1.8]">
              We build, market, and scale digital businesses through innovative marketing and technology.
            </p>
            <div className="flex gap-3">
              {['IN', 'F', 'IG', 'X'].map((social) => (
                <a href="#" key={social} className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-[rgba(255,255,255,0.7)] hover:border-[#E01E2E] hover:text-[#E01E2E] transition-all">
                  <span className="text-[11px] font-bold uppercase">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-6 text-[16px]">Navigation</h3>
            <ul className="space-y-4 text-[14px] font-medium text-[#666A73]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/companies" className="hover:text-white transition-colors">Our Companies</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-[16px]">Our Services</h3>
            <ul className="space-y-4 text-[14px] font-medium text-[#666A73]">
              <li>Digital Marketing</li>
              <li>Content Production</li>
              <li>Websites</li>
              <li>Ecommerce</li>
              <li>Custom Systems</li>
              <li>AI / Automation</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-bold mb-6 text-[16px]">Contact Us</h3>
            <ul className="space-y-5 text-[14px] font-medium text-[#666A73]">
              <li className="flex items-start gap-3">
                <span className="text-[#E01E2E] text-lg leading-none">📍</span> 
                <span>Cairo, Egypt</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E01E2E] text-lg leading-none">✉️</span> 
                <a href="mailto:hello@startonline.agency" className="hover:text-white transition-colors">hello@startonline.agency</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#E01E2E] text-lg leading-none">📞</span> 
                <a href="https://wa.me/201221405309" className="hover:text-[#E01E2E] transition-colors underline underline-offset-4">+20 122 140 5309</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-lg leading-none">🕒</span> 
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-[12px] font-medium text-[#666A73]">
          <p>© 2026 Start Online Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </footer>

      {/* --- MODALS --- */}
      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl animate-[fadeIn_0.3s_ease-out]">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-6 right-6 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E01E2E] hover:text-white transition-colors text-gray-500 font-bold text-xl">×</button>
            <h2 className="text-2xl font-black text-[#111111] mb-6">Privacy Policy</h2>
            <div className="space-y-4 text-[#666A73] text-[15px] leading-relaxed">
              <p>At Start Online Agency, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
              <h3 className="text-[#111111] font-bold pt-2">1. Information We Collect</h3>
              <p>We may collect personal data such as your name, email address, phone number, and project details when you fill out our contact or application forms.</p>
              <h3 className="text-[#111111] font-bold pt-2">2. How We Use Your Information</h3>
              <p>Your information is used strictly to communicate with you regarding your inquiries, projects, or job applications. We do not sell or share your data with third parties without your consent.</p>
              <h3 className="text-[#111111] font-bold pt-2">3. Data Security</h3>
              <p>We implement standard security measures to protect your data against unauthorized access or disclosure.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[24px] w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl animate-[fadeIn_0.3s_ease-out]">
            <button onClick={() => setIsTermsOpen(false)} className="absolute top-6 right-6 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E01E2E] hover:text-white transition-colors text-gray-500 font-bold text-xl">×</button>
            <h2 className="text-2xl font-black text-[#111111] mb-6">Terms of Service</h2>
            <div className="space-y-4 text-[#666A73] text-[15px] leading-relaxed">
              <p>Welcome to Start Online Agency. By engaging with our services, you agree to the following terms and conditions:</p>
              <h3 className="text-[#111111] font-bold pt-2">1. Services Provided</h3>
              <p>Start Online Agency provides digital marketing, software development, content production, and AI integration services as detailed in our formal proposals.</p>
              <h3 className="text-[#111111] font-bold pt-2">2. Payments & Billing</h3>
              <p>Payments for services are subject to the terms agreed upon in the individual project contracts. A deposit is typically required before work commences.</p>
              <h3 className="text-[#111111] font-bold pt-2">3. Intellectual Property</h3>
              <p>Upon full payment, the intellectual property rights of the custom-developed projects (websites, designs, systems) are transferred to the client, unless stated otherwise in the contract.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}