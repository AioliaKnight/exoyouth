import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface ImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackSrc?: string;
  aspectRatio?: 'square' | '4:3' | '3:4' | '16:9' | '1:1';
}

const aspectRatioClasses = {
  'square': 'aspect-square',
  '4:3': 'aspect-[4/3]',
  '3:4': 'aspect-[3/4]',
  '16:9': 'aspect-[16/9]',
  '1:1': 'aspect-square'
};

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt,
  className,
  containerClassName,
  fallbackSrc = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=50&blur=50',
  aspectRatio = '3:4',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(fallbackSrc);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
      setError(false);
    };

    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={cn(
      "relative overflow-hidden bg-gray-100",
      aspectRatioClasses[aspectRatio],
      containerClassName
    )}>
      <img
        src={currentSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-500",
          isLoading && "scale-105 blur-sm",
          className
        )}
        {...props}
      />
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer" />
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500">圖片載入失敗</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ImageLoader);