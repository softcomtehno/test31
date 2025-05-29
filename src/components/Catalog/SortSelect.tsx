import React from 'react';
import { SortOption } from '../../types';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-gray-700 whitespace-nowrap">Сортировка:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="p-2 border border-gray-300 rounded-md text-sm"
      >
        <option value="price-asc">По цене (возрастание)</option>
        <option value="price-desc">По цене (убывание)</option>
        <option value="name-asc">По названию (А-Я)</option>
        <option value="name-desc">По названию (Я-А)</option>
      </select>
    </div>
  );
};

export default SortSelect;