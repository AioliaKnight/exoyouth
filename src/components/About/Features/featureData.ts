import { TestTube2, ShieldCheck, Award, Microscope } from 'lucide-react';

export const features = [
  {
    name: '頂級純度',
    description: [
      '專利分離技術，純度達95%以上',
      'ISO 17025認證實驗室',
      '每批次檢測報告',
      '完整追溯系統'
    ],
    icon: TestTube2,
    color: 'blue',
    stats: {
      value: '95%+',
      label: '純度保證'
    }
  },
  {
    name: '高活性',
    description: [
      '活性保持98%以上',
      '專利保存技術',
      '全程溫控監測',
      '效期12個月'
    ],
    icon: ShieldCheck,
    color: 'purple',
    stats: {
      value: '98%+',
      label: '活性保證'
    }
  },
  {
    name: '品質認證',
    description: [
      'PIC/S GMP製程認證',
      'SGS品質檢測',
      'TAF實驗室認證',
      'GDP運銷規範'
    ],
    icon: Award,
    color: 'pink',
    stats: {
      value: '100%',
      label: '合格認證'
    }
  },
  {
    name: '研發實力',
    description: [
      '50+位博士研究員',
      '10年研發經驗',
      '20+項技術專利',
      '產學合作計畫'
    ],
    icon: Microscope,
    color: 'indigo',
    stats: {
      value: '50+',
      label: '研發團隊'
    }
  }
];