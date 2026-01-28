import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ marginTop: '50px' }}>📚 Служебный Справочник</h1>
      <p style={{ color: '#666', marginBottom: '50px' }}>Памятки и законы для сотрудников</p>
      
      <div style={{ marginTop: '50px' }}>
        <Link 
          href="/laws" 
          style={{
            display: 'inline-block',
            backgroundColor: '#007AFF',
            color: 'white',
            padding: '15px 40px',
            fontSize: '18px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: 'bold',
            margin: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          ⚖️ ЗАКОНЫ
        </Link>
      </div>
    </div>
  )
}
