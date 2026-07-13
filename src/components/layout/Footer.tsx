import Link from "next/link";
import { Activity, Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy text-white pt-16 pb-8 border-t-4 border-soft-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-soft-teal" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">未来介護ロボティクス</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest">Mirai Kaigo Robotics</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mt-4">
              人とロボットが共生する、新しい介護の形を創造します。最先端のAIとロボティクス技術で、介護現場の負担軽減と高齢者の自立支援を実現します。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="border-b-2 border-soft-teal pb-1">サービス・製品</span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "製品一覧", href: "/products" },
                { name: "歩行支援ロボット「HIKARI」", href: "/products#hikari" },
                { name: "見守りセンサー「MAMORI」", href: "/products#mamori" },
                { name: "移乗補助アーム「YASURAGI」", href: "/products#yasuragi" },
                { name: "コア・テクノロジー", href: "/technology" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-soft-teal flex items-center group transition-colors">
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-soft-teal" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="border-b-2 border-soft-teal pb-1">企業情報</span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "会社概要", href: "/about" },
                { name: "導入事例", href: "/case-studies" },
                { name: "サポートセンター", href: "/support" },
                { name: "お問い合わせ", href: "/contact" },
                { name: "プライバシーポリシー", href: "/privacy-policy" },
                { name: "利用規約", href: "/terms-and-conditions" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-soft-teal flex items-center group transition-colors">
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-soft-teal" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="border-b-2 border-soft-teal pb-1">お問い合わせ</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-400">
                <MapPin className="h-5 w-5 mr-3 text-soft-teal shrink-0" />
                <span>〒100-0000<br />東京都千代田区未来ロボット街1-2-3<br />未来タワー 45F</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="h-5 w-5 mr-3 text-soft-teal shrink-0" />
                <span>03-1234-5678 (平日 9:00 - 18:00)</span>
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail className="h-5 w-5 mr-3 text-soft-teal shrink-0" />
                <span>info@mirai-kaigo-robotics.co.jp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 text-center md:text-left">
            &copy; {currentYear} Mirai Kaigo Robotics Co., Ltd. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            {/* Social icons placeholders */}
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-soft-teal transition-colors flex items-center justify-center cursor-pointer">
              <span className="text-xs font-bold">X</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-soft-teal transition-colors flex items-center justify-center cursor-pointer">
              <span className="text-xs font-bold">in</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
