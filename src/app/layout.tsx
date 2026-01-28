export const metadata = {
  title: 'Служебный Справочник',
  description: 'Памятки и законы для сотрудников',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Простой скрипт для сброса кэша */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Добавляем параметр версии к URL
            if (typeof window !== 'undefined') {
              const url = new URL(window.location.href);
              if (!url.searchParams.has('v')) {
                url.searchParams.set('v', Date.now().toString());
                window.history.replaceState({}, '', url.toString());
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
        {children}
      </body>
    </html>
  )
}
