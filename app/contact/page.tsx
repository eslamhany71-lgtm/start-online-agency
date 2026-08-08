"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // مستقبلاً في الـ Backend هيتم ربط هذا الجزء بـ Firebase أو MySQL لحفظ الرسائل فوراً
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFBFC] pt-32 pb-20 relative overflow-hidden">
      
      {/* الخلفية التناغمية المتموجة */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[15%] w-[700px] h-[700px] bg-gradient-to-tl from-red-50 via-transparent to-transparent rounded-full blur-3xl opacity-80"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-red-50/40 via-transparent to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-[#E01E2E] rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
            Let's Start a <span className="text-[#E01E2E]">Conversation</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Have an idea, project, or want to explore our digital solutions? Reach out and let's scale together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* الجزء الأيسر: معلومات الاتصال (يأخذ 5 أعمدة) */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* العنوان */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E01E2E] flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200 text-sm">Our HQ</h4>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">Cairo Office, Egypt</p>
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E01E2E] flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200 text-sm">Email Us</h4>
                    <p className="text-gray-400 text-sm mt-1">info@startonline.agency</p>
                  </div>
                </div>

                {/* ساعات العمل */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E01E2E] flex-shrink-0">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200 text-sm">Working Hours</h4>
                    <p className="text-gray-400 text-sm mt-1">Sunday - Thursday<br />9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* تزيين بلمسة فنية أسفل الكارت */}
            <div className="mt-16 pt-8 border-t border-white/10 relative z-10">
              <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase">
                Start Online Holding Group
              </p>
            </div>
          </div>

          {/* الجزء الأيمن: فورم إرسال الرسالة (يأخذ 7 أعمدة) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-gray-500 font-medium max-w-sm mx-auto">
                  Thank you, {formData.name}. Our strategic team will review your message and reach out within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm rounded-xl transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Eslam Hany"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Inquiry Type</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-bold text-gray-800"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Business Partnership">Business Partnership / Venture</option>
                    <option value="ERP Custom Solution">Custom ERP System (Niva Dent)</option>
                    <option value="E-Commerce Consultation">E-Commerce Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your project or inquiry..."
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900 resize-none leading-relaxed"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#E01E2E] text-white font-bold rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/10"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}