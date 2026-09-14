import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../../dictionaries/getDictionary";

export default async function About({ params: { locale } }: { params: { locale: 'en' | 'ar' } }) {
  const dict = await getDictionary(locale);
  const { about } = dict;

  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* PAGE HERO */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[560px] flex flex-col lg:flex-row items-center justify-between gap-12 py-20 lg:py-24">
        <div className="w-full lg:w-[58%] z-10 flex flex-col text-center lg:text-left rtl:lg:text-right">
          <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.12em] mb-6">
            {about.hero.badge}
          </p>
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-8">
            {about.hero.title1} <span className="text-[#E01E2E]">{about.hero.titleHighlight}</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] mb-12 max-w-[620px] mx-auto lg:mx-0">
            {about.hero.desc}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 border-t border-[rgba(17,17,17,0.08)] pt-8">
            {about.hero.stats.map((stat: any, i: number) => (
              <div key={i} className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111111] leading-none mb-1">{stat.n}</h4>
                <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.08em]">{stat.t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[42%] relative flex justify-center items-center mt-16 lg:mt-0 min-h-[450px]">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] bg-[#E01E2E]/5 rounded-full blur-3xl absolute"></div>
            <div className="w-[280px] h-[280px] rounded-full border border-[rgba(17,17,17,0.03)] absolute animate-[spin_20s_linear_infinite]"></div>
            <div className="w-[340px] h-[340px] rounded-full border border-[rgba(17,17,17,0.02)] border-dashed absolute animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 animate-[bounce_6s_infinite]">
            <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
          </div>

          {/* Floating Cards */}
          <div className="absolute top-[10%] left-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{about.hero.floating.tech}</span>
          </div>
          <div className="absolute top-[20%] right-[-5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{about.hero.floating.marketing}</span>
          </div>
          <div className="absolute bottom-[20%] left-[-5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{about.hero.floating.content}</span>
          </div>
          <div className="absolute bottom-[10%] right-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{about.hero.floating.growth}</span>
          </div>
        </div>
      </section>

      {/* SECTION - STORY & VISION */}
      <section className="w-full py-[96px] px-6 md:px-8 lg:px-20">
        <div className="w-full max-w-[1280px] mx-auto bg-white rounded-[24px] border border-[rgba(17,17,17,0.04)] p-8 md:p-12 lg:p-[64px] flex flex-col lg:flex-row items-center gap-16 shadow-[0_8px_30px_rgba(17,17,17,0.02)]">
          <div className="flex-1 w-full text-center lg:text-left rtl:lg:text-right">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">{about.vision.badge}</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight mb-8" dangerouslySetInnerHTML={{ __html: about.vision.title }}></h2>
            <div className="space-y-6 text-[#666A73] text-[16px] md:text-[18px] leading-[1.6] mb-10 max-w-xl mx-auto lg:mx-0">
              <p>{about.vision.p1}</p>
              <p>{about.vision.p2}</p>
              <p>{about.vision.p3}</p>
            </div>
            <Link 
              href={`/${locale}/companies`} 
              className="bg-transparent border border-[rgba(17,17,17,0.08)] text-[#111111] h-[52px] px-8 rounded-[12px] font-bold inline-flex items-center justify-center hover:-translate-y-[2px] hover:shadow-sm transition-all duration-200"
            >
              {about.vision.btn}
            </Link>
          </div>
          
          <div className="flex-1 w-full">
            <div className="bg-[#FCFBFA] rounded-[24px] border border-[rgba(17,17,17,0.04)] flex flex-col items-center justify-center relative overflow-hidden h-[450px] w-full group">
               <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-50"></div>
               <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(17,17,17,0.08)] to-transparent top-1/2"></div>
               <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[rgba(17,17,17,0.08)] to-transparent left-1/2"></div>
               
               <div className="relative z-10 w-36 h-44 mb-8 transform group-hover:scale-105 transition-transform duration-500">
                 <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="S Logo" fill className="object-contain drop-shadow-xl" />
               </div>
               <h3 className="relative z-10 text-[20px] font-bold tracking-[0.2em] text-[#111111] uppercase bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-[rgba(17,17,17,0.04)]">
                 {about.vision.imgText1} <span className="text-[#E01E2E]">{about.vision.imgText2}</span>
               </h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - HOW WE THINK */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center lg:text-left rtl:lg:text-right">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">{about.principles.badge}</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight">{about.principles.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[24px]">
            {about.principles.items.map((item: any, i: number) => (
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
          <div className="mb-16 text-center lg:text-left rtl:lg:text-right">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">{about.holistic.badge}</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight" dangerouslySetInnerHTML={{ __html: about.holistic.title }}></h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 relative flex justify-center items-center w-full min-h-[400px]">
               <svg className="absolute w-[360px] h-[360px] animate-[spin_40s_linear_infinite]" viewBox="0 0 360 360">
                 <circle cx="180" cy="180" r="179" fill="none" stroke="rgba(17,17,17,0.08)" strokeWidth="1" strokeDasharray="4 4" />
               </svg>
               <svg className="absolute w-[240px] h-[240px] animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 240 240">
                 <circle cx="120" cy="120" r="119" fill="none" stroke="rgba(17,17,17,0.04)" strokeWidth="1" />
               </svg>
               
               <div className="relative w-24 h-28 z-20">
                 <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="S Logo" fill className="object-contain drop-shadow-xl" />
               </div>

               <div className="absolute top-4 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold">&lt;/&gt;</div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">{about.holistic.nodes.tech}</span>
               </div>
               <div className="absolute bottom-4 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">{about.holistic.nodes.creative}</span>
               </div>
               <div className="absolute left-2 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">{about.holistic.nodes.growth}</span>
               </div>
               <div className="absolute right-2 flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-white border border-[rgba(17,17,17,0.04)] text-[#111111] rounded-full flex items-center justify-center shadow-sm text-sm font-bold"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
                 <span className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">{about.holistic.nodes.marketing}</span>
               </div>
            </div>

            <div className="flex-1 w-full max-w-lg text-left rtl:text-right">
              <p className="text-[#666A73] text-[16px] md:text-[18px] leading-[1.6] mb-10">
                {about.holistic.desc}
              </p>
              <ul className="space-y-6 mb-10">
                {about.holistic.list.map((item: any, i: number) => (
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
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 text-center md:text-left rtl:md:text-right max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-4">
              {about.cta.title}
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              {about.cta.desc}
            </p>
          </div>
          
          <div className="relative z-10">
            <Link 
              href={`/${locale}/contact`} 
              className="bg-white text-[#E01E2E] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:bg-[#F7F7F6] hover:-translate-y-[2px] transition-all duration-200 shadow-xl"
            >
              {about.cta.btn}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}