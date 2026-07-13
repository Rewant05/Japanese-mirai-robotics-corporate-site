import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "未来介護ロボティクス | Mirai Kaigo Robotics",
  description: "次世代の介護・医療を支える先進的なロボティクス技術。歩行支援ロボット、見守りセンサー、移乗補助アームなど、安心と信頼のケアテクノロジー。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden bg-mist-blue text-dark-navy`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
