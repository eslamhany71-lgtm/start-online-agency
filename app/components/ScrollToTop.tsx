"use client";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // مراقبة النزول في الصفحة
  useEffect(() => {
    const toggleVisibility = () => {
      // الزرار هيظهر لو العميل نزل أكتر من 300 بيكسل
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // دالة الصعود لأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[150] p-3 rounded-full bg-[#E01E2E] text-white shadow-lg hover:bg-red-700 hover:-translate-y-1 transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* سهم أنيق طالع لفوق */}
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}