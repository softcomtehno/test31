import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import ProductCard from '../Product/ProductCard';

interface ProductSliderProps {
  title: string;
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [itemsPerView, setItemsPerView] = useState(4);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    setVisibleProducts(products.slice(currentIndex, currentIndex + itemsPerView));
  }, [currentIndex, itemsPerView, products]);
  
  const nextSlide = () => {
    const nextIndex = currentIndex + itemsPerView;
    if (nextIndex < products.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0); // Цикличная навигация
    }
  };
  
  const prevSlide = () => {
    const prevIndex = currentIndex - itemsPerView;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      // Перемещение в конец для цикличной навигации
      const lastPageIndex = Math.floor((products.length - 1) / itemsPerView) * itemsPerView;
      setCurrentIndex(lastPageIndex);
    }
  };
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center text-pink-600 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;