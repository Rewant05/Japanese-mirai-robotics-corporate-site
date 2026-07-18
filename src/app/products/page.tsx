import SupportCTA from "@/components/home/SupportCTA";
import { Activity, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "製品情報 | 未来介護ロボティクス",
  description: "ひかり、まもり、やすらぎなど、最先端の介護ロボット製品ラインアップをご紹介します。",
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <section className="bg-mist-blue py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-dark-navy mb-4">製品情報</h1>
        <p className="text-soft-teal font-semibold tracking-widest">製品ラインアップ</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {/* Product 1 */}
        <div id="hikari" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-blue-50 rounded-3xl p-12 h-96 flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-medical-blue rounded-full opacity-5 -mr-32 -mt-32 transform group-hover:scale-110 transition-transform duration-700"></div>
               <Activity className="w-32 h-32 text-medical-blue opacity-80" />
               <div className="mt-8 text-center text-medical-blue tracking-widest opacity-60">ひかり・歩行支援</div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-medical-blue font-semibold text-sm">歩行支援ロボット</span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mt-2 mb-6">ひかり</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                高齢者の歩行を優しく、力強くサポートするウェアラブルデバイス。
                独自の人工知能アルゴリズムが歩行パターンを瞬時に学習し、一人ひとりに合わせた最適なアシスト力を提供します。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "超軽量設計（本体重量わずか1.5kg）",
                  "人工知能による転倒予知と自動バランス補正",
                  "1回の充電で約8時間の連続稼働",
                  "専用アプリで歩行データの記録・分析が可能"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-medical-blue mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-medical-blue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
                資料請求・お問い合わせ
              </Link>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div id="mamori" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-soft-teal font-semibold text-sm">見守りセンサー</span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mt-2 mb-6">まもり</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                プライバシーに配慮した非接触型のバイタルセンシングシステム。
                カメラを使わずに、心拍、呼吸、体動を24時間ミリ波レーダーで高精度にモニタリングします。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "カメラ不要でプライバシーを完全保護",
                  "ミリ波レーダーによる高精度バイタル検知",
                  "ベッドからの起き上がりや離床を瞬時にナースコールへ通知",
                  "睡眠の質（浅い/深い）の長期的なデータ蓄積"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-soft-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-soft-teal text-white px-8 py-3 rounded-full font-medium hover:bg-teal-500 transition-colors shadow-sm">
                資料請求・お問い合わせ
              </Link>
            </div>
            <div className="bg-teal-50 rounded-3xl p-12 h-96 flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-soft-teal rounded-full opacity-5 -mr-32 -mt-32 transform group-hover:scale-110 transition-transform duration-700"></div>
               <ShieldCheck className="w-32 h-32 text-soft-teal opacity-80" />
               <div className="mt-8 text-center text-soft-teal tracking-widest opacity-60">まもり・見守りセンサー</div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div id="yasuragi" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-purple-50 rounded-3xl p-12 h-96 flex flex-col items-center justify-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full opacity-5 -mr-32 -mt-32 transform group-hover:scale-110 transition-transform duration-700"></div>
               <Zap className="w-32 h-32 text-purple-600 opacity-80" />
               <div className="mt-8 text-center text-purple-600 tracking-widest opacity-60">やすらぎ・移乗補助</div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-purple-600 font-semibold text-sm">移乗補助アーム</span>
              <h2 className="text-3xl md:text-5xl font-bold text-dark-navy mt-2 mb-6">やすらぎ</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                介護者の腰痛リスクをなくし、患者様にも安心感を与える次世代型の移乗補助ロボットアーム。
                ベッドから車椅子、トイレへの移乗を指先一つの軽い力でコントロールできます。
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "耐荷重120kg、あらゆる体格の患者様に対応",
                  "力覚センサーによる直感的な操縦",
                  "優しく抱きかかえるような特殊スリングシート",
                  "コンパクト設計で狭い病室や居室でも使用可能"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-500 transition-colors shadow-sm">
                資料請求・お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <SupportCTA />
    </div>
  );
}
