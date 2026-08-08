/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // الألوان الجديدة بناءً على صورة Apple-style
        background: "#FFFFFF",
        foreground: "#0F172A", // لون نص غامق جداً واحترافي
        primary: {
          DEFAULT: "#E01E2E", // الأحمر الصريح بتاع اللوجو
          light: "#FEE2E2",  // أحمر خفيف جداً للخلفيات
        },
        silver: {
          DEFAULT: "#64748B", // رمادي نصوص فرعية
          light: "#F8FAF C",  // رمادي فاتح جداً للأقسام
        }
      },
    },
  },
  plugins: [],
}