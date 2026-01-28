'use client';

import { useTelegram } from '@telegram-apps/sdk-react';
import Link from 'next/link';

export default function Home() {
  const { initData } = useTelegram();
  const userName = initData?.user?.firstName || 'сотрудник';

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      {/* Важный дисклеймер */}
      <div className="bg-red-950/60 p-4 rounded-xl mb-6 text-sm border border-red-800">
        <strong>Важно:</strong> Только официальные источники (pravo.gov.ru, consultant.ru).  
        Неофициальный справочник. Не является юридической консультацией и не заменяет служебные инструкции.
      </div>

      {/* Приветствие */}
      <h1 className="text-3xl font-bold mb-2">Служебный Справочник</h1>
      <p className="text-gray-400 mb-8">Добро пожаловать, {userName}</p>

      {/* Главное меню — карточки */}
      <div className="grid grid-cols-1 gap-5">
        {/* Кнопка Законы и кодексы */}
        <Link 
          href="/laws"
          className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 rounded-2xl hover:from-blue-800 hover:to-indigo-800 transition-all shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">📜 Законы и кодексы</h2>
          <p className="text-gray-300">
            ФЗ «О полиции», УК, КоАП, УПК, ФЗ №342, Дисциплинарный устав
          </p>
          <p className="text-blue-400 mt-4 text-right">→</p>
        </Link>

        {/* Другие пункты (можно добавить позже) */}
        <Link 
          href="/procedures"
          className="bg-gradient-to-r from-green-900 to-teal-900 p-6 rounded-2xl hover:from-green-800 hover:to-teal-800 transition-all shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">📋 Памятки и алгоритмы</h2>
          <p className="text-gray-300">
            Применение силы, задержание, досмотр, оформление материалов
          </p>
          <p className="text-green-400 mt-4 text-right">→</p>
        </Link>

        <Link 
          href="/situations"
          className="bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-2xl hover:from-purple-800 hover:to-pink-800 transition-all shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">⚡ Типовые ситуации</h2>
          <p className="text-gray-300">
            Наркотики, пьяный водитель, семейное насилие и др.
          </p>
          <p className="text-purple-400 mt-4 text-right">→</p>
        </Link>

        <Link 
          href="/search"
          className="bg-gradient-to-r from-amber-900 to-orange-900 p-6 rounded-2xl hover:from-amber-800 hover:to-orange-800 transition-all shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2">🔍 Поиск и закладки</h2>
          <p className="text-gray-300">
            Поиск по словам, фильтры, избранное
          </p>
          <p className="text-amber-400 mt-4 text-right">→</p>
        </Link>
      </div>
    </div>
  );
}
