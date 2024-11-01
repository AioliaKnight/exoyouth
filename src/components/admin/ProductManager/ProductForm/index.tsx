import React from 'react';
import { X } from 'lucide-react';
import { useProductForm } from './useProductForm';
import BasicInfo from './BasicInfo';
import Features from './Features';
import Specifications from './Specifications';
import Marketing from './Marketing';
import type { ProductType } from '../../../../types';

interface ProductFormProps {
  product?: ProductType | null;
  onSave: () => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSave,
  onCancel
}) => {
  const {
    formData,
    handleChange,
    handleArrayChange,
    handleSpecChange,
    handleSubmit,
    isValid
  } = useProductForm(product, onSave);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">
            {product ? '編輯產品' : '新增產品'}
          </h3>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto max-h-[calc(90vh-8rem)]">
          <div className="p-6 space-y-8">
            <BasicInfo
              formData={formData}
              onChange={handleChange}
            />

            <Features
              features={formData.features}
              benefits={formData.benefits}
              onChange={handleArrayChange}
            />

            <Specifications
              specs={formData.specs}
              certifications={formData.certifications}
              onChange={handleSpecChange}
              onCertificationChange={(certs) => handleArrayChange('certifications', certs)}
            />

            <Marketing
              tags={formData.tags}
              onChange={(tags) => handleArrayChange('tags', tags)}
            />
          </div>

          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                type="submit"
                disabled={!isValid}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                儲存
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;