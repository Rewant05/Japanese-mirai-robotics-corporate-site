"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import useDesktopMotion from "@/hooks/useDesktopMotion";

const InteractiveRobot = dynamic(() => import("@/components/3d/InteractiveRobot"), {
  ssr: false,
  loading: () => <div className="w-full h-[600px]" aria-hidden="true" />,
});

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const enableMotion = useDesktopMotion(768);
  const showInteractiveRobot = useDesktopMotion(1024);

  useEffect(() => {
    if (!enableMotion) return;

    let ctx: { revert: () => void } | undefined;
    let mounted = true;

    import("gsap").then(({ default: gsap }) => {
      if (!mounted) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-bg",
          { scale: 1.1 },
          {
            scale: 1,
            duration: 3,
            ease: "power2.out",
          }
        );

        gsap.fromTo(
          ".hero-element",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }, heroRef);
    });

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, [enableMotion]);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-dark-navy">
      {/* Real Background Image */}
      <div className="absolute inset-0 z-0 hero-bg">
        <Image 
          src="/images/hero-bg.png" 
          alt="明るい介護施設の共用スペース"
          fill 
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20">
        
        <div ref={textRef} className="flex flex-col items-start text-left">
          <span className="hero-element text-soft-teal font-bold tracking-widest text-sm mb-4 bg-white/80 px-4 py-1 rounded-full shadow-sm">次世代ケア支援</span>
          <h1 className="hero-element text-4xl md:text-6xl lg:text-7xl font-extrabold text-dark-navy tracking-tight mb-6 leading-tight">
            温もりと、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-blue to-soft-teal">テクノロジー</span>の融合。
          </h1>
          <p className="hero-element mt-4 text-lg md:text-xl text-gray-700 max-w-xl text-balance mb-10 leading-relaxed font-medium">
            最新のロボティクス技術で、介護現場に新しい未来を。<br className="hidden md:block" />
            高齢者の自立を助け、介護者の負担を減らす、人に優しいスマートデバイス。
          </p>
          
          <div className="hero-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/products"
              className="w-full sm:w-auto bg-medical-blue hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-1"
            >
              製品を見る
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white border border-gray-200 hover:border-soft-teal hover:text-soft-teal text-dark-navy px-8 py-4 rounded-full text-lg font-medium transition-all shadow-md flex items-center justify-center transform hover:-translate-y-1"
            >
              導入のご相談
            </Link>
          </div>
        </div>

        {showInteractiveRobot ? (
          <div className="hero-element hidden lg:flex justify-center items-center w-full h-full">
            <InteractiveRobot />
          </div>
        ) : null}

      </div>
    </section>
  );
}
