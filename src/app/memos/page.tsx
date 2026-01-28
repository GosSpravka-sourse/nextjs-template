export default function MemosPage() {
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
        📋 Служебные памятки
      </h1>
      
      {/* Карточки памяток */}
      <div style={{display: 'grid', gap: '20px'}}>
        
        <a href="/memos/detention" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderLeft: '6px solid #FF3B30'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#FF3B30',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px'
              }}>
                ⚠️
              </div>
              <div>
                <h2 style={{margin: '0 0 10px 0', color: '#333'}}>Задержание</h2>
                <p style={{margin: '0', color: '#666'}}>
                  Порядок действий при задержании подозреваемых лиц
                </p>
              </div>
            </div>
          </div>
        </a>
        
        <a href="/memos/inspection" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderLeft: '6px solid #34C759'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#34C759',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px'
              }}>
                🚗
              </div>
              <div>
                <h2 style={{margin: '0 0 10px 0', color: '#333'}}>Досмотр ТС</h2>
                <p style={{margin: '0', color: '#666'}}>
                  Правила и процедура досмотра транспортных средств
                </p>
              </div>
            </div>
          </div>
        </a>
        
        <a href="/memos/examination" style={{textDecoration: 'none'}}>
          <div style={{
            backgroundColor: 'white',
            padding: '25px',
            borderRadius: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderLeft: '6px solid '#007AFF''
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#007AFF',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '28px'
              }}>
                🔍
              </div>
              <div>
                <h2 style={{margin: '0 0 10px 0', color: '#333'}}>Осмотр места</h2>
                <p style={{margin: '0', color: '#666'}}>
                  Методика осмотра места происшествия
                </p>
              </div>
            </div>
          </div>
        </a>
        
      </div>
      
    </div>
  )
}
