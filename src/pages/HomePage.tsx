import React from 'react';
import Banner from '../components/Home/Banner';
import ProductSlider from '../components/Home/ProductSlider';
import Categories from '../components/Home/Categories';
import { getPopularProducts, getNewProducts } from '../data/products';

const HomePage: React.FC = () => {
  const popularProducts = getPopularProducts();
  const newProducts = getNewProducts();

  return (
    <>
      <Banner />
      
      <ProductSlider title="Новинки" products={newProducts} />
      
      <Categories />
      
      <ProductSlider title="Популярные товары" products={popularProducts} />
      
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Почему выбирают нас</h2>
            <p className="text-gray-600 mb-10">
              Мы предлагаем только оригинальную продукцию от проверенных брендов и гарантируем высочайшее качество каждого товара.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Оригинальная продукция</h3>
                <p className="text-gray-600 text-sm">Только настоящая косметика от официальных поставщиков</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Бесплатная доставка</h3>
                <p className="text-gray-600 text-sm">При заказе от 3000 сом по всему Бишкеку</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Удобные способы оплаты</h3>
                <p className="text-gray-600 text-sm">Наличными, картой или онлайн-переводом</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;