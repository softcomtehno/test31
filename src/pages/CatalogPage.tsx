import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products as allProducts } from '../data/products';
import { Product, SortOption } from '../types';
import Filters from '../components/Catalog/Filters';
import ProductGrid from '../components/Catalog/ProductGrid';
import SearchBar from '../components/Catalog/SearchBar';
import SortSelect from '../components/Catalog/SortSelect';

const CatalogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Получение параметров из URL
  const initialCategory = searchParams.get('category') || '';
  const initialSubcategory = searchParams.get('subcategory') || '';
  const initialBrand = searchParams.get('brand') || '';
  const initialQuery = searchParams.get('query') || '';
  
  // Состояния для фильтров
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');
  
  // Состояние для отфильтрованных товаров
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Применение фильтров
  useEffect(() => {
    setLoading(true);
    
    // Имитация загрузки данных
    setTimeout(() => {
      let filtered = [...allProducts];
      
      // Фильтрация по категории
      if (selectedCategory) {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
      
      // Фильтрация по подкатегории
      if (selectedSubcategory) {
        filtered = filtered.filter(product => product.subcategory === selectedSubcategory);
      }
      
      // Фильтрация по бренду
      if (selectedBrand) {
        filtered = filtered.filter(product => product.brand === selectedBrand);
      }
      
      // Фильтрация по цене
      if (minPrice > 0) {
        filtered = filtered.filter(product => product.price >= minPrice);
      }
      
      if (maxPrice > 0) {
        filtered = filtered.filter(product => product.price <= maxPrice);
      }
      
      // Поиск по запросу
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query)
        );
      }
      
      // Сортировка
      switch(sortOption) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }
      
      setFilteredProducts(filtered);
      setLoading(false);
    }, 500);
    
    // Обновление URL параметров
    const params: Record<string, string> = {};
    if (selectedCategory) params.category = selectedCategory;
    if (selectedSubcategory) params.subcategory = selectedSubcategory;
    if (selectedBrand) params.brand = selectedBrand;
    if (searchQuery) params.query = searchQuery;
    
    setSearchParams(params);
  }, [selectedCategory, selectedSubcategory, selectedBrand, minPrice, maxPrice, searchQuery, sortOption, setSearchParams]);
  
  // Обработчики изменения фильтров
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(''); // Сбрасываем подкатегорию при изменении категории
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Каталог товаров</h1>
      
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} initialQuery={searchQuery} />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Сайдбар с фильтрами */}
        <div className="md:w-1/4 w-full">
          <Filters
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
            selectedBrand={selectedBrand}
            onCategoryChange={handleCategoryChange}
            onSubcategoryChange={setSelectedSubcategory}
            onBrandChange={setSelectedBrand}
            onPriceChange={handlePriceChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>
        
        {/* Список товаров */}
        <div className="md:w-3/4 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-gray-600 mb-3 sm:mb-0">
              Найдено товаров: {filteredProducts.length}
            </p>
            
            <SortSelect value={sortOption} onChange={setSortOption} />
          </div>
          
          <ProductGrid products={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;