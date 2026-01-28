export default function ExaminationPage() {
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
      
      <h1 style={{color: '#007AFF', marginBottom: '30px', fontSize: '32px'}}>
        🔍 Осмотр места происшествия
      </h1>
      
      <div style={{
        backgroundColor: '#E8F4FF',
        padding: '25px',
        borderRadius: '15px',
        marginBottom: '30px'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>🎯 Цели осмотра:</h3>
        <ul style={{marginBottom: '0'}}>
          <li>Обнаружение и изъятие следов преступления</li>
          <li>Установление обстоятельств происшествия</li>
          <li>Выявление и фиксация вещественных доказательств</li>
          <li>Определение механизма совершения правонарушения</li>
        </ul>
      </div>
      
      <div style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>📋 Стадии осмотра:</h3>
        <div style={{display: 'grid', gap: '15px', marginTop: '20px'}}>
          <div>
            <strong>1. Подготовительная:</strong> Оцепление, фотофиксация общего плана
          </div>
          <div>
            <strong>2. Статическая:</strong> Осмотр без изменения положения объектов
          </div>
          <div>
            <strong>3. Динамическая:</strong> Детальный осмотр с перемещением предметов
          </div>
          <div>
            <strong>4. Заключительная:</strong> Составление протокола, упаковка вещдоков
          </div>
        </div>
      </div>
      
    </div>
  )
}
