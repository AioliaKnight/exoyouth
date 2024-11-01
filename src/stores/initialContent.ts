import type { ContentSection } from '../types/content';

export const initialSections: ContentSection[] = [
  {
    id: 'hero',
    title: '首頁橫幅',
    description: '首頁輪播區塊的主要標題與描述文字',
    content: '從細胞開始，煥發肌膚光采',
    subsections: [
      {
        id: 'hero-subtitle',
        title: '副標題',
        content: '專業級外泌體保養品'
      },
      {
        id: 'hero-description',
        title: '描述文字',
        content: 'ExoYouth以尖端外泌體科技，為您打造專屬的青春方程式'
      }
    ]
  },
  {
    id: 'about',
    title: '關於我們',
    description: '公司簡介與核心理念',
    content: 'ExoYouth 致力於尖端生物科技研發，專注於外泌體技術的創新與應用',
    subsections: [
      {
        id: 'about-mission',
        title: '企業使命',
        content: '以創新科技，推動台灣生技產業發展，為消費者帶來最優質的保養體驗'
      },
      {
        id: 'about-vision',
        title: '企業願景',
        content: '成為亞洲領先的外泌體技術研發與應用公司'
      }
    ]
  },
  {
    id: 'quality',
    title: '品質保證',
    description: '品質認證與規範說明',
    content: '堅持最高品質標準，提供最優質的產品',
    subsections: [
      {
        id: 'quality-cert',
        title: '認證說明',
        content: 'ISO 17025實驗室認證、PIC/S GMP製程認證、SGS品質檢測認證'
      },
      {
        id: 'quality-process',
        title: '製程管理',
        content: '全程溫控監測，確保產品品質穩定'
      }
    ]
  },
  {
    id: 'contact',
    title: '聯絡資訊',
    description: '客服與諮詢相關資訊',
    content: '專業團隊為您服務，提供完整技術支援與諮詢',
    subsections: [
      {
        id: 'contact-service',
        title: '服務時間',
        content: '週一至週六 10:00-20:00'
      },
      {
        id: 'contact-address',
        title: '公司地址',
        content: '台北市南港區研究院路二段'
      }
    ]
  }
];