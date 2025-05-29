import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingBag } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductSlider from '../components/Home/ProductSlider';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(parseInt(id)) : null;
  
  // Прокрутка страницы вверх при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
        <p className="text-gray-600 mb-6">К сожалению, запрашиваемый товар не существует.</p>
        <Link 
          to="/catalog"
          className="inline-flex items-center text-pink-600 hover:text-pink-700"
        >
          <ChevronLeft size={18} className="mr-1" />
          Вернуться в каталог
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  // Похожие товары
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Хлебные крошки */}
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-pink-600 transition-colors">Главная</Link>
          <span className="mx-2">/</span>
          <Link to="/catalog" className="hover:text-pink-600 transition-colors">Каталог</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/catalog?category=${encodeURIComponent(product.category)}`} 
            className="hover:text-pink-600 transition-colors"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>
      </div>
      
      {/* Детали товара */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Изображение */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Информация о товаре */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <div className="text-lg font-medium text-gray-600 mb-4">{product.brand}</div>
          
          <div className="text-2xl font-bold text-pink-600 mb-6">{product.price} сом</div>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
            
            {/* Характеристики */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium mb-3 text-gray-800">Характеристики:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Объем:</span>
                  <span className="w-2/3 font-medium">{product.volume}</span>
                </li>
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Тип кожи:</span>
                  <span className="w-2/3 font-medium">{product.skinType}</span>
                </li>
                <li className="flex">
                  <span className="w-1/3 text-gray-600">Страна:</span>
                  <span className="w-2/3 font-medium">{product.country}</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Блок добавления в корзину */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-4 py-2 text-gray-600 hover:text-pink-600 transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-4 py-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                +
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center justify-center"
            >
              <ShoppingBag size={18} className="mr-2" />
              В корзину
            </button>
          </div>
          
          {/* Доставка и оплата */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-3 text-gray-800">Доставка и оплата:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Доставка по Бишкеку - 200 сом</li>
              <li>• Бесплатная доставка от 3000 сом</li>
              <li>• Оплата при получении наличными или картой</li>
              <li>• Возможен самовывоз из магазина</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Похожие товары */}
      {relatedProducts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Похожие товары</h2>
          <ProductSlider title="" products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;