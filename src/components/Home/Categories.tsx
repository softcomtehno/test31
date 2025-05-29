import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../data/products';

const categoryImages = {
  'Макияж': 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Уход за кожей': 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Уход за волосами': 'https://images.pexels.com/photos/3993465/pexels-photo-3993465.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Уход за телом': 'https://images.pexels.com/photos/5938234/pexels-photo-5938234.jpeg?auto=compress&cs=tinysrgb&w=600'
};

const Categories: React.FC = () => {
  const categories = getCategories();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Популярные категории</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={`/catalog?category=${encodeURIComponent(category.name)}`}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img 
                  src={categoryImages[category.name as keyof typeof categoryImages] || 
                      'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=600'} 
                  alt={category.name} 
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm">
                      {category.subcategories.slice(0, 3).join(', ')}
                      {category.subcategories.length > 3 && ' и др.'}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;