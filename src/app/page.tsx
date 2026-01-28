export default function Home() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#0039A6',
      background: 'linear-gradient(135deg, #0039A6 0%, #00287A 100%)',
      color: 'white'
    }}>
      
      {/* Шапка */}
      <div style={{marginTop: '60px', marginBottom: '50px'}}>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          padding: '20px 35px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <h1 style={{margin: '0', fontSize: '28px', fontWeight: 'bold'}}>
            🚔 СЛУЖЕБНЫЙ СПРАВОЧНИК
          </h1>
          <p style={{margin: '10px 0 0 0', opacity: '0.9', fontSize: '16px'}}>
            Оперативные материалы для сотрудников МВД
          </p>
        </div>
      </div>
      
      {/* Основные кнопки */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        
        {/* Кнопка 1: ЗАКОНЫ */}
        <a href="/laws" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: '#007AFF',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 6px 20px rgba(0, 122, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <span style={{fontSize: '28px'}}>⚖️</span>
            <span>ЗАКОНЫ И НОРМАТИВЫ</span>
          </div>
        </a>
        
        {/* Кнопка 2: ПАМЯТКИ */}
        <a href="/memos" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: '#5856D6',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 6px 20px rgba(88, 86, 214, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <span style={{fontSize: '28px'}}>📋</span>
            <span>СЛУЖЕБНЫЕ ПАМЯТКИ</span>
          </div>
        </a>
        
        {/* Кнопка 3: ЭКСТРЕННЫЙ СЛУЧАЙ */}
        <a href="/emergency" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: '#FF3B30',
            color: 'white',
            padding: '25px',
            borderRadius: '15px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 6px 20px rgba(255, 59, 48, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <span style={{fontSize: '28px'}}>🆘</span>
            <span>ЭКСТРЕННЫЙ СЛУЧАЙ</span>
          </div>
        </a>
        
      </div>
      
      {/* Нижняя информация */}
      <div style={{
        marginTop: '80px',
        padding: '20px',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px'
      }}>
        <div>Версия 1.0 | Для служебного использования</div>
        <div style={{marginTop: '10px', fontSize: '12px'}}>
          При возникновении вопросов обращайтесь в учебный отдел
        </div>
      </div>
      
    </div>
  )
}
