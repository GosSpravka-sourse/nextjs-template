export const metadata = {
  title: 'Служебный Справочник',
  description: 'Памятки и законы для сотрудников',
}

// Функция для принудительного обновления кэша (клиентская)
function CacheBusterScript() {
  const scriptContent = `
    // Работаем только в браузере
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      
      // Добавляем параметр версии, если его нет
      if (!url.searchParams.has('v')) {
        url.searchParams.set('v', Date.now().toString());
        window.history.replaceState({}, '', url.toString());
        
        // Показываем версию в углу
        const indicator = document.createElement('div');
        indicator.id = 'version-indicator';
        indicator.style.cssText = 'position: fixed; top: 10px; right: 10px; background: #007AFF; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; z-index: 10000;';
        indicator.textContent = 'Версия: ' + url.searchParams.get('v').substring(0, 6);
        document.body.appendChild(indicator);
        
        // Убираем через 3 секунды
        setTimeout(() => {
          indicator.style.display = 'none';
        }, 3000);
      }
      
      // Для Telegram - дополнительная проверка
      if (window.Telegram?.WebApp) {
        console.log('Telegram WebApp: cache busted');
      }
    }
  `;
  
  return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Мета-теги для отключения кэширования */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5'
      }}>
        {/* Подключаем скрипт для сброса кэша */}
        <CacheBusterScript />
        
        {children}
      </body>
    </html>
  )
}
