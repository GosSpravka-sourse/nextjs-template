export default function LawsPage() {
  return (
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
      
      <a href="/" style={{
        color: '#007AFF',
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '30px',
        fontSize: '18px'
      }}>
        ← На главную
      </a>
      
      <h1 style={{color: '#0039A6', marginBottom: '40px', fontSize: '32px'}}>
        ⚖️ Законодательные акты
      </h1>
      
      {/* Карточки законов */}
      <div style={{display: 'grid', gap: '20px'}}>
        
        <a href="/laws/criminal-code" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderLeft: '6px solid #8B0000'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#8B0000',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px'
              }}>
                ⚖️
              </div>
              <div>
                <h2 style={{margin: '0 0 10px 0', color: '#333'}}>Уголовный кодекс РФ</h2>
                <p style={{margin: '0', color: '#666'}}>
                  Основные статьи, применяемые в служебной деятельности
                </p>
              </div>
            </div>
          </div>
        </a>
        
        <a href="/laws/civil-code" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderLeft: '6px solid '#2E8B57''
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#2E8B57',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px'
              }}>
                📜
              </div>
              <div>
                <h2 style={{margin: '0 0 10px 0', color: '#333'}}>Гражданский кодекс РФ</h2>
                <p style={{margin: '0', color: '#666'}}>
                  Нормы гражданского права в работе сотрудников
                </p>
              </div>
            </div>
          </div>
        </a>
        
      </div>
      
    </div>
  )
}
