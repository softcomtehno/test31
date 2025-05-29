import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItemComponent from '../components/Cart/CartItemComponent';

const CartPage: React.FC = () => {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">Добавьте товары в корзину, чтобы оформить заказ.</p>
          <Link 
            to="/catalog"
            className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full transition-colors inline-flex items-center"
          >
            <ChevronLeft size={18} className="mr-1" />
            Перейти к покупкам
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Корзина</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Товары в корзине */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-4 pb-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Товары в корзине</h2>
                <button 
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                >
                  Очистить корзину
                </button>
              </div>
            </div>
            
            <div>
              {cartItems.map(item => (
                <CartItemComponent key={item.product.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Сводка заказа */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Сводка заказа</h2>
            
            <div className="mb-6">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Товары ({totalItems})</span>
                <span className="font-medium">{totalPrice} сом</span>
              </div>
              
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Доставка</span>
                <span className="font-medium">
                  {totalPrice >= 3000 ? 'Бесплатно' : '200 сом'}
                </span>
              </div>
              
              <div className="flex justify-between py-3 text-lg font-bold">
                <span>Итого</span>
                <span className="text-pink-600">
                  {totalPrice >= 3000 ? totalPrice : totalPrice + 200} сом
                </span>
              </div>
            </div>
            
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md transition-colors mb-4">
              Оформить заказ
            </button>
            
            <Link 
              to="/catalog"
              className="w-full block text-center bg-transparent hover:bg-pink-50 text-pink-600 font-medium py-3 px-6 rounded-md border border-pink-600 transition-colors"
            >
              Продолжить покупки
            </Link>
            
            <div className="mt-6 text-sm text-gray-500">
              <p className="mb-2">Способы оплаты:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Наличными при получении</li>
                <li>Банковской картой при получении</li>
                <li>Онлайн-перевод</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;