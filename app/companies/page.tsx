import Link from "next/link";

export default function Companies() {
  return (
    <main className="min-h-screen bg-[#FAFBFC] pt-32 pb-20">
      
      {/* رأس الصفحة (Header) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#E01E2E] rounded-full mb-8"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 mt-8 tracking-tight">
          Our <span className="text-[#E01E2E]">Companies</span> & Ventures
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
          Discover the innovative platforms, ERP systems, and digital solutions managed and developed under the Start Online Agency umbrella.
        </p>
      </div>

      {/* شبكة الشركات (Companies Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* 1. Niva Dent */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:bg-red-100 transition-colors"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-6 group-hover:scale-110 transition-transform shadow-sm border border-red-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Niva Dent</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              Advanced ERP system and complete management solution tailored for dental clinics. Currently powering operations for clinics like Al Noor Teeth, featuring robust scheduling, patient records, and billing systems built on a solid MySQL architecture.
            </p>
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-400">Status: <span className="text-green-500">Active</span></span>
              
              {/* هنا تم تفعيل الزرار */}
              <Link href="https://nivadent.online/" target="_blank" rel="noopener noreferrer">
                <button className="text-[#E01E2E] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Explore System <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </Link>

            </div>
          </div>

          {/* 2. Start Online Platform */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:bg-red-100 transition-colors"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-6 group-hover:scale-110 transition-transform shadow-sm border border-red-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Online Platform</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              A scalable e-commerce infrastructure designed for massive digital growth. Built with robust technologies including Firebase and MySQL to handle complex transactions and large-scale product management.
            </p>
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-400">Status: <span className="text-green-500">Active</span></span>
              
              {/* هنا تم تفعيل الزرار */}
              <Link href="https://start-online-6f460.web.app/" target="_blank" rel="noopener noreferrer">
                <button className="text-[#E01E2E] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Explore Platform <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </Link>

            </div>
          </div>

          {/* 3. Engineer Pro */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:bg-red-100 transition-colors"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-6 group-hover:scale-110 transition-transform shadow-sm border border-red-100">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Engineer Pro</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              A high-end corporate development and management solutions platform designed to streamline internal engineering and operational workflows.
            </p>
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-400">Status: <span className="text-yellow-500">In Development</span></span>
              <button className="text-gray-400 font-bold text-sm flex items-center gap-1 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>

          {/* 4. Capital Mind AI */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:bg-red-100 transition-colors"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-6 group-hover:scale-110 transition-transform shadow-sm border border-red-100">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Capital Mind AI</h3>
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              Integrating advanced AI-driven insights for smarter business decisions. This tool helps enterprises analyze data and optimize operational efficiency.
            </p>
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
               <span className="text-sm font-semibold text-gray-400">Status: <span className="text-[#E01E2E]">Beta</span></span>
              
             {/* هنا تم تفعيل الزرار للينك المباشر */}
              <Link href="https://capitalmindai.online/" target="_blank" rel="noopener noreferrer">
                <button className="text-[#E01E2E] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Explore Platform <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}