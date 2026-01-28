export default function CivilCodePage() {
  return (
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
      
      <a href="/laws" style={{
        color: '#007AFF',
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '30px',
        fontSize: '18px'
      }}>
        ← Назад к законам
      </a>
      
      <h1 style={{color: '#2E8B57', marginBottom: '30px', fontSize: '32px'}}>
        📜 Гражданский кодекс РФ
      </h1>
      
      <div style={{
        backgroundColor: '#F0FFF8',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>📖 Часть первая</h3>
        <p>Раздел I. Общие положения</p>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>🔍 Основные разделы:</h3>
        <div style={{marginTop: '20px'}}>
          <div style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee'}}>
            <strong>Глава 2. Возникновение гражданских прав и обязанностей</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Основания возникновения и осуществления гражданских прав
            </p>
          </div>
          <div style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee'}}>
            <strong>Глава 9. Сделки</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Понятие, виды и форма сделок, условия их действительности
            </p>
          </div>
          <div style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee'}}>
            <strong>Глава 14. Право собственности</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Содержание и осуществление права собственности
            </p>
          </div>
          <div>
            <strong>Глава 59. Обязательства вследствие причинения вреда</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Общие основания ответственности за причинение вреда
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
