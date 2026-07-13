export const metadata = {
  title: "プライバシーポリシー | 未来介護ロボティクス",
  description: "未来介護ロボティクスのプライバシーポリシー（個人情報保護方針）について。",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-mist-blue min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-dark-navy mb-8 border-b-2 border-soft-teal pb-4">プライバシーポリシー</h1>
          
          <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              未来介護ロボティクス株式会社（以下「当社」）は、お客様の個人情報保護の重要性を強く認識し、以下の通りプライバシーポリシーを定め、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
            </p>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">1. 個人情報の管理</h2>
              <p>
                当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">2. 個人情報の利用目的</h2>
              <p>
                お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">3. 個人情報の第三者への開示・提供の禁止</h2>
              <p>
                当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>お客さまの同意がある場合</li>
                <li>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
                <li>法令に基づき開示することが必要である場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">4. センサーデータおよびバイタルデータの取り扱い</h2>
              <p>
                当社の製品（見守りセンサー等）を通じて取得されるバイタルデータ等の情報は、個人を特定できないよう匿名化・暗号化された上で、サービスの品質向上およびAIアルゴリズムの学習データとしてのみ利用されます。お客さまの明示的な同意なく、個人の健康状態等のデータを第三者に提供することは一切ありません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">5. お問い合わせ窓口</h2>
              <p>
                当社の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br /><br />
                未来介護ロボティクス株式会社<br />
                〒100-0000 東京都千代田区未来ロボット街1-2-3 未来タワー 45F<br />
                Email: privacy@mirai-kaigo-robotics.co.jp
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
