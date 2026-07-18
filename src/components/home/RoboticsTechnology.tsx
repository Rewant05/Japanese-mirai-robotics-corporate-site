"use client";

import { useEffect, useRef } from "react";
import { Cpu, HeartPulse, Shield } from "lucide-react";
import useDesktopMotion from "@/hooks/useDesktopMotion";

export default function RoboticsTechnology() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);
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
          if (textContentRef.current) {
            gsap.fromTo(
              textContentRef.current.children,
              { x: -50, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 70%",
                },
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
              }
            );
          }

          if (graphicRef.current) {
            gsap.fromTo(
              graphicRef.current,
              { x: 50, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 60%",
                },
                x: 0,
                opacity: 1,
                duration: 1,
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
    <section ref={sectionRef} className="py-24 bg-dark-navy text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-soft-teal to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={textContentRef}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">最先端のテクノロジー</h2>
            <p className="text-sm font-semibold text-soft-teal tracking-widest mb-8">安全を支える中核技術</p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-10 text-balance">
              私たちのロボットは、単に力仕事をするだけではありません。高度な人工知能とセンサー技術により、使用者の状態を常に把握し、最も安全で快適なサポートを提供します。
            </p>
            
            <div className="space-y-8">
              <div className="flex group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Cpu className="w-6 h-6 text-soft-teal" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">予測型人工知能アルゴリズム</h3>
                  <p className="text-gray-400 text-sm">ミリ秒単位で姿勢や動きを解析し、次の動作を予測して最適なアシストを行います。</p>
                </div>
              </div>
              
              <div className="flex group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <HeartPulse className="w-6 h-6 text-medical-blue" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">生体情報センシング</h3>
                  <p className="text-gray-400 text-sm">非接触でバイタルデータを取得し、体調の急変を未然に防ぐ早期アラートシステム。</p>
                </div>
              </div>
              
              <div className="flex group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">フェイルセーフ設計</h3>
                  <p className="text-gray-400 text-sm">電源喪失時やセンサー異常時でも、使用者の安全を最優先に確保するハードウェア設計。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={graphicRef} className="relative h-[500px] rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 flex items-center justify-center overflow-hidden group">
            {/* Simulated UI/Tech graphic */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGEyMCAyMCAwIDEgMCAwLTQwIDIwIDIwIDAgMCAwIDAgNDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KCTwvc3ZnPg==')]"></div>
            
            <div className="relative z-10 w-full max-w-sm">
               <div className="bg-gray-800/80 rounded-2xl p-6 border border-gray-700 shadow-2xl backdrop-blur-md transform group-hover:scale-105 transition-transform duration-700">
                 <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
                   <span className="text-soft-teal text-sm font-semibold tracking-widest">稼働状態</span>
                   <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-teal opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-soft-teal"></span>
                    </span>
                 </div>
                 <div className="space-y-4">
                   <div className="h-2 bg-gray-700 rounded overflow-hidden">
                     <div className="h-full bg-medical-blue w-3/4"></div>
                   </div>
                   <div className="flex justify-between text-xs text-gray-400 font-mono">
                     <span>動作連携</span>
                     <span>75%</span>
                   </div>
                   <div className="h-2 bg-gray-700 rounded overflow-hidden">
                     <div className="h-full bg-soft-teal w-11/12"></div>
                   </div>
                   <div className="flex justify-between text-xs text-gray-400 font-mono">
                     <span>安全確認</span>
                     <span>98%</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
