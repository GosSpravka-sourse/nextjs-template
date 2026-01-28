export default function DetentionPage() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto'}}>
      
      <a href="/memos" style={{
        color: '#007AFF',
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '30px'
      }}>
        ← Назад к памяткам
      </a>
      
      <h1 style={{color: '#FF3B30', marginBottom: '30px'}}>
        ⚠️ Порядок задержания
      </h1>
      
      <div style={{backgroundColor: '#FFF2F2', padding: '20px', borderRadius: '10px', marginBottom: '30px'}}>
        <strong>Основания для задержания:</strong> подозрение в совершении преступления, административное правонарушение, установление личности.
      </div>
      
      {/* Пошаговый алгоритм */}
      <div style={{marginBottom: '40px'}}>
        <h2 style={{color: '#333', marginBottom: '20px'}}>Алгоритм действий:</h2>
        
        <div style={{display: 'grid', gap: '15px'}}>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #E5E5EA'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div style={{
                width: '35px',
                height: '35px',
                backgroundColor: '#FF3B30',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                1
              </div>
              <h3 style={{margin: '0'}}>Представление и предупреждение</h3>
            </div>
            <p style={{margin: '15px 0 0 50px'}}>
              • Четко представиться<br/>
              • Объявить основание задержания<br/>
              • Разъяснить права (ст. 51 Конституции РФ)<br/>
              • Предупредить о применении силы при сопротивлении
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #E5E5EA'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div style={{
                width: '35px',
                height: '35px',
                backgroundColor: '#FF9500',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                2
              </div>
              <h3 style={{margin: '0'}}>Личный досмотр</h3>
            </div>
            <p style={{margin: '15px 0 0 50px'}}>
              • Провести в присутствии понятых<br/>
              • Составить протокол досмотра<br/>
              • Изъять опасные предметы<br/>
              • Проверить на наличие травм
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #E5E5EA'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div style={{
                width: '35px',
                height: '35px',
                backgroundColor: '#34C759',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                3
              </div>
              <h3 style={{margin: '0'}}>Доставление</h3>
            </div>
            <p style={{margin: '15px 0 0 50px'}}>
              • Обеспечить безопасную транспортировку<br/>
              • Не допускать жестокого обращения<br/>
              • Контролировать состояние задержанного<br/>
              • При необходимости оказать первую помощь
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            border: '1px solid #E5E5EA'
          }}>
            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <div style={{
                width: '35px',
                height: '35px',
                backgroundColor: '#007AFF',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                4
              </div>
              <h3 style={{margin: '0'}}>Оформление</h3>
            </div>
            <p style={{margin: '15px 0 0 50px'}}>
              • Составить протокол задержания<br/>
              • Уведомить родственников/защитника<br/>
              • Внести в журнал учета<br/>
              • Передать дежурному по ОВД
            </p>
          </div>
          
        </div>
      </div>
      
      {/* Важные моменты */}
      <div style={{
        backgroundColor: '#F2F2F7',
        padding: '25px',
        borderRadius: '10px',
        marginBottom: '30px'
      }}>
        <h3 style={{marginTop: '0', color: '#333'}}>❗ Особые ситуации:</h3>
        <ul style={{marginBottom: '0'}}>
          <li><strong>Несовершеннолетний:</strong> уведомить родителей, педагога</li>
          <li><strong>Иностранный гражданин:</strong> уведомить консульство</li>
          <li><strong>Состояние опьянения:</strong> медицинское освидетельствование</li>
          <li><strong>Сопротивление:</strong> применение спецсредств по регламенту</li>
        </ul>
      </div>
      
      {/* Нормативные акты */}
      <div style={{
        backgroundColor: '#E8F4FF',
        padding: '20px',
        borderRadius: '10px'
      }}>
        <h3 style={{marginTop: '0', color: '#007AFF'}}>📚 Нормативная база:</h3>
        <p>• ФЗ "О полиции" (ст. 14)<br/>
           • УПК РФ (ст. 91, 92)<br/>
           • КоАП РФ (ст. 27.3-27.5)<br/>
           • Приказ МВД России № 140 (регламент задержания)</p>
      </div>
      
    </div>
  )
}
