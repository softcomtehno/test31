import { Product } from '../types';

// Товары для интернет-магазина косметики
export const products: Product[] = [
  {
    id: 1,
    name: "Увлажняющий крем для лица",
    brand: "NatureCare",
    category: "Уход за кожей",
    subcategory: "Кремы",
    price: 1200,
    description: "Интенсивно увлажняющий крем для всех типов кожи. Содержит гиалуроновую кислоту и витамин Е.",
    image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "50 мл",
    skinType: "Все типы кожи",
    country: "Франция",
    isPopular: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Матовая помада",
    brand: "GlamLook",
    category: "Макияж",
    subcategory: "Помады",
    price: 850,
    description: "Стойкая матовая помада с бархатистым эффектом. Не сушит губы и сохраняет цвет до 8 часов.",
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "4 г",
    skinType: "Все типы кожи",
    country: "Италия",
    isPopular: true,
    isNew: true,
  },
  {
    id: 3,
    name: "Мицеллярная вода",
    brand: "PureSkin",
    category: "Уход за кожей",
    subcategory: "Очищение",
    price: 680,
    description: "Деликатно очищает кожу от макияжа и загрязнений. Подходит для чувствительной кожи.",
    image: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "400 мл",
    skinType: "Чувствительная",
    country: "Корея",
    isPopular: true,
    isNew: false,
  },
  {
    id: 4,
    name: "Тональный крем с SPF 30",
    brand: "GlamLook",
    category: "Макияж",
    subcategory: "Тональные средства",
    price: 1450,
    description: "Легкий тональный крем с защитой от солнца. Выравнивает тон кожи, скрывает несовершенства.",
    image: "https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "30 мл",
    skinType: "Нормальная, комбинированная",
    country: "США",
    isPopular: false,
    isNew: true,
  },
  {
    id: 5,
    name: "Маска для волос восстанавливающая",
    brand: "NatureCare",
    category: "Уход за волосами",
    subcategory: "Маски",
    price: 950,
    description: "Интенсивно восстанавливает структуру волос, питает и увлажняет. Подходит для окрашенных волос.",
    image: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "250 мл",
    skinType: "Все типы волос",
    country: "Франция",
    isPopular: false,
    isNew: true,
  },
  {
    id: 6,
    name: "Гель для душа Лаванда",
    brand: "PureSkin",
    category: "Уход за телом",
    subcategory: "Гели для душа",
    price: 580,
    description: "Нежный гель для душа с ароматом лаванды. Увлажняет и успокаивает кожу.",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "300 мл",
    skinType: "Все типы кожи",
    country: "Франция",
    isPopular: true,
    isNew: false,
  },
  {
    id: 7,
    name: "Палетка теней для век",
    brand: "GlamLook",
    category: "Макияж",
    subcategory: "Тени",
    price: 1800,
    description: "Палетка из 12 оттенков теней с матовым и шиммерным финишем. Стойкая формула, насыщенный цвет.",
    image: "https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "12 г",
    skinType: "Все типы кожи",
    country: "США",
    isPopular: true,
    isNew: false,
  },
  {
    id: 8,
    name: "Сыворотка с витамином С",
    brand: "NatureCare",
    category: "Уход за кожей",
    subcategory: "Сыворотки",
    price: 1650,
    description: "Осветляет пигментацию, выравнивает тон кожи и защищает от негативного воздействия окружающей среды.",
    image: "https://images.pexels.com/photos/8127000/pexels-photo-8127000.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "30 мл",
    skinType: "Все типы кожи",
    country: "Корея",
    isPopular: false,
    isNew: true,
  },
  {
    id: 9,
    name: "Тушь для ресниц объемная",
    brand: "GlamLook",
    category: "Макияж",
    subcategory: "Тушь",
    price: 980,
    description: "Придает ресницам объем и длину. Не осыпается и не течет в течение дня.",
    image: "https://i.pinimg.com/736x/f5/14/aa/f514aa029cc2f940b75234a55e1161b8.jpg",
    volume: "10 мл",
    skinType: "Все типы кожи",
    country: "Италия",
    isPopular: true,
    isNew: false,
  },
  {
    id: 10,
    name: "Крем для рук питательный",
    brand: "PureSkin",
    category: "Уход за телом",
    subcategory: "Кремы для рук",
    price: 420,
    description: "Интенсивно питает и увлажняет кожу рук. Быстро впитывается, не оставляет жирного блеска.",
    image: "https://images.pexels.com/photos/3737697/pexels-photo-3737697.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "75 мл",
    skinType: "Сухая",
    country: "Германия",
    isPopular: false,
    isNew: false,
  },
  {
    id: 11,
    name: "Гидрофильное масло",
    brand: "PureSkin",
    category: "Уход за кожей",
    subcategory: "Очищение",
    price: 890,
    description: "Эффективно удаляет макияж и загрязнения. Не нарушает липидный барьер кожи.",
    image: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "200 мл",
    skinType: "Все типы кожи",
    country: "Корея",
    isPopular: false,
    isNew: true,
  },
  {
    id: 12,
    name: "Хайлайтер",
    brand: "GlamLook",
    category: "Макияж",
    subcategory: "Хайлайтеры",
    price: 1250,
    description: "Придает коже естественное сияние. Легкая, невесомая текстура.",
    image: "https://images.pexels.com/photos/2253834/pexels-photo-2253834.jpeg?auto=compress&cs=tinysrgb&w=600",
    volume: "8 г",
    skinType: "Все типы кожи",
    country: "США",
    isPopular: true,
    isNew: false,
  },
];

// Получение категорий и подкатегорий
export const getCategories = () => {
  const categoriesMap = new Map();
  
  products.forEach(product => {
    if (!categoriesMap.has(product.category)) {
      categoriesMap.set(product.category, new Set());
    }
    categoriesMap.get(product.category).add(product.subcategory);
  });
  
  const result = [];
  categoriesMap.forEach((subcategories, category) => {
    result.push({
      name: category,
      subcategories: Array.from(subcategories)
    });
  });
  
  return result;
};

// Бренды
export const getBrands = () => {
  return [...new Set(products.map(product => product.brand))];
};

// Популярные товары
export const getPopularProducts = () => {
  return products.filter(product => product.isPopular);
};

// Новинки
export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

// Поиск товара по ID
export const getProductById = (id: number) => {
  return products.find(product => product.id === id);
};

// Поиск товаров по категории
export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// Поиск товаров по подкатегории
export const getProductsBySubcategory = (subcategory: string) => {
  return products.filter(product => product.subcategory === subcategory);
};