import React, { useEffect, useCallback, useState } from 'react';
import { X, Shield, Beaker, Award, MessageCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';
import type { ProductType } from '../../../types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductType;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
      setTimeout(() => setIsVisible(true), 50); // Slight delay to allow transition
    } else {
      setIsVisible(false);
      document.body.style.overflow = ''; // Ensure overflow is reset when modal closes
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = ''; // Reset overflow on component unmount
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-black/60 backdrop-blur-sm transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      onClick={handleBackdropClick}
      aria-hidden={!isVisible}
    >
      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full max-w-3xl",
          "bg-white rounded-lg shadow-lg overflow-hidden",
          "transform transition-all duration-300",
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="relative h-48 md:h-auto md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg md:rounded-l-lg" />
            {/* Tags */}
            {product.tags?.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs font-medium bg-rose-500 text-white shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto">
            {/* Header */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price & Volume */}
            <div className="mt-4 flex items-center justify-between">
              <div className="text-lg md:text-xl font-bold text-rose-600">
                NT$ {product.price}
              </div>
              <div className="px-2 py-1 bg-rose-50 text-rose-600 rounded-full text-xs md:text-sm font-medium">
                {product.volume}
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-4 space-y-2">
              <h4 className="text-sm md:text-base font-semibold text-gray-900 flex items-center gap-1">
                <Shield className="w-4 h-4 text-rose-500" />
                規格資訊
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="p-2 bg-gray-50 rounded-md">
                    <dt className="text-xs text-gray-500">
                      {key === 'purity'
                        ? '純度'
                        : key === 'activity'
                        ? '活性'
                        : key === 'storage'
                        ? '保存方式'
                        : '保存期限'}
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-4 space-y-2">
              <h4 className="text-sm md:text-base font-semibold text-gray-900 flex items-center gap-1">
                <Beaker className="w-4 h-4 text-rose-500" />
                產品特色
              </h4>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="mt-4 space-y-2">
              <h4 className="text-sm md:text-base font-semibold text-gray-900 flex items-center gap-1">
                <Award className="w-4 h-4 text-rose-500" />
                認證資訊
              </h4>
              <div className="flex flex-wrap gap-1">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://line.me/ti/p/~exoyouth"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "block mt-6 w-full px-4 py-2 rounded-lg",
                "bg-gradient-to-r from-rose-600 to-rose-500 text-white text-sm font-medium",
                "hover:from-rose-700 hover:to-rose-600 flex items-center justify-center gap-1",
                "transition-transform duration-300 transform hover:-translate-y-0.5"
              )}
              onClick={onClose}
            >
              <MessageCircle className="w-4 h-4" />
              立即諮詢
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
