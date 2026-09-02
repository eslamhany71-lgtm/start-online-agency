"use client";
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
  ];

  return (
    <main className="min-h-screen bg-[#FAFBFC] pt-32 pb-20 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-tl from-red-50 to-transparent rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-[20%] -left-[10%] w-[700px] h-[700px] bg-gradient-to-br from-red-50/50 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center mb-16">
          <div className="w-24 h-1 bg-[#E01E2E] rounded-full mx-auto mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
            Build the Future <span className="text-[#E01E2E]">With Us</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Join Start Online Agency and work on scaling disruptive products, advanced ERP systems, and next-generation digital architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#E01E2E] rounded-full inline-block"></span>
              Open Positions
            </h2>
            
            {jobs.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="inline-block text-xs font-bold text-[#E01E2E] bg-red-50 px-2.5 py-1 rounded-md mb-2">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                      <span className="flex items-center gap-1">📍 {job.location}</span>
                      <span className="flex items-center gap-1">💼 {job.type}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setFormData({ ...formData, position: job.title })}
                    className="sm:self-center px-5 py-2.5 bg-white border border-gray-200 text-gray-800 font-bold text-sm rounded-xl hover:border-[#E01E2E] hover:text-[#E01E2E] active:scale-95 transition-all whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm relative">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Quick Application</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application Sent!</h3>
                <p className="text-gray-500 text-sm font-medium">
                  Thank you for applying. Our team will review your profile and get back to you soon.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-bold text-[#E01E2E] hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Eslam Hany"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number</label>
                    <div className="flex gap-2">
                      {/* قائمة اختيار كود الدولة */}
                      <select 
                        value={formData.phoneCode}
                        onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                        className="w-[35%] px-2 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-bold text-gray-800"
                      >
                        {countryCodes.map((c, i) => (
                          <option key={i} value={c.code}>{c.country}</option>
                        ))}
                      </select>
                      
                      {/* خانة إدخال الرقم (محددة بأرقام فقط) */}
                      <input 
                        type="tel" 
                        required
                        maxLength={15} // أقصى عدد للأرقام
                        value={formData.phone}
                        onChange={(e) => {
                          // هذا السطر يمسح أي حروف ويكتب أرقام فقط
                          const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
                          setFormData({ ...formData, phone: onlyNumbers });
                        }}
                        placeholder="100 123 4567"
                        className="w-[65%] px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Position</label>
                  <select 
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-bold text-gray-800"
                  >
                    {jobs.map((job, i) => (
                      <option key={i} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Resume / Portfolio Link</label>
                  <input 
                    type="url" 
                    required
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Message / Note</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us briefly about your experience..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#E01E2E] focus:bg-white transition-all font-medium text-gray-900 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-md ${
                    isLoading ? "bg-red-400 cursor-not-allowed" : "bg-[#E01E2E] hover:bg-red-700 active:scale-95 shadow-red-500/20"
                  } mt-2 flex items-center justify-center gap-2`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
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
    </main>
  );
}