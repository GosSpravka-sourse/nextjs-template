export default function InspectionPage() {
  return (
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
      
      <a href="/memos" style={{
        color: '#007AFF',
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '30px',
        fontSize: '18px'
      }}>
        ← Назад к памяткам
      </a>
      
      <h1 style={{color: '#34C759', marginBottom: '30px', fontSize: '32px'}}>
        🚗 Досмотр транспортного средства
      </h1>
      
      <div style={{
        backgroundColor: '#F0FFF4',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>✅ Основания для досмотра:</h3>
        <ul style={{marginBottom: '0'}}>
          <li>Признаки совершения правонарушения</li>
          <li>Информация о перевозке запрещенных предметов</li>
          <li>Проверка на предмет скрывающихся лиц</li>
          <li>Осуществление розыскных мероприятий</li>
        </ul>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>📋 Этапы досмотра:</h3>
        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
          <div>
            <strong>1. Подготовка:</strong> Остановка ТС, проверка документов, вызов понятых
          </div>
          <div>
            <strong>2. Внешний осмотр:</strong> Багажник, колесные арки, днище, номерные знаки
          </div>
          <div>
            <strong>3. Внутренний осмотр:</strong> Салон, бардачки, сиденья, обшивка
          </div>
          <div>
            <strong>4. Оформление:</strong> Протокол досмотра, перечень изъятого
          </div>
        </div>
      </div>
      
    </div>
  )
}
