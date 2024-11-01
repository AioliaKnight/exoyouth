import { useState, useEffect, useCallback } from 'react';
import { useProductStore } from '../../../../stores/productStore';
import type { ProductType } from '../../../../types';

const defaultFormData: Omit<ProductType, 'id'> = {
  name: '',
  description: '',
  price: '',
  volume: '',
  features: [],
  specs: {
    purity: '',
    activity: '',
    storage: '',
    shelfLife: ''
  },
  benefits: [],
  certifications: [],
  image: '',
  tags: [],
  highlight: false
};

export const useProductForm = (
  initialProduct: ProductType | null | undefined,
  onSave: () => void
) => {
  const { addProduct, updateProduct } = useProductStore();
  const [formData, setFormData] = useState<Omit<ProductType, 'id'>>(defaultFormData);

  useEffect(() => {
    if (initialProduct) {
      const { id, ...productData } = initialProduct;
      setFormData(productData);
    }
  }, [initialProduct]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleArrayChange = useCallback((
    field: keyof Pick<ProductType, 'features' | 'benefits' | 'certifications' | 'tags'>,
    values: string[]
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: values
    }));
  }, []);

  const handleSpecChange = useCallback((
    field: keyof ProductType['specs'],
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      specs: {
        ...prev.specs,
        [field]: value
      }
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (initialProduct) {
      updateProduct({ ...formData, id: initialProduct.id });
    } else {
      addProduct(formData);
    }
    
    onSave();
  }, [formData, initialProduct, addProduct, updateProduct, onSave]);

  const isValid = Boolean(
    formData.name &&
    formData.description &&
    formData.price &&
    formData.volume &&
    formData.image
  );

  return {
    formData,
    handleChange,
    handleArrayChange,
    handleSpecChange,
    handleSubmit,
    isValid
  };
};