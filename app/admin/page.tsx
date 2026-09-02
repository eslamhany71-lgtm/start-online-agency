"use client";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const ADMIN_PASSWORD = "StartOnline2026";
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [applications, setApplications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchApplications();
    } else {
      alert("كلمة المرور غير صحيحة!");
    }
  };

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      // تم تصحيح المسار هنا
      const res = await fetch("/api/careers/admin", { cache: "no-store" });
      const data = await res.json();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

// ... (باقي كود الـ HTML زي ما هو بالظبط بدون أي تغيير)

  // شاشة تسجيل الدخول (لو لسه مدخلش الباسوورد)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full border border-gray-100">
          <div className="w-16 h-1 bg-[#E01E2E] rounded-full mx-auto mb-6"></div>
          <h1 className="text-2xl font-extrabold text-center text-gray-900 mb-6">Admin Access Only</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#E01E2E] text-center font-bold tracking-widest"
            />
            <button type="submit" className="w-full py-3 bg-[#1A1A1A] text-white font-bold rounded-xl hover:bg-[#E01E2E] transition-all">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // لوحة التحكم (بتظهر بعد الباسوورد الصح)
  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Applications Dashboard</h1>
            <p className="text-gray-500 font-medium mt-1">Manage all incoming job applications</p>
          </div>
          <div className="bg-red-50 text-[#E01E2E] px-4 py-2 rounded-lg font-bold text-sm">
            Total: {applications.length}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center text-gray-500 font-bold">Loading data...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-4 font-bold text-gray-600 text-sm">Name</th>
                    <th className="p-4 font-bold text-gray-600 text-sm">Contact</th>
                    <th className="p-4 font-bold text-gray-600 text-sm">Position</th>
                    <th className="p-4 font-bold text-gray-600 text-sm">Date</th>
                    <th className="p-4 font-bold text-gray-600 text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-bold text-gray-900">{app.name}</td>
                      <td className="p-4">
                        <div className="text-sm font-medium text-gray-600">{app.email}</div>
                        <div className="text-sm font-bold text-[#E01E2E]">{app.phone}</div>
                      </td>
                      <td className="p-4 text-sm font-bold text-gray-700">{app.position}</td>
                      <td className="p-4 text-sm font-medium text-gray-500">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <a 
                          href={app.portfolio} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-100 text-gray-800 text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          View Resume
                        </a>
                      </td>
                    </tr>
                  ))}
                  {applications.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-gray-500 font-medium">
                        No applications yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}