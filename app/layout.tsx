import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shree L.R. Tiwari School of Business Management",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body className={`${manrope.className} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}