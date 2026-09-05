import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start overflow-hidden pt-24">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20">
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="text-5xl lg:text-[64px] font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
            Behind <span className="text-[#E01E2E]">Start Online</span>
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-xl font-medium leading-relaxed">
            We are more than just an agency. We are a technology-driven holding group architecting the digital future of businesses.
          </p>
          
          {/* Hero Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
            {[
              { n: "10+", t: "Years of Excellence", icon: "⭐" },
              { n: "50+", t: "Enterprise Clients", icon: "🏢" },
              { n: "100+", t: "Experts & Strategists", icon: "👥" }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-[#E01E2E] text-2xl">{stat.icon}</div>
                <div>
                  <h4 className="text-2xl font-black text-gray-900 leading-none">{stat.n}</h4>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Graphic */}
        <div className="flex-1 flex justify-center items-center relative w-full mt-16 lg:mt-0 min-h-[450px]">
          <div className="absolute w-[350px] h-[350px] bg-red-50 rounded-full blur-3xl opacity-80 -z-10"></div>
          
          <div className="relative flex justify-center items-center flex-col">
            <div className="relative w-56 h-64 md:w-64 md:h-72 z-10 mb-4">
              <Image
                src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
                alt="Start Online Agency Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            <div className="absolute -bottom-2 w-56 h-8 bg-black/5 rounded-[100%] blur-md"></div>
            <div className="absolute bottom-2 w-48 h-4 border-[3px] border-[#E01E2E]/30 rounded-[100%]"></div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-12 bg-white p-4 rounded-xl shadow-lg border border-red-50 flex flex-col items-center text-center w-28 animate-[bounce_4s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Engineering</span>
              <span className="text-[8px] text-gray-400">Building robust solutions</span>
            </div>
            <div className="absolute top-8 -right-12 bg-white p-4 rounded-xl shadow-lg border border-red-50 flex flex-col items-center text-center w-28 animate-[bounce_5s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Marketing</span>
              <span className="text-[8px] text-gray-400">Driving growth strategies</span>
            </div>
            <div className="absolute bottom-12 -left-16 bg-white p-4 rounded-xl shadow-lg border border-red-50 flex flex-col items-center text-center w-28 animate-[bounce_4.5s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Content</span>
              <span className="text-[8px] text-gray-400">Engaging audiences</span>
            </div>
            <div className="absolute -bottom-4 -right-16 bg-white p-4 rounded-xl shadow-lg border border-red-50 flex flex-col items-center text-center w-28 animate-[bounce_5.5s_infinite]">
              <span className="text-[#E01E2E] mb-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></span>
              <span className="text-[10px] font-bold text-gray-900">Growth</span>
              <span className="text-[8px] text-gray-400">Sustainable scaling</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Story & Vision */}
      <section className="w-full bg-white py-20 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-3">Our Story & Vision</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A] leading-tight mb-6">
              A Purpose-Built Journey <br className="hidden md:block" /> for Digital Impact
            </h2>
            <div className="space-y-4 text-gray-500 text-sm font-medium leading-relaxed mb-8">
              <p>Start Online Agency was founded with a singular mission: to bridge the gap between complex software engineering and tangible business growth.</p>
              <p>We recognized that modern businesses don't just need a website; they need robust digital infrastructure. That's why we evolved into a holding group that builds complete ecosystems—from advanced ERP systems for specialized sectors to scalable e-commerce platforms capable of handling massive transactional volume.</p>
              <p>Our team consists of top-tier developers, system architects, and growth strategists who treat every line of code as an investment in your company's future.</p>
            </div>
            <Link 
              href="/companies" 
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-red-100 text-[#E01E2E] font-bold rounded-full hover:bg-red-50 transition-colors text-sm"
            >
              Explore Our Companies →
            </Link>
          </div>
          
          <div className="flex-1 w-full relative">
            {/* Dotted Background Box */}
            <div className="bg-gray-50 rounded-3xl p-12 flex flex-col items-center justify-center relative overflow-hidden h-[400px]">
               <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:20px_20px] opacity-70"></div>
               <div className="relative z-10 w-32 h-40 mb-6">
                 <Image
                    src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
                    alt="S Logo"
                    fill
                    className="object-contain drop-shadow-xl"
                  />
               </div>
               <h3 className="relative z-10 text-xl md:text-2xl font-black tracking-[0.2em] text-[#1A1A1A] uppercase">
                 Engineering <span className="text-[#E01E2E]">Growth</span>
               </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Principles */}
      <section className="w-full bg-gray-50/50 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-3">How We Think</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">Our Principles. Your Advantage.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { t: "Innovation First", d: "We leverage modern stacks and emerging technologies to keep your business always ahead of the curve.", i: "⚡" },
              { t: "Uncompromising Quality", d: "From architecture to deployment, we maintain strict code quality and security standards.", i: "🛡️" },
              { t: "Strategic Partnership", d: "We don't just build software for clients; we build businesses with partners, focusing on long-term digital growth.", i: "🤝" },
              { t: "Data-Driven Growth", d: "We use data, insights, and experimentation to drive measurable outcomes across every stage.", i: "🎯" },
              { t: "People & Culture", d: "Great people create great products. We invest in our team, culture, and continuous learning.", i: "❤️" }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-white border border-red-50 text-[#E01E2E] rounded-full flex items-center justify-center text-xl mb-4 shadow-sm">{item.i}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-3">{item.t}</h3>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Holistic Approach */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-3">Our Holistic Approach</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">Technology. Marketing. Creative. <span className="text-[#E01E2E]">Growth.</span></h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Diagram */}
            <div className="flex-1 relative flex justify-center items-center h-[400px] w-full">
               <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-100 animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-200 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
               
               <div className="relative w-20 h-24 z-20">
                 <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="S Logo" fill className="object-contain" />
               </div>

               {/* Nodes */}
               <div className="absolute top-8 flex flex-col items-center gap-2">
                 <div className="w-10 h-10 bg-white border border-red-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-sm text-sm font-bold">&lt;/&gt;</div>
                 <span className="text-[10px] font-bold text-gray-900">Technology</span>
               </div>
               <div className="absolute bottom-8 flex flex-col items-center gap-2">
                 <div className="w-10 h-10 bg-white border border-red-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-sm text-sm font-bold">🎬</div>
                 <span className="text-[10px] font-bold text-gray-900">Creative Production</span>
               </div>
               <div className="absolute left-8 flex flex-col items-center gap-2">
                 <div className="w-10 h-10 bg-white border border-red-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-sm text-sm font-bold">📈</div>
                 <span className="text-[10px] font-bold text-gray-900">Growth</span>
               </div>
               <div className="absolute right-8 flex flex-col items-center gap-2">
                 <div className="w-10 h-10 bg-white border border-red-100 text-[#E01E2E] rounded-full flex items-center justify-center shadow-sm text-sm font-bold">🎯</div>
                 <span className="text-[10px] font-bold text-gray-900">Marketing</span>
               </div>
            </div>

            {/* Right Text List */}
            <div className="flex-1">
              <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                We combine deep technical expertise with creative thinking and growth strategies to build digital ecosystems that attract, engage, and scale.
              </p>
              <ul className="space-y-4 mb-8">
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
                    <p className="text-sm text-gray-600">
                      <strong className="text-gray-900">{item.title}:</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-900 font-bold text-sm">
                The result? Digital products and experiences that don't just look great—they drive real business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}