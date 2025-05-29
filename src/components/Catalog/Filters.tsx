import React from 'react';
import { getCategories, getBrands } from '../../data/products';

interface FiltersProps {
  selectedCategory: string;
  selectedSubcategory: string;
  selectedBrand: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceChange: (min: number, max: number) => void;
  minPrice: number;
  maxPrice: number;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  selectedSubcategory,
  selectedBrand,
  onCategoryChange,
  onSubcategoryChange,
  onBrandChange,
  onPriceChange,
  minPrice,
  maxPrice
}) => {
  const categories = getCategories();
  const brands = getBrands();
  
  // Получаем подкатегории для выбранной категории
  const subcategories = selectedCategory 
    ? categories.find(cat => cat.name === selectedCategory)?.subcategories || []
    : [];
    
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'min' | 'max') => {
    const value = parseInt(e.target.value) || 0;
    if (type === 'min') {
      onPriceChange(value, maxPrice);
    } else {
      onPriceChange(minPrice, value);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Фильтры</h3>
      
      {/* Категории */}
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-gray-700">Категория</h4>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Все категории</option>
          {categories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Подкатегории */}
      {selectedCategory && (
        <div className="mb-6">
          <h4 className="font-medium mb-2 text-gray-700">Подкатегория</h4>
          <select
            value={selectedSubcategory}
            onChange={(e) => onSubcategoryChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Все подкатегории</option>
            {subcategories.map(subcategory => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
      )}
      
      {/* Бренд */}
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-gray-700">Бренд</h4>
        <select
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Все бренды</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      
      {/* Цена */}
      <div className="mb-6">
        <h4 className="font-medium mb-2 text-gray-700">Цена</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">От</label>
            <input
              type="number"
              value={minPrice || ''}
              onChange={(e) => handlePriceChange(e, 'min')}
              className="w-full p-2 border border-gray-300 rounded-md"
              min={0}
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">До</label>
            <input
              type="number"
              value={maxPrice || ''}
              onChange={(e) => handlePriceChange(e, 'max')}
              className="w-full p-2 border border-gray-300 rounded-md"
              min={0}
            />
          </div>
        </div>
      </div>
      
      {/* Сброс фильтров */}
      <button
        onClick={() => {
          onCategoryChange('');
          onSubcategoryChange('');
          onBrandChange('');
          onPriceChange(0, 0);
        }}
        className="w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
      >
        Сбросить фильтры
      </button>
    </div>
  );
};

export default Filters;