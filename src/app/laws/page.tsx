export default function LawsPage() {
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <a 
        href="/" 
        style={{
          color: '#007AFF',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '20px'
        }}
      >
        ← Назад
      </a>
      
      <h1>⚖️ Законы и нормативы</h1>
      
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '15px',
        borderRadius: '10px',
        margin: '15px 0'
      }}>
        <h2>Трудовой кодекс РФ</h2>
        <p><strong>Статья 21.</strong> Основные права и обязанности работника</p>
        <p><strong>Статья 22.</strong> Основные права и обязанности работодателя</p>
        <p><strong>Статья 91.</strong> Понятие рабочего времени</p>
      </div>

      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '15px',
        borderRadius: '10px',
        margin: '15px 0'
      }}>
        <h2>Охрана труда</h2>
        <p>• Федеральный закон № 426-ФЗ "О специальной оценке условий труда"</p>
        <p>• Правила по охране труда при работе на высоте</p>
        <p>• Правила противопожарного режима</p>
      </div>

      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '15px',
        borderRadius: '10px',
        margin: '15px 0'
      }}>
        <h2>Локальные нормативные акты</h2>
        <p>• Правила внутреннего трудового распорядка</p>
        <p>• Положение об оплате труда</p>
        <p>• Коллективный договор</p>
      </div>
    </div>
  )
}
