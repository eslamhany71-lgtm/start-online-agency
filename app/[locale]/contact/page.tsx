"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    inquiry: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation for API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", company: "", phone: "", email: "", inquiry: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#FCFBFA] text-[#111111] flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* HERO SECTION */}
      <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20 min-h-[500px] flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-20">
        <div className="w-full lg:w-[55%] z-10 flex flex-col text-center lg:text-left">
          <p className="text-[11px] font-bold text-[#666A73] uppercase tracking-[0.12em] mb-6">
            Get In Touch
          </p>
          <h1 className="text-[48px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-6">
            Let’s Start a <span className="text-[#E01E2E]">Conversation</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666A73] leading-[1.6] max-w-[540px] mx-auto lg:mx-0">
            Have an idea, project, or want to explore our digital solutions? Reach out and let’s scale together.
          </p>
        </div>

        {/* Right Content - 3D Visual with Subtle Icons */}
        <div className="w-full lg:w-[45%] relative flex justify-center items-center mt-12 lg:mt-0 min-h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[300px] h-[300px] bg-[#E01E2E]/5 rounded-full blur-3xl absolute"></div>
            <div className="w-[340px] h-[340px] rounded-full border border-[rgba(17,17,17,0.02)] border-dashed absolute animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>
          
          <div className="relative w-48 h-56 md:w-56 md:h-64 z-10 animate-[bounce_6s_infinite]">
            <Image src="/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png" alt="Start Online Agency Logo" fill className="object-contain drop-shadow-2xl" priority />
          </div>

          {/* Subtle Floating Icons */}
          <div className="absolute top-[10%] left-[10%] bg-white w-12 h-12 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center justify-center animate-[bounce_4s_infinite]">
            <svg className="w-5 h-5 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <div className="absolute top-[20%] right-[5%] bg-white w-12 h-12 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center justify-center animate-[bounce_5s_infinite]">
            <svg className="w-5 h-5 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <div className="absolute bottom-[15%] left-[5%] bg-white w-12 h-12 rounded-[16px] shadow-sm border border-[rgba(17,17,17,0.04)] flex items-center justify-center animate-[bounce_4.5s_infinite]">
            <svg className="w-5 h-5 text-[#E01E2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="w-full bg-[#F7F7F6] py-[96px] lg:py-[120px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-[28px]">
            
            {/* Left: Contact Information (40%) */}
            <div className="w-full lg:w-[40%] bg-[#141516] text-white rounded-[24px] p-8 md:p-[40px] flex flex-col shadow-xl">
              <h3 className="text-[28px] font-bold mb-8">Contact Information.</h3>
              
              <div className="flex flex-col gap-8 flex-1">
                <a href="https://wa.me/201006390950" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#E01E2E] group-hover:text-white transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">WhatsApp / Phone</p>
                    <p className="text-[16px] font-medium">+20 100 639 0950</p>
                  </div>
                </a>

                <a href="mailto:hello@startonline.agency" className="group flex items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#E01E2E] transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-[16px] font-medium">hello@startonline.agency</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">Working Hours</p>
                    <p className="text-[16px] font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-12 border-t border-white/10 pt-8">
                {['ig', 'fb', 'in', 'yt'].map((social) => (
                  <Link key={social} href="#" className="w-12 h-12 rounded-full bg-[#1A1C1E] flex items-center justify-center hover:border hover:border-[#E01E2E] hover:text-[#E01E2E] transition-all duration-300">
                    <span className="text-[12px] font-bold uppercase">{social}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Form (60%) */}
            <div className="w-full lg:w-[60%] bg-white border border-[rgba(17,17,17,0.08)] rounded-[24px] p-8 md:p-[44px] shadow-sm">
              
              {/* WhatsApp Priority CTA */}
              <a href="https://wa.me/201006390950" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#F7F7F6] hover:bg-[#25D366]/10 text-[#111111] hover:text-[#25D366] h-[52px] rounded-[12px] font-bold text-[14px] transition-all duration-300 mb-8 border border-[rgba(17,17,17,0.04)]">
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.551 4.195 1.6 6.015L.302 24l6.104-1.6c1.765.955 3.754 1.458 5.625 1.458 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.844c-1.785 0-3.535-.479-5.07-1.388l-.364-.216-3.774.991.999-3.682-.237-.377A9.972 9.972 0 012.046 12.03c0-5.508 4.484-9.992 9.985-9.992 5.511 0 9.995 4.484 9.995 9.992s-4.484 9.992-9.995 9.992zm5.495-7.502c-.302-.151-1.785-.881-2.062-.981-.277-.101-.479-.151-.681.151-.202.302-.781.981-.958 1.183-.176.202-.353.227-.655.076-.302-.151-1.275-.47-2.428-1.503-.898-.805-1.504-1.799-1.681-2.101-.176-.302-.019-.465.132-.616.136-.136.302-.353.453-.529.151-.176.202-.302.302-.504.101-.202.051-.378-.025-.529-.076-.151-.681-1.642-.933-2.247-.245-.589-.494-.509-.681-.518-.176-.008-.378-.01-.58-.01-.202 0-.529.076-.806.378-.277.302-1.058 1.033-1.058 2.52 0 1.487 1.083 2.923 1.234 3.125.151.202 2.132 3.255 5.166 4.56.721.31 1.284.496 1.724.634.724.23 1.383.197 1.902.119.584-.087 1.785-.73 2.037-1.436.252-.706.252-1.311.176-1.437-.075-.126-.277-.202-.579-.353z"/></svg>
                Prefer WhatsApp? Chat With Us
              </a>

              <h2 className="text-[32px] font-bold text-[#111111] mb-8">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6 border border-green-100">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#111111] mb-2">Message Sent Successfully!</h3>
                  <p className="text-[#666A73] text-[14px] leading-[1.6] mb-6">
                    Thank you for reaching out. A member of our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[13px] font-bold text-[#E01E2E] hover:text-red-800 transition-colors"
                  >
                    Send another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Your Name</label>
                      <input 
                        type="text" required
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] focus:ring-2 focus:ring-[#E01E2E]/10 transition-all" 
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Company Name</label>
                      <input 
                        type="text" 
                        value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] focus:ring-2 focus:ring-[#E01E2E]/10 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Email Address</label>
                      <input 
                        type="email" required
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] focus:ring-2 focus:ring-[#E01E2E]/10 transition-all" 
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Phone Number</label>
                      <input 
                        type="tel" required
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9+]/g, '') })}
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] focus:ring-2 focus:ring-[#E01E2E]/10 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Inquiry Type</label>
                      <select 
                        required value={formData.inquiry} onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] focus:ring-2 focus:ring-[#E01E2E]/10 transition-all appearance-none"
                      >
                        <option value="" disabled>Select a category</option>
                        {['Digital Marketing', 'Content Production', 'Website', 'Ecommerce', 'Custom System', 'Software', 'AI Video', 'Studio', 'Other'].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-[#111111]">Subject</label>
                      <input 
                        type="text" required
                        value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-[52px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] px-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] focus:ring-2 focus:ring-[#E01E2E]/10 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-bold text-[#111111]">Message</label>
                    <textarea 
                      required
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[150px] bg-white border border-[rgba(17,17,17,0.08)] rounded-[12px] p-4 text-[14px] text-[#111111] focus:outline-none focus:border-[#E01E2E] focus:ring-2 focus:ring-[#E01E2E]/10 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" disabled={isLoading}
                    className={`w-full h-[52px] mt-4 text-white font-bold rounded-[12px] transition-all duration-300 flex items-center justify-center gap-2 ${
                      isLoading ? "bg-red-400 cursor-not-allowed" : "bg-[#E01E2E] hover:-translate-y-[2px] shadow-lg shadow-red-500/20"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full bg-white py-[96px] lg:py-[120px] border-t border-[rgba(17,17,17,0.04)]">
        <div className="w-full max-w-[800px] mx-auto px-6 md:px-8 text-center">
          <p className="text-[#E01E2E] text-[12px] font-bold uppercase tracking-[0.1em] mb-4">Questions? We’re Here to Help</p>
          <h2 className="text-[32px] md:text-[38px] font-bold leading-tight mb-16">Quick Answers to Common Questions</h2>
          
          <div className="flex flex-col gap-4 text-left">
            {[
              { q: "How soon will you reply?", a: "Our team reviews all inquiries promptly. We aim to respond within 1-2 business days with actionable next steps." },
              { q: "What information should I include?", a: "Please provide a brief overview of your business, your goals, and any specific challenges you're facing. The more context, the better." },
              { q: "Do you offer consultations?", a: "Yes. We offer an initial discovery consultation to understand your needs and determine how our ecosystem can best serve you." },
              { q: "What services do you provide?", a: "We provide end-to-end solutions including digital marketing, content production, web & ecommerce development, custom software, and AI systems." }
            ].map((faq, i) => (
              <div key={i} className="bg-[#FCFBFA] border border-[rgba(17,17,17,0.04)] rounded-[16px] p-6 hover:border-[rgba(17,17,17,0.08)] transition-colors">
                <h4 className="text-[16px] font-bold text-[#111111] mb-2">{faq.q}</h4>
                <p className="text-[14px] text-[#666A73] leading-[1.6]">{faq.a}</p>
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
              Ready to Build, Market & Scale Your Business?
            </h2>
            <p className="text-white/90 text-[16px] md:text-[18px]">
              Take the first step toward building your digital future.
            </p>
          </div>
          
          <div className="relative z-10">
            <button 
              onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
              className="bg-white text-[#E01E2E] h-[52px] px-8 rounded-[12px] font-bold flex items-center justify-center hover:bg-[#F7F7F6] hover:-translate-y-[2px] transition-all duration-200 shadow-xl"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}