import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[680px] flex flex-col lg:flex-row items-center justify-between gap-6 py-20 lg:py-24">
        {/* Left Content (52%) */}
        <div className="w-full lg:w-[52%] z-10 flex flex-col text-center lg:text-left">
          <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.12em] mb-6">
            Technology • Marketing • Growth
          </p>
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-8">
            We Build, Market & Scale <span className="text-[#E01E2E]">Digital Businesses.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] mb-10 max-w-[580px] mx-auto lg:mx-0">
            Technology, marketing, content, websites, ecommerce, custom systems, and AI. Everything modern businesses need to grow, compete, and lead in a digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/companies" 
              className="bg-[#E01E2E] text-white h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:-translate-y-[2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200"
            >
              Explore Our Companies
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border border-[rgba(17,17,17,0.08)] text-[#111111] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:-translate-y-[2px] hover:shadow-sm transition-all duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Right Content (48%) - 3D Visual */}
        <div className="w-full lg:w-[48%] relative flex justify-center items-center mt-16 lg:mt-0 min-h-[500px]">
          {/* Orbital Lines & Glow */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#E01E2E]/5 rounded-full blur-3xl absolute"></div>
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-[rgba(17,17,17,0.03)] absolute animate-[spin_20s_linear_infinite]"></div>
            <div className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-[rgba(17,17,17,0.02)] border-dashed absolute animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 animate-[bounce_6s_infinite]">
            <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
          </div>

          {/* Floating Cards */}
          <div className="absolute top-[10%] left-[5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Technology</span>
          </div>
          <div className="absolute top-[20%] right-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Marketing</span>
          </div>
          <div className="absolute bottom-[20%] left-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Content</span>
          </div>
          <div className="absolute bottom-[10%] right-[5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Growth</span>
          </div>
        </div>
      </section>

      {/* SECTION - WHAT WE DO */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center lg:text-left">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">What We Do</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight">End-to-End Digital Solutions <br className="hidden md:block" /> for Every Stage of Growth.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {[
              { t: "Digital Marketing", d: "Performance marketing, SEO, social, and growth strategies that deliver measurable results.", i: "M13 10V3L4 14h7v7l9-11h-7z" },
              { t: "Content Production", d: "High-impact content, video, reels, podcasts, and brand storytelling that connects.", i: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
              { t: "Websites", d: "Modern, fast, and secure websites built for performance and great user experience.", i: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { t: "Ecommerce", d: "Scalable online stores with seamless UX and conversion-focused experiences.", i: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
              { t: "Custom Systems", d: "Tailored software, portals, and automation systems that streamline operations.", i: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { t: "AI Video", d: "AI-powered video production, avatars, and automation for modern storytelling.", i: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-[20px] p-8 border border-[rgba(17,17,17,0.04)] min-h-[220px] flex flex-col justify-between hover:-translate-y-[5px] hover:shadow-[0_8px_30px_rgba(224,30,46,0.04)] hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] flex items-center justify-center mb-6 group-hover:bg-[#E01E2E]/5 transition-colors">
                    <svg className="w-5 h-5 text-[#111111] group-hover:text-[#E01E2E] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.i} /></svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#111111] mb-3">{item.t}</h3>
                  <p className="text-[16px] text-[#666A73] leading-[1.6]">{item.d}</p>
                </div>
                <div className="mt-6">
                  <Link href="/services" className="text-[13px] font-bold text-[#111111] group-hover:text-[#E01E2E] flex items-center gap-2 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION - PRODUCTS & VENTURES */}
      <section className="w-full bg-[#FCFBFA] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center lg:text-left">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Our Products & Ventures</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight">Platforms. Systems. Impact.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { t: "Niva Dent", d: "Advanced ERP system and complete management solution for dental clinics.", s: "Active", sc: "text-green-600 bg-green-50" },
              { t: "Start Online Platform", d: "A scalable e-commerce infrastructure designed for massive digital growth.", s: "Active", sc: "text-green-600 bg-green-50" },
              { t: "Engineer Pro", d: "High-end corporate development and management solutions platform.", s: "In Development", sc: "text-amber-600 bg-amber-50" },
              { t: "Capital Mind AI", d: "AI-driven insights for smarter business decisions and operations.", s: "Beta", sc: "text-[#E01E2E] bg-red-50" }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-[20px] p-8 border border-[rgba(17,17,17,0.08)] flex flex-col hover:-translate-y-[4px] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-[12px] bg-[#111111] flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">{item.t.charAt(0)}</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#111111] mb-3">{item.t}</h3>
                <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8 flex-1">{item.d}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[rgba(17,17,17,0.04)]">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-[6px] ${item.sc}`}>{item.s}</span>
                  <Link href="/companies" className="text-[#111111] hover:text-[#E01E2E] transition-colors group-hover:translate-x-1 duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION - SOA STUDIO */}
      <section className="w-full bg-[#111111] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center lg:text-left">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">SOA Studio</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight text-white">Stories That Build Brands.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { t: "Reels & Short Films", d: "Scroll-stopping content for social." },
              { t: "Podcasts", d: "Thought leadership conversations." },
              { t: "Commercial Production", d: "High-quality commercials." },
              { t: "AI Production", d: "AI avatars and automated video." }
            ].map((item, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#1A1A1A] cursor-pointer">
                {/* Simulated Image Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#111111] group-hover:scale-[1.04] transition-transform duration-700 ease-out"></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-[18px] font-bold mb-1">{item.t}</h3>
                    <p className="text-gray-400 text-[13px]">{item.d}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white/50 group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION - WHY START ONLINE */}
      <section className="w-full bg-[#FCFBFA] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 text-center">
          <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Why Start Online</p>
          <h2 className="text-[38px] md:text-[46px] font-bold leading-tight mb-16">Your Growth. Our Mission.</h2>
          
          <div className="flex flex-wrap justify-center gap-[24px]">
            {['End-to-End Solutions', 'Creative Production', 'Technology + Marketing', 'Custom Systems', 'Growth Focused'].map((item, i) => (
              <div key={i} className="bg-white rounded-[16px] px-8 py-6 border border-[rgba(17,17,17,0.08)] flex-1 min-w-[200px] shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-[16px] font-bold text-[#111111]">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#FCFBFA] pb-[120px] px-6 md:px-8 lg:px-20">
        <div className="w-full max-w-[1280px] mx-auto bg-[#E01E2E] min-h-[220px] rounded-[24px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-8">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-4">
              Ready to Build, Market & Scale Your Business?
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              Let's create something extraordinary together.
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