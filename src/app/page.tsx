import './globals.css'

export default function Home() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>📚 Служебный Справочник</h1>
      <p>Памятки и законы для сотрудников</p>
      
      <div style={{ marginTop: '50px' }}>
        {/* Кнопка ЗАКОНЫ */}
        <a 
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
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056CC'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007AFF'}
        >
          ⚖️ ЗАКОНЫ
        </a>
      </div>

      <div style={{ marginTop: '30px', color: '#666', fontSize: '14px' }}>
        <p>Выберите раздел для просмотра информации</p>
      </div>
    </div>
  )
}
