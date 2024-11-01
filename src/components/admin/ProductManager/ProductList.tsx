import React from 'react';
import { Pencil, Trash2, Star } from 'lucide-react';
import { useProductStore } from '../../../stores/productStore';
import { useToast } from '../../ui/use-toast';
import type { ProductType } from '../../../types';
import { cn } from '../../../lib/utils';

interface ProductListProps {
  products: ProductType[];
  onEdit: (product: ProductType) => void;
  onSaveSuccess: () => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  onEdit,
  onSaveSuccess
}) => {
  const { removeProduct, toggleHighlight } = useProductStore();
  const { toast } = useToast();

  const handleDelete = (product: ProductType) => {
    if (window.confirm(`確定要刪除「${product.name}」嗎？此操作無法復原。`)) {
      removeProduct(product.id);
      onSaveSuccess();
      toast({
        title: "產品已刪除",
        description: `${product.name} 已成功移除`,
        duration: 3000,
      });
    }
  };

  const handleToggleHighlight = (product: ProductType) => {
    toggleHighlight(product.id);
    onSaveSuccess();
    toast({
      title: product.highlight ? "取消主打產品" : "設為主打產品",
      description: `${product.name} 已${product.highlight ? '取消' : '設為'}主打產品`,
      duration: 3000,
    });
  };

  return (
    <div className="grid gap-6">
      {products.map((product) => (
        <div 
          key={product.id}
          className={cn(
            "bg-white p-6 rounded-xl shadow-sm",
            "transition-all duration-300",
            product.highlight && "ring-2 ring-rose-500"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                {product.highlight && (
                  <div className="absolute top-0 right-0 bg-rose-500 text-white p-1 rounded-bl">
                    <Star className="h-3 w-3" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {product.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleToggleHighlight(product)}
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  product.highlight
                    ? "text-rose-600 hover:bg-rose-50"
                    : "text-gray-400 hover:text-rose-600 hover:bg-rose-50"
                )}
                title={product.highlight ? "取消主打產品" : "設為主打產品"}
              >
                <Star className="h-5 w-5" />
              </button>
              <button
                onClick={() => onEdit(product)}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="編輯產品"
              >
                <Pencil className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDelete(product)}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="刪除產品"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {products.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">尚未新增任何產品</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;