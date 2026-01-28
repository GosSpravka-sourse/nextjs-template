export default function Home() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0039A6 0%, #00287A 100%)',
      color: 'white'
    }}>
      
      {/* Шапка */}
      <div style={{marginTop: '80px', marginBottom: '60px'}}>
        <h1 style={{fontSize: '32px', fontWeight: 'bold', marginBottom: '15px'}}>
          🚔 СЛУЖЕБНЫЙ СПРАВОЧНИК
        </h1>
        <p style={{fontSize: '18px', opacity: '0.9'}}>
          Оперативные материалы для сотрудников МВД
        </p>
      </div>
      
      {/* Кнопки */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        
        {/* Кнопка ПАМЯТКИ */}
        <a href="/memos" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: '#5856D6',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            fontSize: '22px',
            fontWeight: 'bold',
            boxShadow: '0 8px 25px rgba(88, 86, 214, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            transition: 'transform 0.2s'
          }}>
            <span style={{fontSize: '32px'}}>📋</span>
            <span>СЛУЖЕБНЫЕ ПАМЯТКИ</span>
          </div>
        </a>
        
        {/* Кнопка ЗАКОНЫ */}
        <a href="/laws" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: '#007AFF',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            fontSize: '22px',
            fontWeight: 'bold',
            boxShadow: '0 8px 25px rgba(0, 122, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            transition: 'transform 0.2s'
          }}>
            <span style={{fontSize: '32px'}}>⚖️</span>
            <span>ЗАКОНОДАТЕЛЬНЫЕ АКТЫ</span>
          </div>
        </a>
        
      </div>
      
      {/* Нижний блок */}
      <div style={{
        marginTop: '100px',
        padding: '20px',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px'
      }}>
        <div>Версия 1.0 | Для служебного пользования</div>
      </div>
      
    </div>
  )
}
