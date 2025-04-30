import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Navbar from "./(main)/Navbar";
import Footer from "./(main)/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ClayBlossoms - Handcrafted Pottery",
  description: "Discover unique, handcrafted pottery pieces that bring warmth and character to your space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrelineScript />
        <Toaster />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
