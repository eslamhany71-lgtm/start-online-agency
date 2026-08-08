import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] flex flex-col items-center justify-start relative overflow-hidden pt-24 pb-12">
      
      {/* 1. تأثيرات الخلفية */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-gradient-to-tl from-red-100/80 via-red-50/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -left-[15%] w-[600px] h-[600px] bg-gradient-to-br from-red-50/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[5%] w-48 h-48 bg-[radial-gradient(#FCA5A5_2px,transparent_2px)] [background-size:20px_20px] opacity-40"></div>
        <div className="absolute top-[30%] right-[5%] w-48 h-48 bg-[radial-gradient(#FCA5A5_2px,transparent_2px)] [background-size:20px_20px] opacity-40"></div>
      </div>

      {/* ================= القسم الأول: Hero Section ================= */}
      <div className="z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full mt-8">
        
        <div className="mb-8 flex flex-col items-center">
          <div className="relative w-36 h-40 md:w-44 md:h-48 mb-4">
            <Image
              src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
              alt="Start Online Agency Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-[0.25em] text-[#1A1A1A]">
            START <span className="text-[#E01E2E]">ONLINE</span>
          </h2>
          <p className="text-gray-500 tracking-[0.4em] text-[11px] font-semibold mt-2">
            A G E N C Y
          </p>
        </div>

        <h1 className="text-4xl md:text-[56px] lg:text-[64px] font-extrabold mb-6 tracking-tight text-[#1A1A1A] leading-[1.1]">
          Building Businesses, <span className="text-[#E01E2E]">Software</span> <br className="hidden md:block" /> & Digital Growth
        </h1>

        <p className="max-w-2xl text-gray-500 text-lg md:text-xl mb-10 leading-relaxed font-medium">
          Start Online Agency is a technology-driven holding company creating software products, business ventures, and digital growth solutions.
        </p>

        {/* الأزرار بعد التعديل وربطها باللينكات */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href="/companies">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#E01E2E] text-white font-bold rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-[0_8px_20px_rgba(224,30,46,0.25)] w-full sm:w-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              Explore Our Companies
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </Link>
          
          <Link href="/contact">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-[#1A1A1A] font-bold rounded-xl hover:border-gray-300 hover:shadow-md active:scale-95 transition-all duration-300 shadow-sm w-full sm:w-auto">
              <svg className="w-5 h-5 text-[#E01E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Schedule Consultation
            </button>
          </Link>
        </div>
      </div>

      {/* ================= القسم الثاني: شبكة الشركات والخدمات (Bento Grid) ================= */}
      <div className="z-10 w-full max-w-6xl mx-auto px-4 mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* الكارت الأول: Digital Division */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col h-full">
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-5 h-5 text-[#E01E2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </div>
            <h3 className="text-gray-500 font-semibold text-sm mb-4 border-b border-gray-100 pb-2">Digital Division</h3>
            <h4 className="text-[#E01E2E] font-bold text-lg mb-4">Digital Marketing</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#E01E2E]"></span> Digital Strategy</li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#E01E2E]"></span> Performance Marketing</li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#E01E2E]"></span> Digital Engines</li>
              <li className="flex items-center gap-3 text-sm text-gray-700 font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#E01E2E]"></span> Digital Training</li>
            </ul>
            
            {/* اللمسة الجديدة لملء الفراغ */}
            <div className="mt-auto pt-6 border-t border-gray-50">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#E01E2E] hover:text-red-800 transition-colors group/link">
                Explore Services <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* الكارت الثاني: Our Products */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2">
            <h3 className="text-gray-500 font-semibold text-sm mb-6 border-b border-gray-100 pb-2">Our Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Niva Dent */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E01E2E] flex-shrink-0 group-hover:bg-[#E01E2E] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Niva Dent</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Advanced ERP system and complete management solution for dental clinics.</p>
                </div>
              </div>

              {/* Start Online Platform */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E01E2E] flex-shrink-0 group-hover:bg-[#E01E2E] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Start Online Platform</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Comprehensive digital platform for scaling e-commerce businesses.</p>
                </div>
              </div>

               {/* Engineer Pro */}
               <div className="flex gap-4 items-start group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E01E2E] flex-shrink-0 group-hover:bg-[#E01E2E] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Engineer Pro</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">Corporate development and management solutions platform.</p>
                </div>
              </div>
              
              {/* Capital Mind AI */}
               <div className="flex gap-4 items-start group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E01E2E] flex-shrink-0 group-hover:bg-[#E01E2E] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Capital Mind AI</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">AI-driven insights for smarter business completion.</p>
                </div>
              </div>

            </div>
            {/* الكارت الثالث: SOA Studio */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 md:col-span-2 relative overflow-hidden group cursor-pointer mt-6">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-2">
              <h3 className="text-gray-500 font-semibold text-sm">SOA Studio</h3>
              <span className="text-[#E01E2E] opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {/* 6 مربعات كـ Placeholder لصور الاستوديو */}
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 hover:bg-black/20 transition-all z-10 cursor-pointer"></div>
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black"></div>
              </div>
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 hover:bg-black/20 transition-all z-10 cursor-pointer"></div>
                <div className="w-full h-full bg-gradient-to-br from-red-900 to-black"></div>
              </div>
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 hover:bg-black/20 transition-all z-10 cursor-pointer"></div>
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800"></div>
              </div>
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 hover:bg-black/20 transition-all z-10 cursor-pointer"></div>
                <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-red-950"></div>
              </div>
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 hover:bg-black/20 transition-all z-10 cursor-pointer"></div>
                <div className="w-full h-full bg-gradient-to-br from-black to-gray-900"></div>
              </div>
              <div className="h-24 md:h-32 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 hover:bg-black/20 transition-all z-10 cursor-pointer"></div>
                <div className="w-full h-full bg-gradient-to-br from-red-800 to-black"></div>
              </div>
            </div>
          </div>

          </div>

          {/* الكارت الرابع: Technology */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
            <h3 className="text-gray-500 font-semibold text-sm mb-6 border-b border-gray-100 pb-2">Technology</h3>
            <div className="flex flex-wrap items-center justify-center gap-6 flex-grow py-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-2xl font-extrabold text-gray-800 tracking-tighter hover:text-black cursor-pointer">Apple</span>
               <span className="text-2xl font-extrabold text-blue-900 tracking-wider hover:text-blue-700 cursor-pointer italic">VISA</span>
               <span className="text-xl font-bold text-gray-600 hover:text-black cursor-pointer">Microsoft</span>
               <span className="text-xl font-bold text-gray-700 hover:text-black cursor-pointer">OpenAI</span>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}