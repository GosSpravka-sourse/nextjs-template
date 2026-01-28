import Link from 'next/link'

export default function LawsPage() {
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <Link 
        href="/" 
        style={{
          color: '#007AFF',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '20px'
        }}
      >
        ← Назад
      </Link>
      
      <h1>⚖️ Законы и нормативы</h1>
      
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '15px',
        borderRadius: '10px',
        margin: '15px 0'
      }}>
        <h2>Трудовой кодекс РФ</h2>
        <p><strong>Статья 21.</strong> Основные права и обязанности работника</p>
        <p><strong>Статья 22.</strong> Основные права и обязанности работодателя</p>
        <p><strong>Статья 91.</strong> Понятие рабочего времени</p>
      </div>
    </div>
  )
}
