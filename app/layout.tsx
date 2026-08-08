import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // سحبنا الفوتر هنا

export const metadata: Metadata = {
  title: "Start Online Agency | Holding Company",
  description: "Building Businesses, Software & Digital Growth",
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
      </body>
    </html>
  );
}