import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // استدعاء زرار الطلوع لفوق

export const metadata: Metadata = {
  title: "Start Online Agency | Holding Company",
  description: "Building Businesses, Software & Digital Growth",
  icons: {
    // السطر ده هو اللي بيضيف اللوجو كأيقونة للموقع فوق في المتصفح
    icon: "/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-foreground antialiased selection:bg-primary/20 selection:text-primary flex flex-col min-h-screen">
        <Navbar />
        
        {/* المحتوى الرئيسي للموقع */}
        <div className="pt-20 flex-grow">
          {children}
        </div>

        {/* الفوتر دايماً تحت */}
        <Footer />
        // Test Git

        {/* زرار الطلوع لفوق اللي هيظهر في كل الصفحات */}
        <ScrollToTop />
      </body>
    </html>
  );
}