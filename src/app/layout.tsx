'use client'; // Добавляем эту строку для использования хуков

import { useEffect } from 'react';

export const metadata = {
  title: 'Служебный Справочник',
  description: 'Памятки и законы для сотрудников',
}

// Функция для добавления параметра версии
function useCacheBuster() {
  useEffect(() => {
    // Работаем только в браузере
    if (typeof window !== 'undefined') {
      const currentUrl = new URL(window.location.href);
      
      // Добавляем параметр версии, если его нет
      if (!currentUrl.searchParams.has('v')) {
        currentUrl.searchParams.set('v', Date.now().toString()); // Уникальная версия
        window.history.replaceState({}, '', currentUrl.toString());
      }
      
      // Также для Telegram Mini App
      if (window.Telegram?.WebApp) {
        console.log('Telegram WebApp detected, cache busted');
      }
    }
  }, []);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Используем хук для сброса кэша
  useCacheBuster();
  
  return (
    <html lang="ru">
      <head>
        {/* Мета-теги для отключения кэширования */}
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        
        {/* Для принудительного обновления в Telegram */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Принудительный сброс кэша для Telegram
            if (typeof window !== 'undefined') {
              // Проверяем, открыто ли в Telegram
              const isTelegram = typeof window.Telegram !== 'undefined' && window.Telegram.WebApp;
              
              // Добавляем уникальный параметр к URL
              const url = new URL(window.location.href);
              const currentVersion = url.searchParams.get('v') || '1';
              
              // Если версия старая или нет параметра - обновляем
              if (!url.searchParams.has('v') || currentVersion === '1') {
                url.searchParams.set('v', Date.now().toString());
                window.history.replaceState({}, '', url.toString());
                
                // Если в Telegram - сообщаем о перезагрузке
                if (isTelegram) {
                  setTimeout(() => {
                    window.location.reload();
                  }, 100);
                }
              }
            }
          `
        }} />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5'
      }}>
        {/* Индикатор загрузки новой версии */}
        <div id="version-indicator" style={{
          display: 'none',
          position: 'fixed',
          top: '10px',
          right: '10px',
          backgroundColor: '#007AFF',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 10000
        }}>
          Версия: {typeof window !== 'undefined' ? new URL(window.location.href).searchParams.get('v')?.substring(0, 6) : '1'}
        </div>
        
        {children}
        
        {/* Скрипт для показа версии в углу (опционально) */}
        <script dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              const indicator = document.getElementById('version-indicator');
              if (indicator) {
                indicator.style.display = 'block';
                setTimeout(() => {
                  indicator.style.display = 'none';
                }, 3000);
              }
            }, 1000);
          `
        }} />
      </body>
    </html>
  )
}
