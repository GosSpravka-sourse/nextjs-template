export default function Home() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1 style={{ marginTop: '100px', fontSize: '28px' }}>
        📚 Служебный Справочник
      </h1>
      <p style={{ color: '#666', marginBottom: '80px', fontSize: '18px' }}>
        Памятки и законы для сотрудников
      </p>
      
      <a 
        href="/laws" 
        style={{
          display: 'inline-block',
          backgroundColor: '#007AFF',
          color: 'white',
          padding: '18px 50px',
          fontSize: '20px',
          borderRadius: '12px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 6px 12px rgba(0, 122, 255, 0.3)'
        }}
      >
        ⚖️ ОТКРЫТЬ ЗАКОНЫ
      </a>
      
      <div style={{ 
        marginTop: '150px', 
        color: '#999', 
        fontSize: '16px'
      }}>
        <p>Для служебного использования</p>
      </div>
    </div>
  )
}
