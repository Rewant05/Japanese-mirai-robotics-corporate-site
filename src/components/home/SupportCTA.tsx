import Link from "next/link";
import { HeadphonesIcon, MessageCircle } from "lucide-react";

export default function SupportCTA() {
  return (
    <section className="py-20 bg-medical-blue text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">導入に向けたご相談を承ります</h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
          専任のコンサルタントが、貴施設の課題に合わせた最適なロボティクス・ソリューションをご提案します。オンラインでのデモも実施中です。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/contact"
            className="bg-white text-medical-blue hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-medium transition-colors shadow-lg flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            お問い合わせ
          </Link>
          <a
            href="tel:0312345678"
            className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center justify-center"
          >
            <HeadphonesIcon className="w-5 h-5 mr-2" />
            03-1234-5678
          </a>
        </div>
        <p className="mt-6 text-sm text-blue-200">受付時間：平日 9:00 - 18:00（土日祝除く）</p>
      </div>
    </section>
  );
}
