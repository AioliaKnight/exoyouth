import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Save } from 'lucide-react';
import { ProductType } from '../../types';
import ProductForm from './ProductForm';

const ProductManager = ({ onSave }: { onSave: () => void }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleEditProduct = (product: ProductType) => {
    setEditingProduct(product);
    setIsFormOpen(true);
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('確定要刪除此產品嗎？')) {
      setProducts(prev => prev.filter(p => p.id !== id));
      onSave();
    }
  };

  const handleSaveProduct = (product: ProductType) => {
    if (editingProduct) {
      setProducts(prev => 
        prev.map(p => p.id === product.id ? product : p)
      );
    } else {
      setProducts(prev => [...prev, { ...product, id: Date.now() }]);
    }
    setIsFormOpen(false);
    onSave();
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">產品管理</h2>
        <button
          onClick={handleAddProduct}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          新增產品
        </button>
      </div>

      <div className="grid gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleEditProduct(product)}
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Pencil className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="p-2 text-gray-500 hover:text-red-600 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <ProductForm
          product={editingProduct}
          onSave={handleSaveProduct}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductManager;