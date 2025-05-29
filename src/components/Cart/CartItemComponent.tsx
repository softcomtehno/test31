import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemComponentProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
      <div className="sm:w-20 sm:h-20 w-full h-32 mb-3 sm:mb-0 sm:mr-4 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="flex-grow sm:mr-4">
        <Link to={`/product/${product.id}`} className="text-gray-800 hover:text-pink-600 transition-colors">
          <h3 className="font-medium">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <p className="text-sm text-gray-500">{product.volume}</p>
      </div>
      
      <div className="flex items-center mt-3 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="px-2 py-1 text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Уменьшить количество"
          >
            <Minus size={16} />
          </button>
          
          <span className="px-2 py-1 min-w-[30px] text-center">{quantity}</span>
          
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="px-2 py-1 text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Увеличить количество"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between w-full sm:w-auto mt-3 sm:mt-0 sm:ml-6">
        <div className="font-medium text-pink-600 sm:ml-6 sm:min-w-[80px] text-right">
          {product.price * quantity} сом
        </div>
        
        <button
          onClick={() => removeFromCart(product.id)}
          className="ml-4 text-gray-400 hover:text-pink-600 transition-colors"
          aria-label="Удалить товар"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;