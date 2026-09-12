import type { Metadata } from "next";
import "../globals.css"; // لاحظ تعديل المسار
import Navbar from "../../components/Navbar"; // لاحظ تعديل المسار
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Start Online Agency | Holding Company",
  description: "Building Businesses, Software & Digital Growth",
  icons: {
    icon: "/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
  params: { locale }, // هنا بنسحب اللغة من الرابط
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // تحديد اتجاه الصفحة بناءً على اللغة
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className="bg-white text-foreground antialiased selection:bg-primary/20 selection:text-primary flex flex-col min-h-screen">
        
        {/* بنمرر اللغة للناف بار عشان يديها لزرار الترجمة */}
        <Navbar locale={locale} />
        
        {/* المحتوى الرئيسي للموقع */}
        <div className="pt-20 flex-grow">
          {children}
        </div>

        {/* الفوتر دايماً تحت */}
        <Footer />

        {/* زرار الطلوع لفوق */}
        <ScrollToTop />
      </body>
    </html>
  );
}