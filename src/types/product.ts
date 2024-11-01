export interface ProductSpec {
  purity: string;
  activity: string;
  storage: string;
  shelfLife: string;
}

export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: string;
  volume: string;
  features: string[];
  specs: ProductSpec;
  benefits: string[];
  certifications: string[];
  image: string;
  tags?: string[];
  highlight?: boolean;
}

export interface ProductCardProps extends ProductType {
  isMainProduct?: boolean;
}