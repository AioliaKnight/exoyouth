import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useProductStore } from '../../../stores/productStore';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { useToast } from '../../ui/use-toast';
import type { ProductType } from '../../../types';

const ProductManager = ({ onSave }: { onSave: () => void }) => {
  const { products } = useProductStore();
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { toast } = useToast();

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleEditProduct = (product: ProductType) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setEditingProduct(null);
    setIsFormOpen(false);
  };

  const handleSaveSuccess = () => {
    handleFormClose();
    onSave();
    toast({
      title: editingProduct ? "產品更新成功" : "產品新增成功",
      description: "變更已儲存",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">產品管理</h2>
          <p className="mt-2 text-gray-600">管理產品資訊與規格</p>
        </div>
        <button
          onClick={handleAddProduct}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          新增產品
        </button>
      </div>

      <ProductList
        products={products}
        onEdit={handleEditProduct}
        onSaveSuccess={onSave}
      />

      {isFormOpen && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveSuccess}
          onCancel={handleFormClose}
        />
      )}
    </div>
  );
};

export default ProductManager;