"use client";

import { useEffect, useRef } from "react";
import { Building2, Home, Hospital } from "lucide-react";
import useDesktopMotion from "@/hooks/useDesktopMotion";

export default function CareWorkflow() {
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
              { scale: 0.9, y: 40, opacity: 0 },
              {
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 75%",
                },
                scale: 1,
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.2)",
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
    <section ref={sectionRef} className="py-24 bg-mist-blue relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">あらゆる現場で活躍</h2>
          <p className="text-sm font-semibold text-soft-teal tracking-widest">ケア現場別の活用例</p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            施設、病院、そして在宅まで。それぞれの環境に合わせたソリューションで、ケアの質を向上させます。
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-medical-blue" />
            </div>
            <h3 className="text-xl font-bold text-dark-navy mb-3">介護施設</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              スタッフの身体的負担を軽減し、離職率の低下に貢献。夜間の見守り業務を自動化し、より人間らしいケアに時間を割くことができます。
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
              <Hospital className="w-7 h-7 text-soft-teal" />
            </div>
            <h3 className="text-xl font-bold text-dark-navy mb-3">医療機関</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              リハビリテーションの効率化と患者の早期回復をサポート。正確なバイタルデータの記録により、医療ミスを防ぎます。
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <Home className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-dark-navy mb-3">在宅介護</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              家族の介護負担を減らし、住み慣れた自宅での生活を長く続けられるよう支援。遠隔地からでも家族の安全を確認できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
