export default function CriminalCodePage() {
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
      
      <h1 style={{color: '#8B0000', marginBottom: '30px', fontSize: '32px'}}>
        ⚖️ Уголовный кодекс РФ
      </h1>
      
      <div style={{
        backgroundColor: '#FFF0F0',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>📖 Часть Особенная</h3>
        <p>Раздел VII. Преступления против личности</p>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>🔍 Ключевые статьи:</h3>
        <div style={{marginTop: '20px'}}>
          <div style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee'}}>
            <strong>Статья 105. Убийство</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Умышленное причинение смерти другому человеку
            </p>
          </div>
          <div style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee'}}>
            <strong>Статья 111. Умышленное причинение тяжкого вреда здоровью</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Действия, опасные для жизни или повлекшие потерю органа
            </p>
          </div>
          <div style={{marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #eee'}}>
            <strong>Статья 158. Кража</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Тайное хищение чужого имущества
            </p>
          </div>
          <div>
            <strong>Статья 228. Незаконный оборот наркотиков</strong>
            <p style={{margin: '5px 0 0 0', color: '#666'}}>
              Приобретение, хранение, перевозка наркотических средств
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
