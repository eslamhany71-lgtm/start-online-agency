import type { Metadata } from "next";
import { Inter } from "next/font/google"; // أو الخط اللي بتستخدمه
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Start Online Agency | Digital Growth",
  description: "We build, market, and scale digital businesses.",
  icons: {
    // السطر ده هو اللي هيغير الأيقونة اللي فوق للوجو بتاعك
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}