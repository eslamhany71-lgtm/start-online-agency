import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] pt-32 pb-20 relative overflow-hidden">
      
      {/* تأثيرات الخلفية */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[20%] w-[800px] h-[800px] bg-gradient-to-tr from-red-50 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-red-50/70 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-20">
          <div className="w-24 h-1 bg-[#E01E2E] rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
            Behind <span className="text-[#E01E2E]">Start Online</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            We are more than just an agency. We are a technology-driven holding group architecting the digital future of businesses.
          </p>
        </div>

        {/* القسم الأول: قصتنا */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Our Story & Vision</h2>
              <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
                <p>
                  Start Online Agency was founded with a singular mission: to bridge the gap between complex software engineering and tangible business growth. 
                </p>
                <p>
                  We recognized that modern businesses don't just need a website; they need robust digital infrastructure. That's why we evolved into a holding group that builds complete ecosystems—from advanced ERP systems for specialized sectors to scalable e-commerce platforms capable of handling massive transactional volume.
                </p>
                <p>
                  Our team consists of top-tier developers, system architects, and growth strategists who treat every line of code as an investment in your company's future.
                </p>
              </div>
            </div>
            
            {/* تصميم بصري يمثل الـ Architecture (بالاستايل الفاتح الجديد) */}
            <div className="relative h-80 rounded-2xl bg-white overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
              
              {/* تأثير خلفية نقط خفيفة جداً تليق مع الموقع */}
              <div className="absolute inset-0 bg-[radial-gradient(#FCA5A5_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20"></div>
              
              <div className="z-10 text-center flex flex-col items-center">
                <div className="w-28 h-28 relative mx-auto mb-6">
                  {/* اللوجو بألوانه الطبيعية بدون أي فلاتر */}
                  <Image
                    src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png"
                    alt="SOA Emblem"
                    fill
                    className="object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-[#1A1A1A] font-extrabold tracking-[0.2em] text-lg">
                  ENGINEERING <span className="text-[#E01E2E]">GROWTH</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* القسم الثاني: قيمنا (Core Values) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation First</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              We leverage modern stacks like Next.js and robust databases to ensure our solutions are always ahead of the curve.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Quality</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              From the initial architecture to the final deployment, we maintain strict code quality and security standards.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Partnership</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              We don't just build software for clients; we build businesses with partners, focusing on long-term digital growth.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}