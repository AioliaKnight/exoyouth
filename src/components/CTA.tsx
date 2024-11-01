import React from 'react';
import { MessageCircle, Phone, Clock, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-900 to-blue-900">
      {/* 背景網格 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />

      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 左側內容 */}
          <div className="space-y-10">
            {/* 標題區域 */}
            <div className="space-y-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 shadow-lg">
                專業服務
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                想了解更多？
                <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                  立即與我們聯繫
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-200 leading-relaxed">
                專業團隊為您服務<br />
                提供完整技術支援與諮詢
              </p>
            </div>

            {/* 聯絡資訊 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactCard icon={<MessageCircle />} title="LINE諮詢" detail="@exoyouth" link="https://line.me/ti/p/~exoyouth" />
              <ContactCard icon={<Phone />} title="專線服務" detail="0800-888-888" link="tel:0800888888" />
              <ContactCard icon={<Clock />} title="服務時間" detail="週一至週六 10:00-20:00" />
              <ContactCard icon={<Mail />} title="電子郵件" detail="service@exoyouth.com" link="mailto:service@exoyouth.com" />
            </div>

            {/* 行動按鈕 */}
            <div className="flex flex-wrap gap-4 mt-6">
              <CTAButton text="立即諮詢" link="https://line.me/ti/p/~exoyouth" icon={<MessageCircle />} gradient />
              <CTAButton text="電話聯繫" link="tel:0800888888" icon={<Phone />} border />
            </div>
          </div>

          {/* 右側圖片 */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
              alt="Customer service"
              className="relative w-full rounded-2xl shadow-2xl transform transition-transform duration-700 hover:scale-105 hover:opacity-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, detail, link }) => (
  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-md transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-center gap-3">
      {icon && React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition-colors">
            {detail}
          </a>
        ) : (
          <p className="text-blue-300">{detail}</p>
        )}
      </div>
    </div>
  </div>
);

const CTAButton = ({ text, link, icon, gradient, border }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transform transition-transform duration-300 
      ${gradient ? "bg-gradient-to-r from-blue-200 to-blue-100 text-blue-900 shadow-lg hover:from-blue-100 hover:to-white hover:shadow-xl" : ""}
      ${border ? "text-white border-2 border-blue-400/30 hover:bg-white/10" : ""}
      hover:-translate-y-0.5`}
  >
    {icon && React.cloneElement(icon, { className: "w-5 h-5 mr-2" })}
    {text}
  </a>
);

export default CTA;
