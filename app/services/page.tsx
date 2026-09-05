import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[680px] flex flex-col lg:flex-row items-center justify-between gap-12 py-20 lg:py-24">
        {/* Left Content */}
        <div className="w-full lg:w-[50%] z-10 flex flex-col text-center lg:text-left">
          <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.12em] mb-6">
            Our Services
          </p>
          <h1 className="text-[48px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8">
            Everything Your Business Needs to <span className="text-[#E01E2E]">Grow Digital.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] mb-10 max-w-[540px] mx-auto lg:mx-0">
            START ONLINE combines marketing, content, websites, ecommerce, custom software, AI and automation to build complete digital ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Link 
              href="/contact" 
              className="bg-[#E01E2E] text-white h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:-translate-y-[2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="#categories" 
              className="bg-transparent border border-[rgba(17,17,17,0.08)] text-[#111111] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:-translate-y-[2px] hover:shadow-sm transition-all duration-200"
            >
              Explore All Services
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 border-t border-[rgba(17,17,17,0.08)] pt-8">
            {['End-to-End Digital Partner', 'ROI-Focused Solutions', 'Scalable & Secure', 'Transparent & Agile'].map((indicator, i) => (
              <div key={i} className="flex items-center gap-2 text-[13px] font-bold text-[#111111]">
                <svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                {indicator}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - 3D Visual with Strategic Cards */}
        <div className="w-full lg:w-[50%] relative flex justify-center items-center mt-16 lg:mt-0 min-h-[500px]">
          {/* Orbital Lines & Glow */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] bg-[#E01E2E]/5 rounded-full blur-3xl absolute"></div>
            <div className="w-[280px] h-[280px] rounded-full border border-[rgba(17,17,17,0.03)] absolute animate-[spin_20s_linear_infinite]"></div>
            <div className="w-[380px] h-[380px] rounded-full border border-[rgba(17,17,17,0.02)] border-dashed absolute animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>

          {/* Core S Logo */}
          <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 animate-[bounce_6s_infinite]">
            <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
          </div>

          {/* Floating Capability Cards */}
          <div className="absolute top-[5%] left-[5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex flex-col items-center gap-1 animate-[bounce_4s_infinite]">
            <span className="text-[12px] font-bold text-[#111111]">Strategy First</span>
            <span className="text-[9px] text-[#666A73]">Data-driven alignment</span>
          </div>
          <div className="absolute top-[15%] right-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex flex-col items-center gap-1 animate-[bounce_5s_infinite]">
            <span className="text-[12px] font-bold text-[#111111]">Future Ready</span>
            <span className="text-[9px] text-[#666A73]">Scalable architecture</span>
          </div>
          <div className="absolute bottom-[20%] left-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex flex-col items-center gap-1 animate-[bounce_4.5s_infinite]">
            <span className="text-[12px] font-bold text-[#111111]">Full-Funnel Focus</span>
            <span className="text-[9px] text-[#666A73]">Awareness to retention</span>
          </div>
          <div className="absolute bottom-[5%] right-[5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex flex-col items-center gap-1 animate-[bounce_5.5s_infinite]">
            <span className="text-[12px] font-bold text-[#111111]">Performance Obsessed</span>
            <span className="text-[9px] text-[#666A73]">Relentless optimization</span>
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section id="categories" className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Our Service Categories</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight">Complete Solutions. Real Results.</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            
            {/* 01 - Marketing & Growth */}
            <div className="group bg-white rounded-[20px] border border-[rgba(17,17,17,0.04)] p-[36px] md:p-[44px] min-h-[300px] flex flex-col hover:-translate-y-[4px] hover:shadow-lg hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#111111] mb-1">Marketing & Growth</h3>
                </div>
              </div>
              <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8">
                Data-driven marketing strategies that attract, engage, and convert your ideal audience at scale.
              </p>
              <div className="flex flex-col md:flex-row gap-8 mt-auto">
                <ul className="space-y-3 flex-1">
                  {['Performance Marketing', 'Paid Advertising', 'Social Media Management', 'Content Strategy', 'SEO', 'Analytics & CRO'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-[#111111] font-medium">
                      <svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 bg-[#F7F7F6] rounded-[16px] border border-[rgba(17,17,17,0.04)] p-4 flex items-end justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-red-50 to-transparent opacity-50"></div>
                  <svg className="w-full h-24 text-[#E01E2E]/20" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0 40 Q 10 20 25 30 T 50 15 T 75 25 T 100 0 L 100 40 Z" fill="currentColor" />
                    <path d="M0 40 Q 10 20 25 30 T 50 15 T 75 25 T 100 0" fill="none" stroke="#E01E2E" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 02 - Content & Production */}
            <div className="group bg-white rounded-[20px] border border-[rgba(17,17,17,0.04)] p-[36px] md:p-[44px] min-h-[300px] flex flex-col hover:-translate-y-[4px] hover:shadow-lg hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#111111] mb-1">Content & Production</h3>
                </div>
              </div>
              <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8">
                High-impact visual content and brand storytelling designed to build trust and drive action.
              </p>
              <div className="flex flex-col md:flex-row gap-8 mt-auto">
                <ul className="space-y-3 flex-1">
                  {['Professional Reels', 'Commercial Videos', 'Podcast Production', 'Photography', 'Video Editing', 'AI Video Production'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-[#111111] font-medium">
                      <svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 bg-[#F7F7F6] rounded-[16px] border border-[rgba(17,17,17,0.04)] p-4 flex items-center justify-center relative overflow-hidden">
                  <div className="w-16 h-12 bg-white rounded-[8px] border border-[rgba(17,17,17,0.08)] shadow-sm flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full border-2 border-[#E01E2E]/40 flex items-center justify-center"><div className="w-3 h-3 rounded-full bg-[#E01E2E]"></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 - Websites & Ecommerce */}
            <div className="group bg-white rounded-[20px] border border-[rgba(17,17,17,0.04)] p-[36px] md:p-[44px] min-h-[300px] flex flex-col hover:-translate-y-[4px] hover:shadow-lg hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#111111] mb-1">Websites & Ecommerce</h3>
                </div>
              </div>
              <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8">
                Conversion-focused corporate websites and scalable online stores that deliver seamless user experiences.
              </p>
              <div className="flex flex-col md:flex-row gap-8 mt-auto">
                <ul className="space-y-3 flex-1">
                  {['Corporate Websites', 'Landing Pages', 'Online Stores', 'Custom Ecommerce', 'UX/UI Design', 'Conversion Optimization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-[#111111] font-medium">
                      <svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 bg-[#F7F7F6] rounded-[16px] border border-[rgba(17,17,17,0.04)] p-4 flex items-center justify-center relative overflow-hidden">
                  <div className="w-24 h-16 bg-white rounded-t-[8px] border-x border-t border-[rgba(17,17,17,0.08)] shadow-sm flex flex-col mt-4">
                     <div className="w-full h-3 border-b border-[rgba(17,17,17,0.04)] flex items-center px-1 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div></div>
                     <div className="flex-1 bg-gray-50/50 flex flex-col p-2 gap-1"><div className="w-full h-2 bg-gray-200 rounded-sm"></div><div className="w-2/3 h-2 bg-gray-200 rounded-sm"></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 04 - Software & Systems */}
            <div className="group bg-white rounded-[20px] border border-[rgba(17,17,17,0.04)] p-[36px] md:p-[44px] min-h-[300px] flex flex-col hover:-translate-y-[4px] hover:shadow-lg hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-[#111111] mb-1">Software & Systems</h3>
                </div>
              </div>
              <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8">
                Powerful web and mobile applications engineered for performance, security, and enterprise-level scale.
              </p>
              <div className="flex flex-col md:flex-row gap-8 mt-auto">
                <ul className="space-y-3 flex-1">
                  {['Custom Software', 'Business Management Systems', 'ERP', 'CRM', 'Dashboards', 'SaaS Platforms', 'APIs & Integrations'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-[#111111] font-medium">
                      <svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 bg-[#F7F7F6] rounded-[16px] border border-[rgba(17,17,17,0.04)] p-4 flex items-center justify-center relative overflow-hidden">
                  <div className="w-24 h-24 bg-white rounded-[12px] border border-[rgba(17,17,17,0.08)] shadow-sm flex flex-col p-2 gap-2">
                     <div className="w-full h-1/3 bg-[#E01E2E]/10 rounded-[4px]"></div>
                     <div className="flex gap-2 h-2/3"><div className="w-1/2 bg-gray-100 rounded-[4px]"></div><div className="w-1/2 bg-gray-100 rounded-[4px]"></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 05 - Automation & AI (Full Width) */}
            <div className="group bg-white rounded-[20px] border border-[rgba(17,17,17,0.04)] p-[36px] md:p-[44px] min-h-[300px] flex flex-col lg:col-span-2 hover:-translate-y-[4px] hover:shadow-lg hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </div>
                    <div>
                      <h3 className="text-[24px] font-bold text-[#111111] mb-1">Automation & AI</h3>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8">
                    Intelligent automation and AI-powered solutions that streamline operations, eliminate repetitive tasks, and unlock exponential growth.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-auto">
                    {['Workflow Automation', 'AI Integrations', 'Business Automation', 'System Integration', 'Business Intelligence'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[14px] text-[#111111] font-medium">
                        <svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1 bg-[#F7F7F6] rounded-[16px] border border-[rgba(17,17,17,0.04)] p-6 flex items-center justify-center relative overflow-hidden min-h-[200px]">
                   <div className="relative w-48 h-48 flex items-center justify-center">
                     <div className="absolute inset-0 border border-dashed border-[#E01E2E]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                     <div className="absolute w-32 h-32 border border-[#E01E2E]/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                     <div className="w-16 h-16 bg-white rounded-[12px] shadow-sm border border-[rgba(17,17,17,0.08)] flex items-center justify-center z-10 text-[#E01E2E]">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                     </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="w-full bg-white py-[96px] lg:py-[120px] border-t border-[rgba(17,17,17,0.04)]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 text-center">
          <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Our Process</p>
          <h2 className="text-[38px] md:text-[46px] font-bold leading-tight mb-20">A Proven Process. Predictable Results.</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            {/* Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[rgba(17,17,17,0.04)] z-0"></div>
            
            {[
              { n: "01", t: "Discover", i: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { n: "02", t: "Strategize", i: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { n: "03", t: "Build", i: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { n: "04", t: "Launch", i: "M13 10V3L4 14h7v7l9-11h-7z" },
              { n: "05", t: "Optimize", i: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" }
            ].map((step, i) => (
              <div key={i} className="group relative z-10 flex flex-col items-center flex-1">
                <div className="w-14 h-14 bg-white border-2 border-[rgba(17,17,17,0.08)] rounded-full flex items-center justify-center mb-6 group-hover:border-[#E01E2E] transition-colors duration-300">
                  <svg className="w-6 h-6 text-[#111111] group-hover:text-[#E01E2E] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.i} /></svg>
                </div>
                <span className="text-[#E01E2E] text-[12px] font-bold mb-2">{step.n}</span>
                <h3 className="text-[18px] font-bold text-[#111111]">{step.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="w-full aspect-[4/3] bg-[#FCFBFA] rounded-[24px] border border-[rgba(17,17,17,0.08)] relative overflow-hidden flex items-center justify-center shadow-sm">
               <div className="absolute inset-0 bg-gradient-to-br from-[rgba(17,17,17,0.02)] to-[rgba(17,17,17,0.08)]"></div>
               <svg className="w-16 h-16 text-[rgba(17,17,17,0.2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] md:text-[40px] font-bold leading-tight mb-10">Collaborative. Transparent. Results-Driven.</h2>
            <ul className="space-y-6">
              {[
                { t: "Clear Communication", d: "No jargon. Direct lines to the experts handling your project." },
                { t: "Agile Execution", d: "Iterative sprints allowing us to pivot quickly and deliver faster." },
                { t: "Data Transparency", d: "Real-time access to metrics that matter for your business." },
                { t: "Long-Term Partnership", d: "We invest in relationships, acting as an extension of your team." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white border border-[rgba(17,17,17,0.08)] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[18px] font-bold text-[#111111] mb-1">{item.t}</h4>
                    <p className="text-[15px] text-[#666A73]">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#FCFBFA] pb-[120px] px-6 md:px-8 lg:px-20 pt-10">
        <div className="w-full max-w-[1280px] mx-auto bg-[#E01E2E] min-h-[220px] rounded-[24px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-8">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-4">
              Ready to Build, Market & Scale Your Business?
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              Take the first step toward building your digital future today.
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