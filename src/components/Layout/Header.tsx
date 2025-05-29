import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { getCategories } from '../../data/products';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();
  const categories = getCategories();

  // Обработка скролла для изменения фона шапки
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрыть меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="font-bold text-2xl text-pink-600">Bella</Link>
          
          {/* Навигация - десктоп */}
          <nav className="hidden md:flex space-x-6 text-gray-700">
            <Link to="/" className="hover:text-pink-600 transition-colors">Главная</Link>
            <Link to="/catalog" className="hover:text-pink-600 transition-colors">Каталог</Link>
            <div className="group relative">
              <span className="cursor-pointer hover:text-pink-600 transition-colors">
                Категории
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-20">
                {categories.map((category) => (
                  <Link 
                    key={category.name}
                    to={`/catalog?category=${encodeURIComponent(category.name)}`}
                    className="block px-4 py-2 text-sm hover:bg-pink-50 rounded-md"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="hover:text-pink-600 transition-colors">О нас</Link>
          </nav>
          
          {/* Поиск и корзина */}
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-pink-600 transition-colors">
              <Search size={20} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-pink-600 transition-colors relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Мобильное меню */}
            <button 
              className="md:hidden text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Мобильная навигация */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 hover:text-pink-600 transition-colors">Главная</Link>
            <Link to="/catalog" className="py-2 hover:text-pink-600 transition-colors">Каталог</Link>
            
            <div className="py-2">
              <span className="font-medium mb-2 block">Категории:</span>
              <div className="ml-4 flex flex-col space-y-2 mt-2">
                {categories.map((category) => (
                  <Link 
                    key={category.name}
                    to={`/catalog?category=${encodeURIComponent(category.name)}`}
                    className="text-sm hover:text-pink-600 transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link to="/about" className="py-2 hover:text-pink-600 transition-colors">О нас</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;