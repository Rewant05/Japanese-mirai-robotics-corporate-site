"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Activity } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "製品情報", href: "/products" },
    { name: "テクノロジー", href: "/technology" },
    { name: "導入事例", href: "/case-studies" },
    { name: "企業情報", href: "/about" },
    { name: "サポート", href: "/support" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Activity className="h-8 w-8 text-soft-teal group-hover:text-medical-blue transition-colors duration-300" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-dark-navy">未来介護ロボティクス</span>
              <span className="text-[10px] text-gray-500 tracking-widest font-medium">介護ロボット開発・運用支援</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-medical-blue transition-colors"
              >
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-medical-blue hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-dark-navy focus:outline-none p-2"
              aria-label="メニューを開閉"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 py-4 shadow-lg" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-base font-medium text-gray-800 hover:text-medical-blue py-2 border-b border-gray-50"
              onClick={() => setIsOpen(false)}
            >
              <span>{link.name}</span>
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full text-center bg-medical-blue text-white px-4 py-3 rounded-lg text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
