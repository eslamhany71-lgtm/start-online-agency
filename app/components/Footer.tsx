"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer({ locale, dict }: { locale: string, dict: any }) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="w-full">
        <div className="bg-[#E01E2E] py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center md:text-left rtl:md:text-right leading-tight" dangerouslySetInnerHTML={{ __html: dict.ctaTitle }}></h2>
            <div className="flex flex-col items-center md:items-end rtl:md:items-start text-white/90 text-sm font-medium">
              <p className="mb-4 text-center md:text-right rtl:md:text-left" dangerouslySetInnerHTML={{ __html: dict.ctaDesc }}></p>
              <Link 
                href={`/${locale}/contact`} 
                className="bg-white text-[#E01E2E] px-6 py-3 rounded-md font-bold text-sm hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                {dict.schedule}
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-gray-800 pb-12">
            
            <div className="lg:col-span-2">
              <Link href={`/${locale}`} className="flex items-center gap-2 mb-6">
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
                  <span className="text-gray-500 text-[10px] font-bold tracking-[0.3em] mt-1 uppercase">AGENCY</span>
                </div>
              </Link>
              
              <p className="text-gray-400 text-sm font-medium mb-6 max-w-xs leading-relaxed">
                {dict.desc}
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
              <h3 className="text-white font-bold mb-6">{dict.navTitle}</h3>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><Link href={`/${locale}`} className="hover:text-white transition-colors">{dict.navTitle === 'Navigation' ? 'Home' : 'الرئيسية'}</Link></li>
                <li><Link href={`/${locale}/about`} className="hover:text-white transition-colors">{dict.navTitle === 'Navigation' ? 'About Us' : 'من نحن'}</Link></li>
                <li><Link href={`/${locale}/companies`} className="hover:text-white transition-colors">{dict.navTitle === 'Navigation' ? 'Our Companies' : 'شركاتنا'}</Link></li>
                <li><Link href={`/${locale}/services`} className="hover:text-white transition-colors">{dict.navTitle === 'Navigation' ? 'Services' : 'خدماتنا'}</Link></li>
                <li><Link href={`/${locale}/careers`} className="hover:text-white transition-colors">{dict.navTitle === 'Navigation' ? 'Careers' : 'وظائف'}</Link></li>
                <li><Link href={`/${locale}/contact`} className="hover:text-white transition-colors">{dict.navTitle === 'Navigation' ? 'Contact' : 'تواصل معنا'}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">{dict.servicesTitle}</h3>
              <ul className="space-y-3 text-sm font-medium text-gray-400 mb-8">
                {dict.servicesList.map((srv: string, i: number) => (
                  <li key={i}>{srv}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">{dict.contactTitle}</h3>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li className="flex gap-3"><span className="text-gray-500">📍</span> {dict.contactInfo.location}</li>
                <li className="flex gap-3"><span className="text-gray-500">✉️</span> {dict.contactInfo.email}</li>
                <li className="flex gap-3"><span className="text-gray-500">📞</span> <span dir="ltr">{dict.contactInfo.phone}</span></li>
                <li className="flex gap-3"><span className="text-gray-500">🕒</span> {dict.contactInfo.hours}</li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-bold text-gray-500">
            <p>{dict.rights}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors focus:outline-none">{dict.privacy}</button>
              <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors focus:outline-none">{dict.terms}</button>
            </div>
          </div>
        </div>
      </footer>

      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-6 right-6 rtl:left-6 rtl:right-auto w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E01E2E] hover:text-white transition-colors text-gray-500 font-bold text-xl focus:outline-none">×</button>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-6">{dict.modals.privacy.title}</h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>{dict.modals.privacy.p1}</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">{dict.modals.privacy.h1}</h3>
              <p>{dict.modals.privacy.d1}</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">{dict.modals.privacy.h2}</h3>
              <p>{dict.modals.privacy.d2}</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">{dict.modals.privacy.h3}</h3>
              <p>{dict.modals.privacy.d3}</p>
            </div>
          </div>
        </div>
      )}

      {isTermsOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative shadow-2xl">
            <button onClick={() => setIsTermsOpen(false)} className="absolute top-6 right-6 rtl:left-6 rtl:right-auto w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E01E2E] hover:text-white transition-colors text-gray-500 font-bold text-xl focus:outline-none">×</button>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-6">{dict.modals.terms.title}</h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>{dict.modals.terms.p1}</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">{dict.modals.terms.h1}</h3>
              <p>{dict.modals.terms.d1}</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">{dict.modals.terms.h2}</h3>
              <p>{dict.modals.terms.d2}</p>
              <h3 className="text-[#1A1A1A] font-bold pt-2">{dict.modals.terms.h3}</h3>
              <p>{dict.modals.terms.d3}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}