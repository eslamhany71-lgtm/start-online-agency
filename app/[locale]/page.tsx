import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../dictionaries/getDictionary";

export default async function Home({ params: { locale } }: { params: { locale: 'en' | 'ar' } }) {
  // بنسحب الترجمة الخاصة بالصفحة الرئيسية بناءً على اللغة الحالية
  const dict = await getDictionary(locale);
  const { home } = dict;

  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[680px] flex flex-col lg:flex-row items-center justify-between gap-6 py-20 lg:py-24">
        <div className="w-full lg:w-[52%] z-10 flex flex-col text-center lg:text-left">
          <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.12em] mb-6">
            {home.hero.badge}
          </p>
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight mb-8">
            {home.hero.title1} <span className="text-[#E01E2E]">{home.hero.titleHighlight}</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] mb-10 max-w-[580px] mx-auto lg:mx-0">
            {home.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href={`/${locale}/companies`} 
              className="bg-[#E01E2E] text-white h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:-translate-y-[2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200"
            >
              {home.hero.btnCompanies}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="bg-transparent border border-[rgba(17,17,17,0.08)] text-[#111111] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:-translate-y-[2px] hover:shadow-sm transition-all duration-200"
            >
              {home.hero.btnConsultation}
            </Link>
          </div>
        </div>

        {/* Right Content (48%) - 3D Visual */}
        <div className="w-full lg:w-[48%] relative flex justify-center items-center mt-16 lg:mt-0 min-h-[500px]">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#E01E2E]/5 rounded-full blur-3xl absolute"></div>
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-[rgba(17,17,17,0.03)] absolute animate-[spin_20s_linear_infinite]"></div>
            <div className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-[rgba(17,17,17,0.02)] border-dashed absolute animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>

          <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 animate-[bounce_6s_infinite]">
            <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
          </div>

          <div className="absolute top-[10%] left-[5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{home.hero.floating.tech}</span>
          </div>
          <div className="absolute top-[20%] right-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{home.hero.floating.marketing}</span>
          </div>
          <div className="absolute bottom-[20%] left-[0%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_4.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{home.hero.floating.content}</span>
          </div>
          <div className="absolute bottom-[10%] right-[5%] bg-white px-4 py-3 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center gap-2 animate-[bounce_5.5s_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#E01E2E]"></span><span className="text-[12px] font-bold text-[#111111]">{home.hero.floating.growth}</span>
          </div>
        </div>
      </section>

      {/* SECTION - WHAT WE DO */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="mb-16 text-center lg:text-left">
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">{home.whatWeDo.badge}</p>
            {/* استخدمنا dangerouslySetInnerHTML عشان نقرأ وسم <br /> اللي في ملف الترجمة */}
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight" dangerouslySetInnerHTML={{ __html: home.whatWeDo.title }}></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {home.whatWeDo.services.map((item: any, i: number) => (
              <div key={i} className="group bg-white rounded-[20px] p-8 border border-[rgba(17,17,17,0.04)] min-h-[220px] flex flex-col justify-between hover:-translate-y-[5px] hover:shadow-[0_8px_30px_rgba(224,30,46,0.04)] hover:border-[rgba(224,30,46,0.1)] transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] flex items-center justify-center mb-6 group-hover:bg-[#E01E2E]/5 transition-colors">
                    <svg className="w-5 h-5 text-[#111111] group-hover:text-[#E01E2E] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.i} /></svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#111111] mb-3">{item.t}</h3>
                  <p className="text-[16px] text-[#666A73] leading-[1.6]">{item.d}</p>
                </div>
                <div className="mt-6">
                  <Link href={`/${locale}/services`} className="text-[13px] font-bold text-[#111111] group-hover:text-[#E01E2E] flex items-center gap-2 transition-colors">
                    {home.whatWeDo.learnMore} <span className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1">→</span>
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
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">{home.products.badge}</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight">{home.products.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {home.products.items.map((item: any, i: number) => (
              <div key={i} className="group bg-white rounded-[20px] p-8 border border-[rgba(17,17,17,0.08)] flex flex-col hover:-translate-y-[4px] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-[12px] bg-[#111111] flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">{item.t.charAt(0)}</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#111111] mb-3">{item.t}</h3>
                <p className="text-[16px] text-[#666A73] leading-[1.6] mb-8 flex-1">{item.d}</p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[rgba(17,17,17,0.04)]">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded-[6px] ${item.sc}`}>{item.s}</span>
                  <Link href={`/${locale}/companies`} className="text-[#111111] hover:text-[#E01E2E] transition-colors group-hover:translate-x-1 rtl:group-hover:-translate-x-1 duration-300">
                    <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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
            <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">{home.studio.badge}</p>
            <h2 className="text-[38px] md:text-[46px] font-bold leading-tight text-white">{home.studio.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {home.studio.items.map((item: any, i: number) => (
              <Link key={i} href={`/${locale}${item.link}`} className="group relative aspect-[4/3] rounded-[20px] overflow-hidden bg-[#1A1A1A] cursor-pointer block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#111111] group-hover:scale-[1.04] transition-transform duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-[18px] font-bold mb-1">{item.t}</h3>
                    <p className="text-gray-400 text-[13px]">{item.d}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white/50 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all duration-300">
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION - WHY START ONLINE */}
      <section className="w-full bg-[#FCFBFA] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 text-center">
          <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">{home.whyUs.badge}</p>
          <h2 className="text-[38px] md:text-[46px] font-bold leading-tight mb-16">{home.whyUs.title}</h2>
          
          <div className="flex flex-wrap justify-center gap-[24px]">
            {home.whyUs.items.map((item: string, i: number) => (
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
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 text-center md:text-left rtl:md:text-right max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-4">
              {home.cta.title}
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              {home.cta.desc}
            </p>
          </div>
          
          <div className="relative z-10">
            <Link 
              href={`/${locale}/contact`} 
              className="bg-white text-[#E01E2E] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:bg-[#F7F7F6] hover:-translate-y-[2px] transition-all duration-200 shadow-xl"
            >
              {home.cta.btn}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}