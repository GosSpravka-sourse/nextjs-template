export default function Home() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      
      {/* Шапка */}
      <div style={{
        marginTop: '40px',
        marginBottom: '60px'
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '15px 30px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
        }}>
          <h1 style={{
            margin: '0',
            color: '#0039A6',
            fontSize: '28px',
            fontWeight: 'bold'
          }}>
            🚔 СЛУЖЕБНЫЙ СПРАВОЧНИК МВД
          </h1>
          <p style={{
            margin: '10px 0 0 0',
            color: '#666',
            fontSize: '16px'
          }}>
            Оперативные материалы для сотрудников
          </p>
        </div>
      </div>
      
      {/* Карточка пользователя */}
      <div style={{
        backgroundColor: 'white',
        maxWidth: '400px',
        margin: '0 auto 40px',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#0039A6',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '24px'
          }}>
            👮
          </div>
          <div style={{textAlign: 'left'}}>
            <div style={{fontWeight: 'bold', fontSize: '18px'}}>
              Сотрудник МВД
            </div>
            <div style={{color: '#666', fontSize: '14px'}}>
              Статус: <span style={{color: '#34C759'}}>Дежурный</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Основные кнопки */}
      <div style={{
        display: 'grid',
        gap: '20px',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        
        {/* Кнопка 1: ЗАКОНЫ */}
        <a 
          href="/laws" 
          style={{
            display: 'block',
            textDecoration: 'none'
          }}
        >
          <div style={{
            backgroundColor: '#007AFF',
            color: 'white',
            padding: '25px 30px',
            borderRadius: '15px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            boxShadow: '0 6px 20px rgba(0, 122, 255, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(0, 122, 255, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 122, 255, 0.3)';
          }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px'
            }}>
              ⚖️
            </div>
            <div>
              <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '5px'}}>
                ЗАКОНЫ И НОРМАТИВЫ
              </div>
              <div style={{fontSize: '14px', opacity: '0.9'}}>
                Трудовой кодекс, КоАП, УК РФ
              </div>
            </div>
            <div style={{marginLeft: 'auto', fontSize: '24px'}}>
              →
            </div>
          </div>
        </a>
        
        {/* Кнопка 2: СЛУЖЕБНЫЕ ПАМЯТКИ */}
        <a 
          href="/memos" 
          style={{
            display: 'block',
            textDecoration: 'none'
          }}
        >
          <div style={{
            backgroundColor: '#5856D6',
            color: 'white',
            padding: '25px 30px',
            borderRadius: '15px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            boxShadow: '0 6px 20px rgba(88, 86, 214, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(88, 86, 214, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(88, 86, 214, 0.3)';
          }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px'
            }}>
              📋
            </div>
            <div>
              <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '5px'}}>
                СЛУЖЕБНЫЕ ПАМЯТКИ
              </div>
              <div style={{fontSize: '14px', opacity: '0.9'}}>
                Алгоритмы действий в различных ситуациях
              </div>
            </div>
            <div style={{marginLeft: 'auto', fontSize: '24px'}}>
              →
            </div>
          </div>
        </a>
        
        {/* Кнопка 3: ЭКСТРЕННЫЙ СЛУЧАЙ */}
        <a 
          href="/emergency" 
          style={{
            display: 'block',
            textDecoration: 'none'
          }}
        >
          <div style={{
            backgroundColor: '#FF3B30',
            color: 'white',
            padding: '25px 30px',
            borderRadius: '15px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            boxShadow: '0 6px 20px rgba(255, 59, 48, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(255, 59, 48, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 59, 48, 0.3)';
          }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '30px',
              animation: 'pulse 2s infinite'
            }}>
              🆘
            </div>
            <div>
              <div style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '5px'}}>
                ЭКСТРЕННЫЙ СЛУЧАЙ
              </div>
              <div style={{fontSize: '14px', opacity: '0.9'}}>
                Алгоритмы действий при ЧС и опасных ситуациях
              </div>
            </div>
            <div style={{marginLeft: 'auto', fontSize: '24px'}}>
              →
            </div>
          </div>
        </a>
        
      </div>
      
      {/* Нижний блок */}
      <div style={{
        marginTop: '60px',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px'
      }}>
        <div style={{marginBottom: '10px'}}>
          🛡️ Версия 1.0 | Для служебного пользования
        </div>
        <div>
          При возникновении вопросов обращайтесь в учебный отдел
        </div>
      </div>
      
      {/* Стили для анимации */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
      
    </div>
  )
}
