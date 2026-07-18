import SupportCTA from "@/components/home/SupportCTA";
import { FileText, Wrench, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "サポート | 未来介護ロボティクス",
  description: "製品のサポート情報、よくあるご質問、保守メンテナンスについてご案内します。",
};

export default function SupportPage() {
  const faqs = [
    {
      q: "導入前にデモ機を試すことは可能ですか？",
      a: "はい、可能です。実際の施設環境で1週間の無料トライアルを実施しております。担当者が設置と基本的な操作説明に伺います。"
    },
    {
      q: "スタッフが情報機器に不慣れですが、使いこなせますか？",
      a: "現場の方々が直感的に操作できるよう、シンプルなボタン配置と音声ガイダンスを採用しています。また、導入時のスタッフ向け講習会も無償で実施しております。"
    },
    {
      q: "故障した際の対応はどうなりますか？",
      a: "全国にサポート拠点を配置しており、万が一のトラブル時は24時間365日受付、最短当日中に代替機の手配または修理対応を行います（保守プラン加入の場合）。"
    },
    {
      q: "補助金を利用しての導入は可能ですか？",
      a: "各種「介護ロボット導入支援事業」などの補助金対象製品となっています。申請サポート専門のチームが、書類作成の段階からお手伝いいたします。"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-mist-blue py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-dark-navy mb-4">サポートセンター</h1>
        <p className="text-soft-teal font-semibold tracking-widest">サポート情報</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-medical-blue transition-colors group">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-medical-blue transition-colors">
              <FileText className="w-8 h-8 text-medical-blue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-dark-navy mb-3">取扱説明書・マニュアル</h3>
            <p className="text-gray-600 text-sm mb-6">各製品の最新マニュアルや、動画による操作ガイドをご覧いただけます。</p>
            <Link href="#" className="text-medical-blue font-medium hover:underline">ダウンロード一覧へ</Link>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-soft-teal transition-colors group">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-soft-teal transition-colors">
              <Wrench className="w-8 h-8 text-soft-teal group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-dark-navy mb-3">保守・メンテナンス</h3>
            <p className="text-gray-600 text-sm mb-6">定期点検プランのご案内や、修理のお申し込みはこちらから。</p>
            <Link href="#" className="text-soft-teal font-medium hover:underline">メンテナンス詳細へ</Link>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-purple-500 transition-colors group">
            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors">
              <HelpCircle className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-dark-navy mb-3">よくあるご質問</h3>
            <p className="text-gray-600 text-sm mb-6">お客様から寄せられるご質問とその回答をまとめています。</p>
            <a href="#faq" className="text-purple-500 font-medium hover:underline">質問を見る</a>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto scroll-mt-32">
          <h2 className="text-3xl font-bold text-dark-navy mb-10 text-center">よくあるご質問</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-mist-blue rounded-2xl p-6">
                <h3 className="text-lg font-bold text-dark-navy mb-3 flex items-start">
                  <span className="text-medical-blue mr-3 shrink-0">問</span>
                  {faq.q}
                </h3>
                <div className="text-gray-700 flex items-start">
                  <span className="text-soft-teal mr-3 font-bold shrink-0">答</span>
                  <p className="leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SupportCTA />
    </div>
  );
}
