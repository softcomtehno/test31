// Типы для интернет-магазина косметики

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  description: string;
  image: string;
  volume: string;
  skinType: string;
  country: string;
  isPopular: boolean;
  isNew: boolean;
}

export interface Category {
  name: string;
  subcategories: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';