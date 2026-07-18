"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import useDesktopMotion from "@/hooks/useDesktopMotion";

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const enableMotion = useDesktopMotion();

  useEffect(() => {
    if (!enableMotion) return;

    let ctx: { revert: () => void } | undefined;
    let mounted = true;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (!mounted) return;

        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          if (cardsRef.current) {
            gsap.fromTo(
              cardsRef.current.children,
              { x: (i: number) => (i % 2 === 0 ? -50 : 50), opacity: 0 },
              {
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 75%",
                },
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
              }
            );
          }
        }, sectionRef);
      }
    );

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, [enableMotion]);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">導入事例</h2>
            <p className="text-sm font-semibold text-soft-teal tracking-widest">現場から届いた声</p>
          </div>
          <Link
            href="/case-studies"
            className="hidden md:inline-flex items-center text-medical-blue font-medium hover:text-soft-teal transition-colors"
          >
            すべての事例を見る
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-mist-blue rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition-shadow">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-white opacity-50 transform rotate-180" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center space-x-2">
                <span className="bg-medical-blue text-white text-xs px-3 py-1 rounded-full font-medium">介護老人福祉施設</span>
              </div>
              <p className="text-lg text-dark-navy font-medium mb-6 leading-relaxed">
                「『やすらぎ』の導入により、スタッフの腰痛発生率が激減しました。移乗介助にかかる時間も短縮され、入居者様とのコミュニケーションの時間が増えました。」
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-sm font-bold text-dark-navy">特別養護老人ホーム 陽だまり 様</p>
                  <p className="text-xs text-gray-500">施設長 山田 太郎 氏</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-mist-blue rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition-shadow">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-white opacity-50 transform rotate-180" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center space-x-2">
                <span className="bg-soft-teal text-white text-xs px-3 py-1 rounded-full font-medium">リハビリテーション病院</span>
              </div>
              <p className="text-lg text-dark-navy font-medium mb-6 leading-relaxed">
                「『ひかり』を使った歩行訓練は、患者様のモチベーション向上に大きく貢献しています。データに基づいた客観的な評価が可能になりました。」
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-sm font-bold text-dark-navy">みらい記念病院 様</p>
                  <p className="text-xs text-gray-500">理学療法士 佐藤 花子 氏</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-medical-blue font-medium hover:text-soft-teal transition-colors"
          >
            すべての事例を見る
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
