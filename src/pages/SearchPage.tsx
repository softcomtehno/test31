import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductGrid from '../components/Catalog/ProductGrid';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    
    const lowercaseQuery = query.toLowerCase();
    const results = products.filter(
      product => 
        product.name.toLowerCase().includes(lowercaseQuery) || 
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.brand.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery)
    );
    
    setSearchResults(results);
    setHasSearched(true);
    
    // Обновляем URL для возможности поделиться результатами поиска
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Поиск товаров</h1>
      
      {/* Форма поиска */}
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input
              type="text"
              placeholder="Введите название товара, бренд или категорию"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500"
            />
            <button 
              type="submit"
              className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500"
            >
              <Search size={24} />
            </button>
          </div>
        </form>
        <div className="text-center text-gray-500 text-sm mt-3">
          Например: "увлажняющий крем", "помада", "NatureCare"
        </div>
      </div>
      
      {/* Результаты поиска */}
      {hasSearched && (
        <div>
          <h2 className="text-xl font-semibold mb-6">
            {searchResults.length > 0 
              ? `Найдено товаров: ${searchResults.length}` 
              : 'Товары не найдены'}
          </h2>
          
          {searchResults.length > 0 ? (
            <ProductGrid products={searchResults} />
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg mb-2">По вашему запросу ничего не найдено</p>
              <p className="text-gray-400">Попробуйте изменить запрос или воспользуйтесь каталогом</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;