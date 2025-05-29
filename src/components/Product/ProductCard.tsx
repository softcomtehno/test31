import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    addToCart(product);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover object-center"
        />
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            Новинка
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
        <h3 className="font-medium text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-pink-600 font-bold">{product.price} сом</div>
          <button
            onClick={handleAddToCart}
            className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors"
            aria-label="Добавить в корзину"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;