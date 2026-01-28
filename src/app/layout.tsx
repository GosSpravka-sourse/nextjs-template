export const metadata = {
  title: 'Служебный Справочник МВД',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
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
