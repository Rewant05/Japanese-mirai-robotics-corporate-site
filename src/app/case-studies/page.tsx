"use client";

import { useEffect, useRef } from "react";
import SupportCTA from "@/components/home/SupportCTA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesBackground from "@/components/3d/ParticlesBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CaseStudiesPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Cards Stagger
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const cases = [
    {
      id: 1,
      title: "スタッフの腰痛発生率が激減。コミュニケーションの時間が増加",
      facility: "特別養護老人ホーム 陽だまり 様",
      product: "YASURAGI (移乗補助アーム)",
      tag: "介護老人福祉施設",
      tagColor: "bg-medical-blue",
      excerpt: "慢性的な人手不足とスタッフの腰痛問題に悩まされていました。YASURAGI導入後、移乗介助の身体的負担がほぼゼロになり、離職率の大幅な改善に繋がっています。",
      image: "/images/case-study-1.png"
    },
    {
      id: 2,
      title: "客観的なデータに基づいた新しい歩行リハビリの形",
      facility: "みらい記念病院 様",
      product: "HIKARI (歩行支援ロボット)",
      tag: "リハビリテーション病院",
      tagColor: "bg-soft-teal",
      excerpt: "患者様の歩行状態がアプリで数値化されるため、より的確な指導が可能になりました。患者様自身のモチベーションも上がり、回復スピードの向上が見られます。",
      image: "/images/case-study-2.png"
    },
    {
      id: 3,
      title: "夜間の見守り業務を自動化し、夜勤スタッフの精神的負担を軽減",
      facility: "介護付き有料老人ホーム 結び 様",
      product: "MAMORI (見守りセンサー)",
      tag: "有料老人ホーム",
      tagColor: "bg-purple-600",
      excerpt: "不要な訪室が減り、本当に入居者様が支援を必要としているタイミングで的確なケアができるようになりました。睡眠状態も把握できるため、日中のケアプラン改善にも役立っています。",
      image: "/images/case-study-3.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header section with 3D Background */}
      <section className="relative bg-dark-navy py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <ParticlesBackground />
        <div ref={titleRef} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">導入事例</h1>
          <p className="text-soft-teal font-semibold tracking-widest uppercase">Case Studies</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((study) => (
            <div key={study.id} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className={`${study.tagColor} text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm backdrop-blur-sm`}>
                    {study.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
                <div className="mb-4">
                  <span className="text-xs font-bold text-gray-500 tracking-wider">導入製品: {study.product}</span>
                </div>
                <h2 className="text-xl font-bold text-dark-navy mb-4 line-clamp-2 leading-tight group-hover:text-medical-blue transition-colors">{study.title}</h2>
                <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">{study.excerpt}</p>
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <p className="text-sm font-bold text-dark-navy mb-1">{study.facility}</p>
                  <Link href={`/case-studies/${study.id}`} className="inline-flex items-center text-medical-blue font-medium group-hover:text-soft-teal transition-colors mt-4 text-sm">
                    インタビューを読む
                    <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">その他、全国500以上の施設・病院への導入実績がございます。</p>
        </div>
      </section>

      <SupportCTA />
    </div>
  );
}
