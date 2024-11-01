import { ProductType } from '../types';

export const products: ProductType[] = [
  {
    id: 1,
    name: 'Youth Essence Plus+',
    description: '突破性外泌體科技，深層修護肌膚，重現年輕光采',
    price: '12,800',
    volume: '30ml',
    features: [
      '深層修護',
      '緊緻彈力',
      '細緻毛孔',
      '光澤透亮',
      '撫平細紋',
      '均勻膚色'
    ],
    specs: {
      purity: '98%以上',
      activity: '99%以上',
      storage: '-80°C',
      shelfLife: '24個月'
    },
    benefits: [
      '強化肌膚屏障',
      '促進膠原新生',
      '加速更新循環',
      '提升吸收力'
    ],
    certifications: ['ISO 17025', 'SGS', 'TAF'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1612344441107-ef12287e4872?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['明星商品', '熱銷推薦'],
    highlight: true
  },
  {
    id: 2,
    name: 'Repair Serum Advanced',
    description: '高濃度修護精華，深層滋養，重現肌膚活力',
    price: '9,800',
    volume: '30ml',
    features: [
      '修護舒緩',
      '活化光采',
      '平衡水油',
      '柔嫩細緻'
    ],
    specs: {
      purity: '95%以上',
      activity: '98%以上',
      storage: '-80°C',
      shelfLife: '24個月'
    },
    benefits: [
      '修護受損肌膚',
      '強化防護能力',
      '平衡膚質狀態',
      '提升光澤透亮'
    ],
    certifications: ['ISO 17025', 'SGS', 'TAF'],
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1612344441107-ef12287e4872?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['新品上市']
  },
  {
    id: 3,
    name: 'Vital Concentrate',
    description: '奢華活膚精華，注入強大修護能量，重現年輕光采',
    price: '15,800',
    volume: '20ml',
    features: [
      '高濃縮配方',
      '快速修護',
      '深層滋養',
      '提升彈性'
    ],
    specs: {
      purity: '99%以上',
      activity: '99%以上',
      storage: '-80°C',
      shelfLife: '18個月'
    },
    benefits: [
      '密集修護',
      '強效活化',
      '改善膚質',
      '提升輪廓'
    ],
    certifications: ['ISO 17025', 'SGS', 'TAF'],
    image: 'https://images.unsplash.com/photo-1612344441107-ef12287e4872?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1612344441107-ef12287e4872?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['奢華系列', '限量發售']
  },
  {
    id: 4,
    name: 'Hydra Boost Essence',
    description: '玻尿酸複合精華，深度補水保濕，打造水潤透亮肌',
    price: '8,800',
    volume: '30ml',
    features: [
      '深層保濕',
      '鎖水持久',
      '修護舒緩',
      '提亮膚色'
    ],
    specs: {
      purity: '95%以上',
      activity: '98%以上',
      storage: '-80°C',
      shelfLife: '24個月'
    },
    benefits: [
      '深層補水',
      '強化保濕屏障',
      '舒緩敏感',
      '改善暗沉'
    ],
    certifications: ['ISO 17025', 'SGS', 'TAF'],
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1612344441107-ef12287e4872?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['保濕系列', '敏感肌適用']
  }
];