import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  return (
    <section className="relative h-[80vh] bg-gradient-to-r from-pink-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Косметика" 
          className="object-cover object-center w-full h-full opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Красота доступна <span className="text-pink-600">каждой</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Откройте для себя мир премиальной косметики. Уход за кожей, макияж и парфюмерия высочайшего качества.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/catalog" 
              className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              В каталог
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent hover:bg-pink-50 text-pink-600 font-medium py-3 px-6 rounded-full border border-pink-600 transition-all duration-300 flex items-center justify-center"
            >
              О нас
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;