import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">О компании</h1>
      
      <div className="max-w-4xl mx-auto">
        {/* О нас */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">О нас</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="О нас" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Bella</strong> – это магазин косметики премиум-класса, основанный в 2020 году. Мы предлагаем широкий ассортимент качественной продукции от ведущих мировых брендов.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Наша миссия – сделать качественную косметику доступной для каждой женщины в Кыргызстане. Мы тщательно отбираем каждый продукт, следим за новинками индустрии и предлагаем только лучшее.
              </p>
              <p className="text-gray-600 leading-relaxed">
                В нашем магазине вы найдете все необходимое для ежедневного ухода, макияжа и поддержания красоты. Мы гарантируем подлинность каждого товара и предоставляем профессиональные консультации по подбору косметики.
              </p>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">100% оригинальная продукция</h3>
              <p className="text-gray-600 text-sm">Работаем только с официальными поставщиками и дистрибьюторами</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Конкурентные цены</h3>
              <p className="text-gray-600 text-sm">Мы постоянно следим за рынком и предлагаем лучшие цены</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Профессиональные консультации</h3>
              <p className="text-gray-600 text-sm">Наши консультанты помогут подобрать продукты именно для вас</p>
            </div>
          </div>
        </section>
        
        {/* Контакты */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Контакты</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4 text-pink-600">Магазин в Бишкеке</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>г. Бишкек, ул. Киевская 93, ТЦ "Бишкек Плаза", 2 этаж</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Пн-Вс: 10:00 - 21:00</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+996 (700) 123-456</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>info@bella.kg</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-pink-600">Напишите нам</h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Ваш email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Сообщение" 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                    >
                      Отправить
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;