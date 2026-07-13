import SupportCTA from "@/components/home/SupportCTA";
import { Users, Target, Heart } from "lucide-react";

export const metadata = {
  title: "企業情報 | 未来介護ロボティクス",
  description: "未来介護ロボティクスの会社概要、ミッション、ビジョンをご紹介します。",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-mist-blue py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-dark-navy mb-4">企業情報</h1>
        <p className="text-soft-teal font-semibold tracking-widest uppercase">About Us</p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-dark-navy mb-6">人とテクノロジーの優しい共生</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-left md:text-center">
            私たちは、少子高齢化という社会課題に対し、最先端のロボティクスとAI技術で応えます。<br />
            介護される側の尊厳を守り、介護する側の負担を減らす。<br />
            テクノロジーがもたらすのは冷たさではなく、人が人を想う時間を増やすための温かいサポートです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-medical-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-dark-navy">Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">介護現場の重労働をゼロにし、質の高いケアに集中できる環境を創造する。</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-soft-teal" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-dark-navy">Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">すべての人が、最期まで自分らしく安全に暮らせる社会を実現する。</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-dark-navy">Value</h3>
            <p className="text-gray-600 text-sm leading-relaxed">技術力だけでなく、常に現場の声に耳を傾け、人間中心の設計を追求する。</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-mist-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-navy mb-12 text-center">会社概要</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <dl className="divide-y divide-gray-100">
              {[
                { label: "会社名", value: "未来介護ロボティクス株式会社 (Mirai Kaigo Robotics Co., Ltd.)" },
                { label: "設立", value: "2015年4月1日" },
                { label: "代表取締役", value: "未来 健太" },
                { label: "資本金", value: "5億円" },
                { label: "所在地", value: "〒100-0000 東京都千代田区未来ロボット街1-2-3 未来タワー 45F" },
                { label: "事業内容", value: "介護用ロボットの企画・開発・製造・販売、ヘルスケアIoTシステムの構築・提供" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col sm:flex-row px-6 py-5">
                  <dt className="w-full sm:w-1/3 text-sm font-semibold text-gray-900 mb-1 sm:mb-0">{item.label}</dt>
                  <dd className="w-full sm:w-2/3 text-sm text-gray-600">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <SupportCTA />
    </div>
  );
}
