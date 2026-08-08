import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      ),
      title: "Full-Stack Development",
      description: "End-to-end web architecture using cutting-edge technologies like Next.js and TypeScript to build blazing fast and secure applications."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
      ),
      title: "Complex ERP Systems",
      description: "Custom enterprise resource planning systems tailored for operational efficiency, backed by robust MySQL and Firebase databases."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
      ),
      title: "E-Commerce Platforms",
      description: "Scalable digital storefronts designed to handle high traffic and complex transactions, driving unprecedented digital growth."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h3a2 2 0 002-2zm0 0V9a2 2 0 012-2h3a2 2 0 012 2v10m-2 0h-3m-9 0h3m-3 0h3m-9 0h3m-3 0h3m-9 0h3"></path></svg>
      ),
      title: "Digital Performance Strategy",
      description: "Data-driven marketing and SEO optimization to ensure your software products reach the right audience and maximize ROI."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFBFC] pt-32 pb-20 relative overflow-hidden">
      
      {/* تأثيرات الخلفية */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-red-100/60 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-red-50/80 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-20">
          <div className="w-24 h-1 bg-[#E01E2E] rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 tracking-tight">
            Our Premium <span className="text-[#E01E2E]">Services</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            We deliver end-to-end digital transformation. From foundational software architecture to expansive growth strategies.
          </p>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-[#E01E2E] mb-8 group-hover:scale-110 group-hover:bg-[#E01E2E] group-hover:text-white transition-all duration-300 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* كول تو أكشن (Call to Action) */}
        <div className="bg-[#1A1A1A] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to scale your business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how our technology and growth solutions can be tailored to fit your specific operational needs.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-[#E01E2E] text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(224,30,46,0.4)] hover:shadow-[0_0_30px_rgba(224,30,46,0.6)]">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}