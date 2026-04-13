import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Arpan Biswas | Portfolio",
  description: "Portfolio of Arpan Biswas – CSE (AI-ML) student, software engineer, and AI enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <CustomCursor />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
