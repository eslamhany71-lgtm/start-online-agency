import Image from "next/image";
import Link from "next/link";

export default function Companies() {
  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[560px] flex flex-col lg:flex-row items-center justify-between gap-12 py-20 lg:py-24">
        {/* Left Content (6 columns equivalent) */}
        <div className="w-full lg:w-[50%] z-10 flex flex-col text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start mb-6">
            <span className="bg-[#E01E2E]/10 text-[#E01E2E] text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1 rounded-full">
              Powered by Start Online Agency
            </span>
          </div>
          <h1 className="text-[48px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-6">
            Our Companies & <br />
            <span className="text-[#E01E2E]">Ventures</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] mb-10 max-w-[500px] mx-auto lg:mx-0">
            We build and operate digital platforms that solve real operational and business challenges. Each venture is designed with our commitment to quality, innovation, and long-term impact.
          </p>
          
          {/* Trust Indicators (Qualitative Stats) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 border-t border-[rgba(17,17,17,0.08)] pt-8">
            {[
              { n: "Scale", t: "Built for Scale" },
              { n: "Innovation", t: "Innovation First" },
              { n: "Impact", t: "Solving Real Problems" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111111] leading-none mb-1">{stat.n}</h4>
                <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.08em]">{stat.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (6 columns equivalent) - STATIC 3D Visual */}
        <div className="w-full lg:w-[50%] flex justify-center items-center w-full relative min-h-[450px] mt-12 lg:mt-0">
          {/* Background Glow */}
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#E01E2E]/5 rounded-full blur-3xl z-0"></div>
          
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center z-10">
            {/* Center Logo & Pedestal (NO ANIMATION) */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-48 h-56 md:w-56 md:h-64 z-20 mb-4">
                <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-xl" priority />
              </div>
              {/* Pedestal Base */}
              <div className="absolute -bottom-2 w-56 h-6 bg-black/5 rounded-[100%] blur-sm z-10"></div>
              <div className="absolute bottom-0 w-48 h-3 border-[3px] border-[#E01E2E]/20 rounded-[100%] z-20"></div>
            </div>

            {/* 4 Corner Icons (STATIC - NO ANIMATION) */}
            <div className="absolute top-12 left-4 w-12 h-12 bg-white rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg>
            </div>
            <div className="absolute bottom-16 left-2 w-12 h-12 bg-white rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <div className="absolute bottom-12 right-6 w-12 h-12 bg-white rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE SYSTEM */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 flex flex-col gap-[32px]">
          
          {/* NIVA DENT - Full Width Card */}
          <div className="group bg-white rounded-[24px] border border-[rgba(17,17,17,0.04)] p-8 lg:p-[64px] flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
            {/* Left Copy (45%) */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div>
                  <h3 className="text-[28px] font-bold text-[#111111] leading-none mb-1">Niva Dent</h3>
                  <p className="text-[#E01E2E] text-[10px] font-bold uppercase tracking-[0.1em]">ERP System for Dental Clinics</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8">
                Advanced ERP system and complete management solution tailored for dental clinics, featuring robust scheduling, patient records, and billing systems.
              </p>
              <ul className="space-y-4 mb-10">
                {['Appointment & Schedule Management', 'Patient Records & Treatment History', 'Billing, Invoicing & Payments', 'Reports & Analytics Dashboard'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#111111] font-medium">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between border-t border-[rgba(17,17,17,0.04)] pt-6">
                <span className="text-green-600 bg-green-50 px-3 py-1 rounded-[6px] text-[11px] font-bold uppercase tracking-wider">Status: Active</span>
                <Link href="#" className="text-[14px] font-bold text-[#111111] group-hover:text-[#E01E2E] flex items-center gap-2 transition-colors">
                  Explore System <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            {/* Right Visual (55%) */}
            <div className="w-full lg:w-[55%] bg-[#F7F7F6] rounded-[16px] border border-[rgba(17,17,17,0.04)] p-4 flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="w-full h-10 bg-white border-b border-[rgba(17,17,17,0.04)] rounded-t-[12px] flex items-center gap-2 px-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white rounded-[12px] shadow-sm border border-[rgba(17,17,17,0.04)] p-6 flex flex-col gap-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-[#F7F7F6] rounded-[8px]"></div>
                  <div className="h-20 bg-[#F7F7F6] rounded-[8px]"></div>
                  <div className="h-20 bg-[#E01E2E]/5 rounded-[8px]"></div>
                </div>
                <div className="flex-1 bg-[#F7F7F6] rounded-[8px] min-h-[160px]"></div>
              </div>
            </div>
          </div>

          {/* SECOND ROW - Two Split Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {/* Start Online Platform */}
            <div className="group bg-white rounded-[24px] border border-[rgba(17,17,17,0.04)] p-8 flex flex-col hover:-translate-y-[4px] hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#111111] mb-1">Start Online Platform</h3>
                  <p className="text-[#E01E2E] text-[10px] font-bold uppercase tracking-[0.1em]">Ecommerce Infrastructure</p>
                </div>
              </div>
              <p className="text-[15px] text-[#666A73] leading-[1.6] mb-8">
                Digital platform designed for scalable ecommerce operations, handling transactions and massive product volume.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {['Product & Inventory Management', 'Secure Transactions', 'Order Management', 'Real-Time Analytics'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-[#111111] font-medium">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Mini visual */}
              <div className="w-full h-32 bg-[#F7F7F6] rounded-[12px] border border-[rgba(17,17,17,0.04)] mb-8 p-3 flex gap-3 group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <div className="w-1/3 h-full bg-white rounded-[6px] shadow-sm"></div>
                <div className="w-2/3 h-full bg-white rounded-[6px] shadow-sm flex flex-col gap-2 p-2">
                   <div className="w-full h-1/2 bg-[#F7F7F6] rounded-[4px]"></div>
                   <div className="w-full h-1/2 bg-[#F7F7F6] rounded-[4px]"></div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-[rgba(17,17,17,0.04)] pt-6">
                <span className="text-green-600 bg-green-50 px-3 py-1 rounded-[6px] text-[11px] font-bold uppercase tracking-wider">Status: Active</span>
                <Link href="#" className="text-[13px] font-bold text-[#111111] group-hover:text-[#E01E2E] flex items-center gap-2 transition-colors">
                  Explore Platform <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Engineer Pro */}
            <div className="group bg-white rounded-[24px] border border-[rgba(17,17,17,0.04)] p-8 flex flex-col hover:-translate-y-[4px] hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#111111] mb-1">Engineer Pro</h3>
                  <p className="text-[#E01E2E] text-[10px] font-bold uppercase tracking-[0.1em]">Development & Workflow Platform</p>
                </div>
              </div>
              <p className="text-[15px] text-[#666A73] leading-[1.6] mb-8">
                High-end corporate development and management solutions platform engineered for internal workflows.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {['Project & Task Management', 'Team Collaboration', 'Workflow Automation', 'Performance Tracking'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] text-[#111111] font-medium">
                    <svg className="w-4 h-4 text-[#666A73] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Mini visual */}
              <div className="w-full h-32 bg-[#F7F7F6] rounded-[12px] border border-[rgba(17,17,17,0.04)] mb-8 p-3 flex flex-col gap-2 group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <div className="w-full h-6 bg-white rounded-[4px] shadow-sm"></div>
                <div className="w-full h-6 bg-white rounded-[4px] shadow-sm"></div>
                <div className="w-3/4 h-6 bg-white rounded-[4px] shadow-sm"></div>
              </div>
              <div className="flex items-center justify-between border-t border-[rgba(17,17,17,0.04)] pt-6">
                <span className="text-amber-600 bg-amber-50 px-3 py-1 rounded-[6px] text-[11px] font-bold uppercase tracking-wider">Status: In Dev</span>
                <Link href="#" className="text-[13px] font-bold text-[#666A73] flex items-center gap-2">
                  Coming Soon
                </Link>
              </div>
            </div>
          </div>

          {/* CAPITAL MIND AI - Full Width Card */}
          <div className="group bg-white rounded-[24px] border border-[rgba(17,17,17,0.04)] p-8 lg:p-[64px] flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 mt-8 hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
            {/* Left Copy (45%) */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                  <h3 className="text-[28px] font-bold text-[#111111] leading-none mb-1">Capital Mind AI</h3>
                  <p className="text-[#E01E2E] text-[10px] font-bold uppercase tracking-[0.1em]">AI-Driven Business Intelligence</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8">
                Advanced AI-driven insights for smarter business decisions. Analyze data, optimize operations, and unlock growth opportunities.
              </p>
              <ul className="space-y-4 mb-10">
                {['AI Analytics & Insights', 'Predictive Modeling', 'Operational Optimization', 'Smart Recommendations'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-[#111111] font-medium">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between border-t border-[rgba(17,17,17,0.04)] pt-6">
                <span className="text-[#E01E2E] bg-red-50 px-3 py-1 rounded-[6px] text-[11px] font-bold uppercase tracking-wider">Status: Beta</span>
                <Link href="#" className="text-[14px] font-bold text-[#111111] group-hover:text-[#E01E2E] flex items-center gap-2 transition-colors">
                  Explore Platform <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            {/* Right Visual (55%) */}
            <div className="w-full lg:w-[55%] bg-[#F7F7F6] rounded-[16px] border border-[rgba(17,17,17,0.04)] p-4 flex flex-col overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="w-full h-10 bg-white border-b border-[rgba(17,17,17,0.04)] rounded-t-[12px] flex items-center gap-2 px-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 bg-white rounded-[12px] shadow-sm border border-[rgba(17,17,17,0.04)] p-6 flex flex-col gap-6">
                <div className="flex gap-4 h-32">
                   <div className="w-1/3 bg-[#F7F7F6] rounded-[8px] flex items-end p-2 gap-1">
                     <div className="w-full bg-red-100 h-1/4 rounded-t-sm"></div><div className="w-full bg-red-200 h-1/2 rounded-t-sm"></div><div className="w-full bg-[#E01E2E]/40 h-3/4 rounded-t-sm"></div>
                   </div>
                   <div className="w-2/3 bg-[#F7F7F6] rounded-[8px]"></div>
                </div>
                <div className="flex-1 bg-[#F7F7F6] rounded-[8px] min-h-[80px]"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION - SECTORS */}
      <section className="w-full bg-white py-[96px] lg:py-[120px] border-t border-[rgba(17,17,17,0.04)]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 text-center">
          <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Innovation Across Sectors</p>
          <h2 className="text-[32px] md:text-[38px] font-bold leading-tight mb-16">Products Built for Real Problems</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-[24px]">
            {[
              { t: "Healthcare & Dental", i: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { t: "Ecommerce & Retail", i: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
              { t: "Engineering & Operations", i: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
              { t: "AI & Intelligence", i: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { t: "Finance & Analytics", i: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { t: "Productivity", i: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-6 border border-[rgba(17,17,17,0.04)] rounded-[16px] hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
                <svg className="w-8 h-8 text-[#E01E2E] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.i} /></svg>
                <span className="text-[12px] font-bold text-[#111111] leading-tight max-w-[100px] mx-auto">{item.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#FCFBFA] pb-[120px] px-6 md:px-8 lg:px-20 pt-10">
        <div className="w-full max-w-[1280px] mx-auto bg-[#E01E2E] min-h-[220px] rounded-[24px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-8">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-4">
              Let’s Build the Next Big Thing Together.
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              Have an idea or need a custom digital solution?
            </p>
          </div>
          
          <div className="relative z-10">
            <Link 
              href="/contact" 
              className="bg-white text-[#E01E2E] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:bg-[#F7F7F6] hover:-translate-y-[2px] transition-all duration-200 shadow-xl"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}