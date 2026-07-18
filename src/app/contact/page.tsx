"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    inquiryType: "製品について",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ company: "", name: "", email: "", phone: "", inquiryType: "製品について", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-mist-blue min-h-screen">
      <section className="bg-mist-blue py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-dark-navy mb-4">お問い合わせ</h1>
        <p className="text-soft-teal font-semibold tracking-widest">ご相談窓口</p>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark-navy mb-6 border-b border-gray-100 pb-4">お電話でのお問い合わせ</h3>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-medical-blue mt-1 mr-4 shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-dark-navy mb-1">03-1234-5678</p>
                  <p className="text-sm text-gray-500">受付時間: 9:00 - 18:00<br />(土・日・祝日・年末年始を除く)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark-navy mb-6 border-b border-gray-100 pb-4">本社所在地</h3>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-soft-teal mt-1 mr-4 shrink-0" />
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    〒100-0000<br />
                    東京都千代田区未来ロボット街1-2-3<br />
                    未来タワー 45F
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark-navy mb-6 border-b border-gray-100 pb-4">メールでのお問い合わせ</h3>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-500 mr-4 shrink-0" />
                <p className="text-sm text-gray-700">info@mirai-kaigo-robotics.co.jp</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-gray-100 relative overflow-hidden">
              {isSubmitted ? (
                <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10 text-soft-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-navy mb-4">お問い合わせを受け付けました</h3>
                  <p className="text-gray-600 mb-8">
                    内容を確認の上、担当者より通常2営業日以内にご連絡いたします。<br />
                    今しばらくお待ちくださいませ。
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-medical-blue font-medium hover:underline"
                  >
                    続けてお問い合わせをする
                  </button>
                </div>
              ) : null}

              <h2 className="text-2xl font-bold text-dark-navy mb-8">お問い合わせフォーム</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">法人名・施設名</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-shadow"
                      placeholder="例）株式会社未来介護"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      ご担当者様名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-shadow"
                      placeholder="例）山田 太郎"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-shadow"
                      placeholder="例）yamada@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none transition-shadow"
                      placeholder="例）03-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none bg-white transition-shadow"
                  >
                    <option value="製品について">製品についてのご質問</option>
                    <option value="資料請求">資料請求・デモ依頼</option>
                    <option value="導入・見積もり">導入・お見積りのご相談</option>
                    <option value="サポート">保守・サポートに関するお問い合わせ</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-medical-blue focus:border-transparent outline-none resize-none transition-shadow"
                    placeholder="ご質問、ご要望などをご自由にお書きください。"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-gray-500 mb-6 text-center">
                    送信ボタンを押すことで、当社の<a href="/privacy-policy" className="text-medical-blue underline hover:text-blue-700">プライバシーポリシー</a>に同意したものとみなされます。
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-medical-blue text-white py-4 rounded-full font-bold text-lg shadow-md hover:shadow-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 transform hover:-translate-y-1'}`}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
