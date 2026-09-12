import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* PAGE HERO */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[560px] flex flex-col lg:flex-row items-center justify-between gap-12 py-20 lg:py-24">
        {/* Left Content (7 columns equivalent) */}
        <div className="w-full lg:w-[58%] z-10 flex flex-col text-center lg:text-left">
          <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.12em] mb-6">
            Our Story
          </p>
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-8">
            Behind <span className="text-[#E01E2E]">Start Online</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] mb-12 max-w-[620px] mx-auto lg:mx-0">
            We are more than an agency. We build technology, create experiences, and engineer digital growth for ambitious businesses.
          </p>
          
          {/* Trust Indicators (Stats) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 border-t border-[rgba(17,17,17,0.08)] pt-8">
            {[
              { n: "Excellence", t: "Proven Track Record" },
              { n: "Enterprise", t: "Trusted Partners" },
              { n: "Experts", t: "Top Strategists" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111111] leading-none mb-1">{stat.n}</h4>
                <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.08em]">{stat.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (5 columns equivalent) - 3D Visual */}
        <div className="w-full lg:w-[42%] relative flex justify-center items-center mt-16 lg:mt-0 min-h-[450px]">
          {/* Orbital Lines & Glow */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] bg-[#E01E2E]/5 rounded-full blur-3xl absolute"></div>
            <div className="w-[280px] h-[280px] rounded-full border border-[rgba(17,17,17,0.03)] absolute animate-[spin_20s_linear_infinite]"></div>
            <div className="w-[340px] h-[340px] rounded-full border border-[rgba(17,17,17,0.02)] border-dashed absolute animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 animate-[bounce_6s_infinite]">
            <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
          </div>

          {/* Floating Cards (Identical to Home) */}
          <div className="absolute top-[10%] left-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Technology</span>
          </div>
          <div className="absolute top-[20%] right-[-5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Marketing</span>
          </div>
          <div className="absolute bottom-[20%] left-[-5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Content</span>
          </div>
          <div className="absolute bottom-[10%] right-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span>
            <span className="text-[12px] font-bold text-[#111111]">Growth</span>
          </div>
        </div>
      </section>

      {/* SECTION - STORY & VISION */}
      <section className="w-full py-[96px] px-6 md:px-8 lg:px-20">
        <div className="w-full max-w-[1280px] mx-auto bg-white rounded-[24px] border border-[rgba(17,17,17,0.04)] p-8 md:p-12 lg:p-[64px] flex flex-col lg:flex-row items-center gap-16 shadow-[0_8px_30px_rgba(17,17,17,0.02)]">
          
          {/* Left Text */}
          <div className="flex-1 w-full text-center lg:text-left">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Our Story & Vision</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight mb-8">
              A Purpose-Built Journey <br className="hidden md:block" /> for Digital Impact
            </h2>
            <div className="space-y-6 text-[#666A73] text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-xl mx-auto lg:mx-0">
              <p>START ONLINE was built with a singular mission: to bridge the gap between complex technology and tangible business growth.</p>
              <p>We develop high-performance websites, scalable e-commerce platforms, custom systems, and data-driven marketing campaigns. We don't just offer isolated services; we build complete, interconnected digital ecosystems.</p>
              <p>Our goal is to architect scalable infrastructure that empowers ambitious businesses to thrive in the modern economy.</p>
            </div>
            <Link 
              href="/companies" 
              className="bg-transparent border border-[rgba(17,17,17,0.08)] text-[#111111] h-[52px] px-8 rounded-[12px] font-bold inline-flex items-center justify-center hover:-translate-y-[2px] hover:shadow-sm transition-all duration-200"
            >
              Explore Our Companies
            </Link>
          </div>
          
          {/* Right Premium Visual */}
          <div className="flex-1 w-full">
            <div className="bg-[#FCFBFA] rounded-[24px] border border-[rgba(17,17,17,0.04)] flex flex-col items-center justify-center relative overflow-hidden h-[450px] w-full group">
               {/* Subtle lines environment */}
               <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-50"></div>
               <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(17,17,17,0.08)] to-transparent top-1/2"></div>
               <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[rgba(17,17,17,0.08)] to-transparent left-1/2"></div>
               
               <div className="relative z-10 w-36 h-44 mb-8 transform group-hover:scale-105 transition-transform duration-500">
                 <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="S Logo" fill className="object-contain drop-shadow-xl" />
               </div>
               <h3 className="relative z-10 text-[20px] font-bold tracking-[0.2em] text-[#111111] uppercase bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-[rgba(17,17,17,0.04)]">
                 Engineering <span className="text-[#E01E2E]">Growth</span>
               </h3>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION - HOW WE THINK */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center lg:text-left">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">How We Think</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight">Our Principles. Your Advantage.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[24px]">
            {[
              { t: "Innovation First", d: "We leverage modern stacks and emerging technologies to keep your business ahead.", i: "M13 10V3L4 14h7v7l9-11h-7z" },
              { t: "Uncompromising Quality", d: "From architecture to deployment, we maintain strict quality and security standards.", i: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { t: "Strategic Partnership", d: "We build businesses with partners, focusing on long-term digital growth.", i: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { t: "Data-Driven Growth", d: "We use data and experimentation to drive measurable outcomes across every stage.", i: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
              { t: "People & Culture", d: "Great people create great products. We invest in our team and continuous learning.", i: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
            ].map((item, i) => (
              <div key={i} className="bg-white border-t border-[rgba(17,17,17,0.08)] border-x border-b rounded-[20px] p-8 min-h-[260px] flex flex-col hover:border-t-[4px] hover:border-t-[#E01E2E] hover:-translate-y-[4px] hover:shadow-[0_8px_30px_rgba(17,17,17,0.04)] transition-all duration-300">
                <div className="w-12 h-12 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-[12px] flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.i} /></svg>
                </div>
                <h3 className="text-[18px] md:text-[21px] font-bold text-[#111111] mb-3">{item.t}</h3>
                <p className="text-[16px] text-[#666A73] leading-[1.6]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION - HOLISTIC APPROACH */}
      <section className="w-full bg-[#FCFBFA] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center lg:text-left">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Our Holistic Approach</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight">Technology. Marketing. Creative. <span className="text-[#E01E2E]">Growth.</span></h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Diagram */}
            <div className="flex-1 relative flex justify-center items-center w-full min-h-[400px]">
               {/* SVG Circles */}
               <svg className="absolute w-[360px] h-[360px] animate-[spin_40s_linear_infinite]" viewBox="0 0 360 360">
                 <circle cx="180" cy="180" r="179" fill="none" stroke="rgba(17,17,17,0.08)" strokeWidth="1" strokeDasharray="4 4" />
               </svg>
               <svg className="absolute w-[240px] h-[240px] animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 240 240">
                 <circle cx="120" cy="120" r="119" fill="none" stroke="rgba(17,17,17,0.04)" strokeWidth="1" />
               </svg>
               
               {/* Center Logo */}
               <div className="relative w-24 h-28 z-20">
                 <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="S Logo" fill className="object-contain drop-shadow-xl" />
               </div>

               {/* Nodes */}
               <div className="absolute top-4 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold">&lt;/&gt;</div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">Technology</span>
               </div>
               <div className="absolute bottom-4 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">Creative</span>
               </div>
               <div className="absolute left-2 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">Growth</span>
               </div>
               <div className="absolute right-2 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">Marketing</span>
               </div>
            </div>

            {/* Right Text List */}
            <div className="flex-1 w-full max-w-lg">
              <p className="text-[#666A73] text-[16px] md:text-[18px] leading-[1.6] mb-10">
                We combine deep technical expertise with creative thinking and growth strategies to build digital ecosystems that attract, engage, and scale.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  { title: "Technology", desc: "Scalable architecture, secure systems, digital platforms." },
                  { title: "Marketing", desc: "Performance marketing, strategy, content distribution." },
                  { title: "Creative Production", desc: "Video, visual storytelling, content and brand experiences." },
                  { title: "Growth", desc: "Analytics, automation, experimentation and optimization." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[16px] text-[#666A73] leading-[1.6]">
                      <strong className="text-[#111111] font-bold">{item.title}:</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
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
              Let's Build Something Extraordinary Together.
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              Take the first step toward building your digital future.
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