export const metadata = {
  title: "利用規約 | 未来介護ロボティクス",
  description: "未来介護ロボティクス株式会社が提供する製品・サービスの利用規約について。",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-mist-blue min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-dark-navy mb-8 border-b-2 border-soft-teal pb-4">利用規約</h1>
          
          <div className="space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              この利用規約（以下、「本規約」といいます。）は、未来介護ロボティクス株式会社（以下、「当社」といいます。）が提供するすべての製品・サービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ご利用される皆様（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
            </p>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">第1条（適用）</h2>
              <p>
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">第2条（機器の適切な使用）</h2>
              <ul className="list-decimal pl-6 space-y-2">
                <li>ユーザーは、当社が提供するマニュアル、取扱説明書等に従い、本製品を本来の用途にのみ使用するものとします。</li>
                <li>ユーザーは、当社の事前の書面による承諾なく、本製品の分解、改造、リバースエンジニアリング等を行ってはなりません。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">第3条（禁止事項）</h2>
              <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">第4条（本サービスの提供の停止等）</h2>
              <p>
                当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-dark-navy mb-4">第5条（免責事項）</h2>
              <p>
                当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。<br />
                また、本製品の使用により生じた間接的、付随的、または派生的な損害について、当社は一切の責任を負わないものとします。
              </p>
            </section>

            <p className="mt-12 text-sm text-gray-500 text-right">
              制定日：2023年4月1日
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
