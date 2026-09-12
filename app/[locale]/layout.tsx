import type { Metadata } from "next";
import "../globals.css"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { getDictionary } from "../../dictionaries/getDictionary";

export const metadata: Metadata = {
  title: "Start Online Agency | Holding Company",
  description: "Building Businesses, Software & Digital Growth",
  icons: {
    icon: "/images/528071b5-c4d1-486b-8357-2a74c897870d-removebg-preview.png",
  },
};

export default async function RootLayout({
  children,
  params: { locale }, 
}: Readonly<{
  children: React.ReactNode;
  params: { locale: 'en' | 'ar' };
}>) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} dir={dir}>
      <body className="bg-white text-foreground antialiased selection:bg-primary/20 selection:text-primary flex flex-col min-h-screen">
        
        {/* مررنا الترجمة هنا */}
        <Navbar locale={locale} dict={dict.nav} />
        
        <div className="pt-20 flex-grow">
          {children}
        </div>

        {/* ومررناها هنا */}
        <Footer locale={locale} dict={dict.footer} />
        
        <ScrollToTop />
      </body>
    </html>
  );
}