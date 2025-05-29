import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-pink-600">Bella</h3>
          </div>
          
          {/* Категории */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=Макияж" className="text-gray-600 hover:text-pink-600 transition-colors">Макияж</Link>
              </li>
              <li>
                <Link to="/catalog?category=Уход%20за%20кожей" className="text-gray-600 hover:text-pink-600 transition-colors">Уход за кожей</Link>
              </li>
              <li>
                <Link to="/catalog?category=Уход%20за%20волосами" className="text-gray-600 hover:text-pink-600 transition-colors">Уход за волосами</Link>
              </li>
              <li>
                <Link to="/catalog?category=Уход%20за%20телом" className="text-gray-600 hover:text-pink-600 transition-colors">Уход за телом</Link>
              </li>
            </ul>
          </div>
          
          {/* Информация */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">О компании</Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-pink-600 transition-colors">Доставка и оплата</Link>
              </li>
              <li>
                <Link to="/return" className="text-gray-600 hover:text-pink-600 transition-colors">Возврат и обмен</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-pink-600 transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          

        </div>
        
        {/* Копирайт */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Bella. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;