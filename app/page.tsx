import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] flex flex-col items-center justify-start overflow-hidden pt-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
            We Build, Market & <br />
            Scale <span className="text-[#E01E2E]">Digital Businesses.</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl font-medium leading-relaxed">
            Technology, marketing, content, websites, ecommerce, custom systems. All built—everything modern businesses need to grow, compete, and lead in a digital world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/companies" 
              className="bg-[#E01E2E] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-red-700 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
            >
              Explore Our Companies →
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-[#1A1A1A] border border-gray-200 px-8 py-3.5 rounded-xl font-bold hover:border-gray-300 hover:shadow-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Consultation
            </Link>
          </div>
        </div>
        
        {/* Right Graphic */}
        <div className="flex-1 flex justify-center items-center relative w-full mt-10 lg:mt-0 min-h-[400px]">
          <div className="absolute w-[350px] h-[350px] bg-red-50 rounded-full blur-3xl opacity-80 -z-10"></div>
          
          <div className="relative flex justify-center items-center">
            <div className="text-[180px] font-black text-[#E01E2E] italic leading-none drop-shadow-2xl z-10">S</div>
            <div className="absolute -bottom-6 w-48 h-6 bg-black/10 rounded-[100%] blur-md"></div>
            <div className="absolute -bottom-2 w-40 h-3 border-2 border-[#E01E2E]/20 rounded-[100%]"></div>
            
            {/* Floating Cards */}
            <div className="absolute -top-10 -left-16 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-28 animate-[bounce_4s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Technology</span>
              <span className="text-[8px] text-gray-400">Build robust solutions</span>
            </div>
            <div className="absolute -top-4 -right-16 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-28 animate-[bounce_5s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Marketing</span>
              <span className="text-[8px] text-gray-400">Data-driven strategies</span>
            </div>
            <div className="absolute -bottom-8 -left-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-28 animate-[bounce_4.5s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Content</span>
              <span className="text-[8px] text-gray-400">Engaging content</span>
            </div>
            <div className="absolute -bottom-2 -right-20 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-28 animate-[bounce_5.5s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Growth</span>
              <span className="text-[8px] text-gray-400">Sustainable scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="w-full max-w-7xl mx-auto px-4 mt-8 mb-20">
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 items-center">
          {[
            { n: "10+", t: "Years of Excellence", i: "🎯" },
            { n: "50+", t: "Enterprise Clients", i: "🏢" },
            { n: "25+", t: "Products & Systems", i: "⚙️" },
            { n: "100+", t: "Projects Delivered", i: "🚀" }
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-2xl text-[#E01E2E] bg-red-50 p-2 rounded-lg">{s.i}</span>
              <div>
                <h4 className="text-2xl font-black text-gray-900 leading-none">{s.n}</h4>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">{s.t}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Solutions */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">End-to-End Digital Solutions <br /> for Every Stage of Growth.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { t: "Digital Marketing", d: "Performance marketing, SEO, social, and growth strategies that deliver measurable results.", i: "🎯" },
            { t: "Content Production", d: "High-impact content, video, reels, podcasts, and brand storytelling that connects.", i: "🎬" },
            { t: "Websites", d: "Modern, fast, and secure websites built for performance and great user experience.", i: "💻" },
            { t: "Ecommerce", d: "Scalable online stores with seamless UX and conversion-focused experiences.", i: "🛒" },
            { t: "Custom Systems", d: "Tailored software, portals, and automation systems that streamline operations.", i: "⚙️" },
            { t: "AI Video", d: "AI-powered video production, avatars, and automation for modern storytelling.", i: "🤖" }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-red-100 transition-all">
              <div className="w-12 h-12 bg-red-50 text-[#E01E2E] rounded-full flex items-center justify-center text-xl mb-4">{item.i}</div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{item.t}</h3>
              <p className="text-[11px] text-gray-500 font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Platforms & Systems */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-2">Our Products & Ventures</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">Platforms. Systems. Impact.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
             <div className="text-[#E01E2E] mb-4"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
             <h3 className="font-bold text-gray-900 mb-2">Niva Dent</h3>
             <p className="text-xs text-gray-500 mb-6 leading-relaxed">Advanced ERP system and complete management solution for dental clinics. Built on a solid MySQL architecture.</p>
             <div className="flex justify-between items-center text-[10px] font-bold">
               <span className="text-green-500">Status: Active</span>
               <Link href="/companies" className="text-[#E01E2E] hover:text-red-800">Explore System →</Link>
             </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
             <div className="text-[#E01E2E] mb-4"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></div>
             <h3 className="font-bold text-gray-900 mb-2">Start Online Platform</h3>
             <p className="text-xs text-gray-500 mb-6 leading-relaxed">A scalable e-commerce infrastructure designed for massive digital growth. Built with Firebase and MySQL for performance at scale.</p>
             <div className="flex justify-between items-center text-[10px] font-bold">
               <span className="text-green-500">Status: Active</span>
               <Link href="/companies" className="text-[#E01E2E] hover:text-red-800">Explore Platform →</Link>
             </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
             <div className="text-[#E01E2E] mb-4"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg></div>
             <h3 className="font-bold text-gray-900 mb-2">Engineer Pro</h3>
             <p className="text-xs text-gray-500 mb-6 leading-relaxed">High-end corporate development and management solutions platform for internal engineering and workflows.</p>
             <div className="flex justify-between items-center text-[10px] font-bold">
               <span className="text-yellow-500">Status: In Development</span>
               <Link href="/companies" className="text-gray-400 hover:text-gray-600">Coming Soon</Link>
             </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
             <div className="text-[#E01E2E] mb-4"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div>
             <h3 className="font-bold text-gray-900 mb-2">Capital Mind AI</h3>
             <p className="text-xs text-gray-500 mb-6 leading-relaxed">AI-driven insights for smarter business decisions. Analyze data, optimize operations, and unlock growth opportunities.</p>
             <div className="flex justify-between items-center text-[10px] font-bold">
               <span className="text-blue-500">Status: Beta</span>
               <Link href="/companies" className="text-[#E01E2E] hover:text-red-800">Explore Platform →</Link>
             </div>
          </div>
        </div>
      </section>

      {/* 5. SOA Studio */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-2">SOA Studio</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">Stories That Build Brands.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Placeholders for video thumbnails */}
          {[
            { t: "Reels & Short Films", d: "Scroll-stopping content for social." },
            { t: "Podcasts", d: "Thought leadership conversations." },
            { t: "Commercial Production", d: "High-quality commercials." },
            { t: "AI Production", d: "AI avatars and automated video." }
          ].map((item, i) => (
            <div key={i} className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gray-900 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute bottom-4 left-4 z-20">
                <h4 className="text-white font-bold text-sm">{item.t}</h4>
                <p className="text-gray-300 text-[10px]">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Mission */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center mb-12">
          <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-2">Why Start Online</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">Your Growth. Our Mission.</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 lg:flex-nowrap">
          {[
            { t: "End-to-End Solutions", d: "Everything you need—from strategy to execution—under one roof.", i: "🔗" },
            { t: "Creative Production", d: "Content and video that captures attention and drives engagement.", i: "🎨" },
            { t: "Technology + Marketing", d: "The perfect blend of powerful technology and data-driven marketing.", i: "⚙️" },
            { t: "Custom Systems", d: "Scalable, secure, and tailored systems designed around your business.", i: "💻" },
            { t: "Growth Focused", d: "We build with one goal: accelerate your growth and maximize ROI.", i: "📈" }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex-1 min-w-[200px] text-center shadow-sm">
              <div className="text-2xl mb-3">{item.i}</div>
              <h4 className="text-xs font-bold text-gray-900 mb-2">{item.t}</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}