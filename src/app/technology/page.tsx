import SupportCTA from "@/components/home/SupportCTA";
import { Cpu, Network, ShieldAlert, BrainCircuit } from "lucide-react";

export const metadata = {
  title: "テクノロジー | 未来介護ロボティクス",
  description: "未来介護ロボティクスを支える最先端のAI、センシング、フェイルセーフ技術について解説します。",
};

export default function TechnologyPage() {
  return (
    <div className="bg-white">
      <section className="bg-mist-blue py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-dark-navy mb-4">コア・テクノロジー</h1>
        <p className="text-soft-teal font-semibold tracking-widest uppercase">Technology</p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-dark-navy mb-6">人間中心の設計思想と高度な工学の融合</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-left md:text-center">
            私たちの製品は、見えないところで高度な演算を行っています。
            しかし、ユーザーが感じるのは「機械の力」ではなく、「自然なサポート」です。
            それを実現する4つのコア・テクノロジーをご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <BrainCircuit className="w-8 h-8 text-medical-blue" />
            </div>
            <h3 className="text-2xl font-bold text-dark-navy mb-4">M-AI 予測制御システム</h3>
            <p className="text-gray-600 leading-relaxed">
              人間の動作には、わずかな予備動作が存在します。独自開発の「M-AI」は、内蔵センサーから得られるミリ秒単位のデータから、次の動作を正確に予測。ユーザーが動こうとした瞬間に、遅延なく自然なアシストを開始します。
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
              <Network className="w-8 h-8 text-soft-teal" />
            </div>
            <h3 className="text-2xl font-bold text-dark-navy mb-4">スマート・バイタル・メッシュ</h3>
            <p className="text-gray-600 leading-relaxed">
              環境に溶け込む非接触センサーネットワーク。複数のミリ波レーダーを同期させ、室内のどこにいても高精度なバイタルデータ（心拍・呼吸・体動）をノイズレスで取得・解析します。カメラを使わないためプライバシーも守られます。
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-dark-navy mb-4">超小型・高出力アクチュエータ</h3>
            <p className="text-gray-600 leading-relaxed">
              ロボット特有の「重さ」や「大きさ」を解消するため、医療・航空宇宙産業で使用される特殊素材を用いた超小型モーターを独自開発。従来の半分のサイズで、同等の出力を静音で発揮します。
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
              <ShieldAlert className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-dark-navy mb-4">ゼロ・フェイルセーフ機構</h3>
            <p className="text-gray-600 leading-relaxed">
              万が一の電源喪失時や、センサー異常を検知した瞬間、機械的にロックがかかったり急激に脱力したりしないよう、特殊なダンパー機構を全製品に搭載。常に安全側に作動する物理的な安全設計です。
            </p>
          </div>
        </div>
      </section>

      <SupportCTA />
    </div>
  );
}
