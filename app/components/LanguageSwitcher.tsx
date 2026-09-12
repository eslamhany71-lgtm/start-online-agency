"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname();
  
  const targetLocale = currentLocale === "en" ? "ar" : "en";
  const targetLabel = currentLocale === "en" ? "ع" : "EN";
  
  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; // استبدال مسار اللغة
    return segments.join("/");
  };

  return (
    <Link 
      href={redirectedPathName(targetLocale)} 
      className="flex items-center justify-center font-bold text-[13px] w-9 h-9 rounded-full border border-[rgba(17,17,17,0.1)] text-[#111111] hover:bg-gray-50 transition-colors"
      aria-label="Toggle Language"
    >
      {targetLabel}
    </Link>
  );
}