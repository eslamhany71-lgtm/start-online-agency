"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Careers() {
  // قائمة أكواد الدول
  const countryCodes = [
    { code: "+20", country: "🇪🇬 Egypt (+20)" },
    { code: "+966", country: "🇸🇦 Saudi Arabia (+966)" },
    { code: "+971", country: "🇦🇪 UAE (+971)" },
    { code: "+965", country: "🇰🇼 Kuwait (+965)" },
    { code: "+974", country: "🇶🇦 Qatar (+974)" },
    { code: "+1", country: "🇺🇸 USA (+1)" },
    { code: "+44", country: "🇬🇧 UK (+44)" },
  ];

  // إدارة بيانات الفورم
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+20", // كود الدولة الافتراضي (مصر)
    phone: "",
    position: "Full-Stack Developer (Next.js & TypeScript)",
    portfolio: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // تجميع كود الدولة مع رقم الموبايل في رقم واحد
    const fullPhoneNumber = `${formData.phoneCode} ${formData.phone}`;

    // تجهيز البيانات اللي هتتبعت للـ API
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: fullPhoneNumber,
      position: formData.position,
      portfolio: formData.portfolio,
      message: formData.message,
    };

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // تصفير الفورم بعد النجاح (مع الاحتفاظ بكود الدولة)
        setFormData({
          name: "",
          email: "",
          phoneCode: formData.phoneCode,
          phone: "",
          position: "Full-Stack Developer (Next.js & TypeScript)",
          portfolio: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the application.");
    } finally {
      setIsLoading(false);
    }
  };

  const jobs = [
    {
      title: "Full-Stack Developer (Next.js & TypeScript)",
      department: "Software Engineering",
      type: "Full-Time",
      location: "Remote / Hybrid",
    },
    {
      title: "Digital Marketing & Performance Specialist",
      department: "Digital Division",
      type: "Full-Time",
      location: "Cairo Office",
    },
    {
      title: "AI Solutions Engineer",
      department: "Capital Mind AI",
      type: "Contract",
      location: "Remote",
    },
    {
      title: "UI/UX Product Designer",
      department: "Product & Design",
      type: "Full-Time",
      location: "Remote / Hybrid",
    }
  ];

  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[560px] flex flex-col lg:flex-row items-center justify-between gap-12 py-20 lg:py-24">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] z-10 flex flex-col text-center lg:text-left">
          <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.12em] mb-6">
            Join Our Team
          </p>
          <h1 className="text-[48px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8">
            Build the Future <span className="text-[#E01E2E]">With Us.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] mb-12 max-w-[540px] mx-auto lg:mx-0">
            START ONLINE builds digital products, platforms, content, software, and growth systems. We are always looking for ambitious talent to join our mission.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 border-t border-[rgba(17,17,17,0.08)] pt-8">
            {[
              { n: "Impact", t: "High-Impact Work" },
              { n: "Growth", t: "Continuous Learning" },
              { n: "Culture", t: "Cross-Functional Team" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <h4 className="text-[20px] font-bold text-[#111111] leading-none mb-1">{stat.n}</h4>
                <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.08em]">{stat.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - 3D Visual */}
        <div className="w-full lg:w-[45%] relative flex justify-center items-center mt-16 lg:mt-0 min-h-[450px]">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] bg-[#E01E2E]/5 rounded-full blur-3xl absolute"></div>
            <div className="w-[340px] h-[340px] rounded-full border border-[rgba(17,17,17,0.02)] border-dashed absolute animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>
          <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 animate-[bounce_6s_infinite]">
            <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS & APPLICATION FORM */}
      <section className="w-full bg-white py-[96px] lg:py-[120px] border-t border-[rgba(17,17,17,0.04)]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Job Listings (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-3 h-8 bg-[#E01E2E] rounded-full"></div>
                <h2 className="text-[32px] font-bold leading-tight">Open Positions</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {jobs.map((job, index) => (
                  <div key={index} className="group bg-[#FCFBFA] rounded-[20px] border border-[rgba(17,17,17,0.06)] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[rgba(224,30,46,0.3)] hover:shadow-[0_8px_30px_rgba(224,30,46,0.04)] transition-all duration-300">
                    <div className="flex flex-col items-start">
                      <span className="text-[#E01E2E] text-[10px] font-bold uppercase tracking-[0.1em] mb-2 bg-red-50 px-2 py-1 rounded-[4px]">{job.department}</span>
                      <h3 className="text-[20px] font-bold text-[#111111] mb-4">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#666A73] font-medium">
                        <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> {job.location}</span>
                        <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> {job.type}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setFormData({ ...formData, position: job.title });
                        window.scrollTo({ top: document.getElementById("application-form")?.offsetTop! - 100, behavior: 'smooth' });
                      }}
                      className="bg-transparent border border-[rgba(17,17,17,0.1)] text-[#111111] h-[44px] px-6 rounded-[10px] font-bold text-[13px] hover:bg-[#E01E2E] hover:text-white hover:border-[#E01E2E] transition-all duration-200 flex-shrink-0"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sticky Application Form (5 cols) */}
            <div id="application-form" className="lg:col-span-5 w-full">
              <div className="bg-[#FCFBFA] rounded-[24px] border border-[rgba(17,17,17,0.08)] p-8 lg:p-10 sticky top-[100px] shadow-sm">
                <h3 className="text-[24px] font-bold text-[#111111] mb-8">Quick Application</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 border border-green-100">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-[20px] font-bold text-[#111111] mb-2">Application Sent!</h3>
                    <p className="text-[#666A73] text-[14px] leading-[1.6] mb-6">
                      Thank you for applying. Our team will review your profile and get back to you soon.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[13px] font-bold text-[#E01E2E] hover:text-red-800 transition-colors"
                    >
                      Submit another application →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Eslam Hany" 
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] transition-colors" 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-bold text-[#111111]">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@email.com" 
                          className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] transition-colors" 
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-bold text-[#111111]">Phone Number</label>
                        <div className="flex gap-2">
                          <select 
                            value={formData.phoneCode}
                            onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                            className="h-[52px] w-[80px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-2 text-[13px] text-[#666A73] focus:outline-none focus:border-[#E01E2E] transition-colors"
                          >
                            {countryCodes.map((c, i) => (
                              <option key={i} value={c.code}>{c.country}</option>
                            ))}
                          </select>
                          <input 
                            type="tel" 
                            required
                            maxLength={15}
                            value={formData.phone}
                            onChange={(e) => {
                              const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                              setFormData({ ...formData, phone: onlyNumbers });
                            }}
                            placeholder="100 123 4567" 
                            className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] transition-colors" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Position</label>
                      <select 
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#666A73] focus:outline-none focus:border-[#E01E2E] transition-colors"
                      >
                        {jobs.map((job, i) => (
                          <option key={i} value={job.title}>{job.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Resume / Portfolio Link</label>
                      <input 
                        type="url" 
                        required
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://drive.google.com/..." 
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] transition-colors" 
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Message / Note</label>
                      <textarea 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us briefly about your experience..." 
                        className="w-full min-h-[100px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] p-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isLoading}
                      className={`w-full h-[52px] mt-2 text-white font-bold rounded-[12px] transition-all duration-300 flex items-center justify-center gap-2 ${
                        isLoading ? "bg-red-400 cursor-not-allowed" : "bg-[#E01E2E] hover:-translate-y-[2px] shadow-lg shadow-red-500/20"
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          Sending...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>

                  </form>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 text-center">
          <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Why Join Start Online?</p>
          <h2 className="text-[38px] md:text-[46px] font-bold leading-tight mb-16">More Than a Job. It’s a Mission.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {[
              { t: "Impactful Work", d: "Work on products and platforms that solve real business problems for a global audience.", i: "M13 10V3L4 14h7v7l9-11h-7z" },
              { t: "Growth & Learning", d: "Access continuous learning, mentorship, and opportunities to grow your skills.", i: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              { t: "Collaborative Culture", d: "Join a supportive, diverse team that values ideas, ownership, and transparency.", i: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { t: "Benefits That Matter", d: "Competitive packages, flexible work arrangements, and a healthy work-life balance.", i: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[20px] p-8 border border-[rgba(17,17,17,0.04)] flex flex-col items-center text-center shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[12px] flex items-center justify-center text-[#E01E2E] mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.i} /></svg>
                </div>
                <h3 className="text-[18px] font-bold text-[#111111] mb-3">{item.t}</h3>
                <p className="text-[14px] text-[#666A73] leading-[1.6]">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="w-full bg-[#FCFBFA] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 text-center">
          <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Our Hiring Process</p>
          <h2 className="text-[38px] md:text-[46px] font-bold leading-tight mb-20">Simple. Transparent. Human.</h2>
          
          <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-[rgba(17,17,17,0.04)] z-0"></div>
            
            {[
              { n: "1. Apply", t: "Submit your application through our form.", i: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { n: "2. Connect", t: "We review your profile and schedule an intro call.", i: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
              { n: "3. Interview", t: "Meet the team, share ideas, and explore the role.", i: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { n: "4. Welcome", t: "Successful matches get an offer and start their journey.", i: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center flex-1">
                <div className="w-14 h-14 bg-white border-2 border-[rgba(17,17,17,0.08)] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.i} /></svg>
                </div>
                <h3 className="text-[16px] font-bold text-[#111111] mb-2">{step.n}</h3>
                <p className="text-[13px] text-[#666A73] leading-[1.6] max-w-[200px]">{step.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full bg-[#FCFBFA] pb-[120px] px-6 md:px-8 lg:px-20 pt-10">
        <div className="w-full max-w-[1280px] mx-auto bg-[#E01E2E] min-h-[220px] rounded-[24px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-8">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight mb-4">
              Ready to Build, Market & Scale Your Career?
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              If you're driven, curious, and ready to create impact, we want to hear from you.
            </p>
          </div>
          
          <div className="relative z-10">
            <button 
              onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
              className="bg-white text-[#E01E2E] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:bg-[#F7F7F6] hover:-translate-y-[2px] transition-all duration-200 shadow-xl"
            >
              View All Open Positions
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}