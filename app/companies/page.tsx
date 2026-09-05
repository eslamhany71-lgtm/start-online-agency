import Image from "next/image";
import Link from "next/link";

export default function Companies() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] flex flex-col items-center justify-start pt-28 pb-20">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 py-8">
        
        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left z-10 w-full">
          <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-4">Powered by Start Online Agency</p>
          <h1 className="text-4xl lg:text-[56px] font-black text-[#1A1A1A] leading-[1.1] mb-6 tracking-tight">
            Our Companies & <br />
            <span className="text-[#E01E2E]">Ventures</span>
          </h1>
          <p className="text-[15px] text-gray-500 mb-10 max-w-[500px] font-medium leading-[1.8]">
            We build, scale, and operate digital products and platforms that solve real business challenges. Each venture under our umbrella is designed with the same commitment to quality, innovation, and long-term impact.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[#E01E2E] bg-red-50 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></span>
              <div>
                <h4 className="font-black text-gray-900 text-sm">4+</h4>
                <p className="text-[9px] font-bold text-gray-400 uppercase">Active Ventures</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#E01E2E] bg-red-50 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></span>
              <div>
                <h4 className="font-black text-gray-900 text-sm">Built for Scale</h4>
                <p className="text-[9px] font-bold text-gray-400 uppercase">Future-Ready Solutions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#E01E2E] bg-red-50 p-2 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></span>
              <div>
                <h4 className="font-black text-gray-900 text-sm">Innovation First</h4>
                <p className="text-[9px] font-bold text-gray-400 uppercase">Solving Real Problems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Graphic - STATIC (No Animation) */}
        <div className="flex-1 flex justify-center items-center w-full relative min-h-[450px]">
          {/* Background Glow */}
          <div className="absolute w-[450px] h-[450px] bg-red-50/70 rounded-full blur-3xl z-0"></div>
          
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center z-10">
            {/* Center Logo & Pedestal */}
            <div className="relative flex flex-col items-center">
              <div className="relative w-48 h-56 md:w-52 md:h-60 z-20 mb-4">
                <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-xl" priority />
              </div>
              {/* Pedestal Base */}
              <div className="absolute -bottom-2 w-48 h-6 bg-black/10 rounded-[100%] blur-sm z-10"></div>
              <div className="absolute bottom-0 w-40 h-3 border-[3px] border-[#E01E2E]/20 rounded-[100%] z-20"></div>
              <div className="absolute bottom-2 w-28 h-1.5 border-[2px] border-[#E01E2E]/10 rounded-[100%] z-20"></div>
            </div>

            {/* 4 Corner Icons (Static) */}
            <div className="absolute top-12 left-4 w-12 h-12 bg-white rounded-2xl shadow-sm border border-red-50 flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl shadow-sm border border-red-50 flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <div className="absolute bottom-16 left-2 w-12 h-12 bg-white rounded-2xl shadow-sm border border-red-50 flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="absolute bottom-12 right-6 w-12 h-12 bg-white rounded-2xl shadow-sm border border-red-50 flex items-center justify-center text-[#E01E2E] z-20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Companies Cards Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col gap-8">
        
        {/* Niva Dent - Full Width */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-50 text-[#E01E2E] rounded-xl flex items-center justify-center"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg></div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">Niva Dent</h3>
                <p className="text-[#E01E2E] text-[10px] font-bold tracking-widest uppercase mt-1">ERP System for Dental Clinics</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-[1.8] mb-6">
              Advanced ERP system and complete management solution tailored for dental clinics. Currently powering operations for clinics like Al Noor Teeth, featuring robust scheduling, patient records, and billing systems built on a solid MySQL architecture.
            </p>
            <ul className="space-y-3 mb-10">
              {['Appointment & Schedule Management', 'Patient Records & Treatment History', 'Billing, Invoicing & Payments', 'Reports & Analytics Dashboard'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <span className="text-green-600 text-[11px] font-bold">Status: Active</span>
              <Link href="#" className="text-[#E01E2E] text-sm font-bold flex items-center gap-2 hover:text-red-800 transition-colors">Explore System →</Link>
            </div>
          </div>
          {/* Dashboard Mockup Placeholder */}
          <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 p-4 flex flex-col">
            <div className="w-full h-8 border-b border-gray-200 flex items-center gap-2 px-2 mb-4">
               <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div><div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-4">
               <div className="grid grid-cols-3 gap-2">
                 <div className="h-16 bg-gray-50 rounded-lg"></div><div className="h-16 bg-gray-50 rounded-lg"></div><div className="h-16 bg-red-50 rounded-lg"></div>
               </div>
               <div className="flex-1 bg-gray-50 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Half Width Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Start Online Platform */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-red-50 text-[#E01E2E] rounded-xl flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></div>
              <div>
                <h3 className="text-xl font-black text-gray-900">Start Online Platform</h3>
                <p className="text-[#E01E2E] text-[9px] font-bold tracking-widest uppercase mt-1">E-Commerce Infrastructure</p>
              </div>
            </div>
            <p className="text-gray-500 text-[13px] leading-[1.8] mb-6">
              A scalable e-commerce infrastructure built for massive digital growth. Built with robust technologies including Firebase and MySQL to handle complex transactions and large-scale product management.
            </p>
            <ul className="space-y-2 mb-8">
              {['Scalable Architecture', 'Secure Transactions', 'Product & Inventory Management'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
              <span className="text-green-600 text-[10px] font-bold">Status: Active</span>
              <Link href="#" className="text-[#E01E2E] text-[13px] font-bold hover:text-red-800 transition-colors">Explore Platform →</Link>
            </div>
          </div>

          {/* Engineer Pro */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-red-50 text-[#E01E2E] rounded-xl flex items-center justify-center"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg></div>
              <div>
                <h3 className="text-xl font-black text-gray-900">Engineer Pro</h3>
                <p className="text-[#E01E2E] text-[9px] font-bold tracking-widest uppercase mt-1">Development & Workflow Platform</p>
              </div>
            </div>
            <p className="text-gray-500 text-[13px] leading-[1.8] mb-6">
              A high-end corporate development and management solutions platform designed to streamline internal engineering and operational workflows.
            </p>
            <ul className="space-y-2 mb-8">
              {['Project & Task Management', 'Team Collaboration', 'Workflow Automation'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[13px] text-gray-600 font-medium">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
              <span className="text-yellow-600 text-[10px] font-bold">Status: In Development</span>
              <span className="text-gray-400 text-[13px] font-bold">Coming Soon</span>
            </div>
          </div>
          
        </div>

        {/* Capital Mind AI - Full Width */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-50 text-[#E01E2E] rounded-xl flex items-center justify-center"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">Capital Mind AI</h3>
                <p className="text-[#E01E2E] text-[10px] font-bold tracking-widest uppercase mt-1">AI-Driven Business Intelligence</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-[1.8] mb-6">
              Integrating advanced AI-driven insights for smarter business decisions. This tool helps enterprises analyze data and optimize operational efficiency.
            </p>
            <ul className="space-y-3 mb-10">
              {['AI Analytics & Insights', 'Predictive Modeling', 'Operational Optimization', 'Smart Recommendations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <span className="text-blue-600 text-[11px] font-bold">Status: Beta</span>
              <Link href="#" className="text-[#E01E2E] text-sm font-bold flex items-center gap-2 hover:text-red-800 transition-colors">Explore Platform →</Link>
            </div>
          </div>
          {/* Dashboard Mockup Placeholder */}
          <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-100 p-4 flex flex-col">
            <div className="w-full h-8 border-b border-gray-200 flex items-center gap-2 px-2 mb-4">
               <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div><div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-4">
               <div className="h-24 bg-gray-50 rounded-lg flex items-end p-2 gap-2">
                 <div className="w-1/6 bg-red-100 h-1/3 rounded-t-sm"></div>
                 <div className="w-1/6 bg-red-200 h-2/3 rounded-t-sm"></div>
                 <div className="w-1/6 bg-red-300 h-1/2 rounded-t-sm"></div>
                 <div className="w-1/6 bg-red-400 h-full rounded-t-sm"></div>
                 <div className="w-1/6 bg-red-200 h-3/4 rounded-t-sm"></div>
               </div>
               <div className="grid grid-cols-2 gap-4 flex-1">
                 <div className="bg-gray-50 rounded-lg"></div><div className="bg-gray-50 rounded-lg"></div>
               </div>
            </div>
          </div>
        </div>

      </section>

      {/* 3. Footer Banner Sectors */}
      <section className="w-full bg-white py-12 border-t border-gray-100 mt-10">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[#E01E2E] text-[10px] font-black uppercase tracking-widest mb-2">Innovation Across Sectors</p>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-8">Products Built for Real Problems</h2>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
               {[
                 { i: "🦷", t: "Healthcare & Dental" },
                 { i: "🛒", t: "E-commerce & Retail" },
                 { i: "⚙️", t: "Engineering & Operations" },
                 { i: "🤖", t: "AI & Business Intelligence" },
                 { i: "📊", t: "Finance & Analytics" },
                 { i: "🤝", t: "Productivity & Collaboration" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-2">
                   <div className="text-xl text-[#E01E2E]">{item.i}</div>
                   <span className="text-[10px] font-bold text-gray-500 max-w-[80px] text-center leading-tight">{item.t}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </main>
  );
}