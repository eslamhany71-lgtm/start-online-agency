import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start overflow-hidden pt-28 pb-20">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 py-8">
        <div className="flex-1 text-center lg:text-left z-10 w-full">
          <h1 className="text-5xl lg:text-[64px] font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
            Behind <span className="text-[#E01E2E]">Start Online</span>
          </h1>
          <p className="text-[17px] text-gray-500 mb-12 max-w-[540px] font-medium leading-relaxed">
            We are more than just an agency. We are a technology-driven holding group architecting the digital future of businesses.
          </p>
          
          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 border-t border-gray-100 pt-8">
            {[
              { n: "10+", t: "Years of Excellence", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
              { n: "50+", t: "Enterprise Clients", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> },
              { n: "100+", t: "Experts & Strategists", icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-[#E01E2E]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">{stat.icon}</svg>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 leading-none">{stat.n}</h4>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Graphic */}
        <div className="flex-1 flex justify-center items-center relative w-full mt-16 lg:mt-0 min-h-[400px]">
          <div className="absolute w-[400px] h-[400px] bg-red-50/80 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative flex justify-center items-center flex-col">
            <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 mb-6">
              <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
            </div>
            
            <div className="absolute -bottom-2 w-56 h-8 bg-black/5 rounded-[100%] blur-md"></div>
            <div className="absolute bottom-2 w-48 h-4 border-[3px] border-[#E01E2E]/30 rounded-[100%]"></div>
            
            {/* Floating Cards mapped exactly to the About image */}
            <div className="absolute -top-10 -left-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-32 animate-[bounce_4s_infinite]">
              <span className="text-[#E01E2E] mb-2 bg-red-50 w-8 h-8 rounded flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></span>
              <span className="text-[11px] font-bold text-gray-900 mb-1">Engineering</span>
              <span className="text-[9px] text-gray-400 leading-tight">Building robust and scalable solutions.</span>
            </div>
            <div className="absolute -top-2 -right-16 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-32 animate-[bounce_5s_infinite]">
              <span className="text-[#E01E2E] mb-2 bg-red-50 w-8 h-8 rounded flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg></span>
              <span className="text-[11px] font-bold text-gray-900 mb-1">Marketing</span>
              <span className="text-[9px] text-gray-400 leading-tight">Driving growth strategies that deliver results.</span>
            </div>
            <div className="absolute bottom-8 -left-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-32 animate-[bounce_4.5s_infinite]">
              <span className="text-[#E01E2E] mb-2 bg-red-50 w-8 h-8 rounded flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></span>
              <span className="text-[11px] font-bold text-gray-900 mb-1">Content</span>
              <span className="text-[9px] text-gray-400 leading-tight">Engaging content that connects and converts.</span>
            </div>
            <div className="absolute -bottom-6 -right-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center w-32 animate-[bounce_5.5s_infinite]">
              <span className="text-[#E01E2E] mb-2 bg-red-50 w-8 h-8 rounded flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></span>
              <span className="text-[11px] font-bold text-gray-900 mb-1">Growth</span>
              <span className="text-[9px] text-gray-400 leading-tight">Sustainable growth through data and innovation.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Story & Vision */}
      <section className="w-full bg-white py-24 border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-4">Our Story & Vision</p>
            <h2 className="text-[32px] md:text-[40px] font-black text-[#1A1A1A] leading-[1.2] mb-8">
              A Purpose-Built Journey <br className="hidden md:block" /> for Digital Impact
            </h2>
            <div className="space-y-5 text-gray-500 text-[15px] font-medium leading-[1.8] mb-10 max-w-xl">
              <p>Start Online Agency was founded with a singular mission: to bridge the gap between complex software engineering and tangible business growth.</p>
              <p>We recognized that modern businesses don't just need a website; they need robust digital infrastructure. That's why we evolved into a holding group that builds complete ecosystems—from advanced ERP systems for specialized sectors to scalable e-commerce platforms capable of handling massive transactional volume.</p>
              <p>Our team consists of top-tier developers, system architects, and growth strategists who treat every line of code as an investment in your company's future.</p>
            </div>
            <Link 
              href="/companies" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-red-200 text-[#E01E2E] font-bold rounded-full hover:bg-red-50 transition-colors text-xs"
            >
              Explore Our Companies →
            </Link>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="bg-[#F8F9FA] rounded-[40px] flex flex-col items-center justify-center relative overflow-hidden h-[500px] w-full">
               <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40"></div>
               <div className="relative z-10 w-40 h-48 mb-8">
                 <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="S Logo" fill className="object-contain drop-shadow-xl" />
               </div>
               <h3 className="relative z-10 text-[22px] font-black tracking-[0.25em] text-[#1A1A1A] uppercase">
                 Engineering <span className="text-[#E01E2E]">Growth</span>
               </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principles - 5 Cards in one row */}
      <section className="w-full bg-[#F8F9FA] py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-3">How We Think</p>
            <h2 className="text-3xl md:text-[40px] font-black text-[#1A1A1A]">Our Principles. Your Advantage.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { t: "Innovation First", d: "We leverage modern stacks and emerging technologies to keep your business always ahead of the curve.", i: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> },
              { t: "Uncompromising Quality", d: "From architecture to deployment, we maintain strict code quality and security standards.", i: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
              { t: "Strategic Partnership", d: "We don't just build software for clients; we build businesses with partners, focusing on long-term digital growth.", i: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> },
              { t: "Data-Driven Growth", d: "We use data, insights, and experimentation to drive measurable outcomes across every stage.", i: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /> },
              { t: "People & Culture", d: "Great people create great products. We invest in our team, culture, and continuous learning.", i: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-[20px] p-6 flex flex-col items-start shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-red-50 text-[#E01E2E] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.i}</svg>
                </div>
                <h3 className="text-[13px] font-bold text-gray-900 mb-3">{item.t}</h3>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Holistic Approach */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-3">Our Holistic Approach</p>
            <h2 className="text-3xl md:text-[40px] font-black text-[#1A1A1A]">Technology. Marketing. Creative. <span className="text-[#E01E2E]">Growth.</span></h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left Diagram */}
            <div className="flex-1 relative flex justify-center items-center min-h-[450px] w-full">
               <div className="absolute w-[360px] h-[360px] rounded-full border border-gray-100"></div>
               <div className="absolute w-[260px] h-[260px] rounded-full border border-gray-200 border-dashed"></div>
               
               <div className="relative w-28 h-32 z-20">
                 <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="S Logo" fill className="object-contain drop-shadow-lg" />
               </div>

               {/* Nodes */}
               <div className="absolute top-6 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-gray-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-md text-sm font-bold">&lt;/&gt;</div>
                 <span className="text-[11px] font-bold text-gray-900">Technology</span>
               </div>
               <div className="absolute bottom-6 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-gray-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-md text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                 <span className="text-[11px] font-bold text-gray-900">Creative Production</span>
               </div>
               <div className="absolute left-6 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-gray-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-md text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                 <span className="text-[11px] font-bold text-gray-900">Growth</span>
               </div>
               <div className="absolute right-6 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-gray-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-md text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
                 <span className="text-[11px] font-bold text-gray-900">Marketing</span>
               </div>
            </div>

            {/* Right Text List */}
            <div className="flex-1 w-full max-w-lg">
              <p className="text-gray-500 font-medium text-[15px] leading-[1.8] mb-10">
                We combine deep technical expertise with creative thinking and growth strategies to build digital ecosystems that attract, engage, and scale.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  { title: "Technology", desc: "Scalable architecture, secure systems, future-ready platforms." },
                  { title: "Marketing", desc: "Performance marketing, SEO, content, and growth strategies." },
                  { title: "Creative Production", desc: "UI/UX, branding, video, and content that connects." },
                  { title: "Growth", desc: "Analytics, CRO, automation, and experimentation." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#E01E2E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[14px] text-gray-500 font-medium">
                      <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-900 font-bold text-[14px] leading-relaxed">
                The result? Digital products and experiences that don't just look great—they drive real business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}