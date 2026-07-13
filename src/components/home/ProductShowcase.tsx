"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current, 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      // Cards Stagger Animation
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children, 
          { y: 50, opacity: 0 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      id: "hikari",
      name: "HIKARI",
      jpName: "歩行支援ロボット",
      description: "AIが使用者の歩行パターンを学習し、最適なアシスト力を提供。転倒防止機能も搭載。",
      icon: <Activity className="w-8 h-8 text-medical-blue" />,
      color: "bg-blue-50",
      image: "/images/hikari-product.png"
    },
    {
      id: "mamori",
      name: "MAMORI",
      jpName: "見守りセンサー",
      description: "非接触型のバイタルセンサー。心拍・呼吸・体動を24時間モニタリングし、異常を即座に通知。",
      icon: <ShieldCheck className="w-8 h-8 text-soft-teal" />,
      color: "bg-teal-50",
      image: "/images/mamori-product.png"
    },
    {
      id: "yasuragi",
      name: "YASURAGI",
      jpName: "移乗補助アーム",
      description: "ベッドから車椅子への移乗を安全かつスムーズにサポート。介護者の腰への負担を大幅に軽減します。",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50",
      image: "/images/yasuragi-product.png"
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">主要製品</h2>
          <p className="text-sm font-semibold text-soft-teal tracking-widest uppercase">Our Products</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Product Image Area */}
              <div className={`relative w-full h-56 ${product.color} overflow-hidden`}>
                {product.image ? (
                  <Image 
                    src={product.image} 
                    alt={product.jpName} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                   <div className="w-full h-full flex items-center justify-center opacity-20">
                     {product.icon}
                   </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform translate-y-1/2">
                  {product.icon}
                </div>
              </div>
              
              <div className="pt-10 pb-8 px-8 relative z-10 flex-grow flex flex-col">
                <h3 className="text-sm text-gray-500 font-medium mb-1">{product.jpName}</h3>
                <h4 className="text-2xl font-bold text-dark-navy mb-4 tracking-tight">{product.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{product.description}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={`/products#${product.id}`}
                    className="inline-flex items-center text-medical-blue font-medium group-hover:text-soft-teal transition-colors"
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
