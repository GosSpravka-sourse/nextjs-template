// app/tactics/65/page.tsx

export default function PursuitTacticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок страницы */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ТАКТИКА №65
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 leading-tight">
            Тактика преследования и задержания по горячим следам лиц, 
            подозреваемых в совершении преступления
          </h2>
          <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 rounded-lg">
            <p className="text-gray-700 italic">
              Преследование преступников &quot;по горячим следам&quot; ведется до тех пор, 
              пока они не будут задержаны и обезврежены.
            </p>
          </div>
        </header>

        {/* Основное содержимое - шаги тактики */}
        <main className="space-y-8">
          {/* Шаг 1 */}
          <section className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white font-bold rounded-full text-lg">
                  1
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Установить место преступления
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>Немедленно проследовать на место с заявителем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>
                      Если преступление вне зоны поста (патруля), сообщить дежурному
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold mt-1">•</span>
                    <span>
                      На автопатруле дать команду водителю следовать в указанное место
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Шаг 2-5 в виде карточек в ряд */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Шаг 2 */}
            <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="mb-3">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full">
                  Шаг 2
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Узнать количество подозреваемых
              </h4>
              <p className="text-gray-600">
                По ходу движения определить количество подозреваемых лиц
              </p>
            </div>

            {/* Шаг 3 */}
            <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="mb-3">
                <span className="inline-block px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full">
                  Шаг 3
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Определить направление движения
              </h4>
              <p className="text-gray-600">
                Установить направление, в котором скрылись подозреваемые
              </p>
            </div>

            {/* Шаг 4 */}
            <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="mb-3">
                <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 font-semibold rounded-full">
                  Шаг 4
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Установить приметы и вооруженность
              </h4>
              <p className="text-gray-600">
                Сначала броские приметы (одежда), затем детали: рост, телосложение, возраст
              </p>
            </div>

            {/* Шаг 5 */}
            <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
              <div className="mb-3">
                <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 font-semibold rounded-full">
                  Шаг 5
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Узнать приметы похищенного
              </h4>
              <p className="text-gray-600">
                Что было похищено, особенности предметов
              </p>
            </div>
          </div>

          {/* Шаг 6 - Важное сообщение */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 bg-white text-blue-600 font-bold rounded-full text-lg">
                  6
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Сообщить информацию дежурному
                </h3>
                <p className="mb-4">
                  Передать полученную информацию дежурному и соседним нарядам
                </p>
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg border border-blue-400">
                  <p className="font-semibold mb-2">Важно!</p>
                  <p className="text-blue-100">
                    Сообщение передается четко, громким голосом, так как на дублирование 
                    уходит дополнительное время, что недопустимо при преследовании 
                    &quot;по горячим следам&quot;
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Шаг 7 с особыми методами */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white font-bold rounded-full text-lg">
                  7
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Обследовать путь отхода преступника
                </h3>
                
                {/* Основное действие */}
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Преследование ведется до задержания и обезвреживания
                  </p>
                </div>

                {/* Особые методы */}
                <div className="space-y-6">
                  {/* Метод с собакой */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-yellow-600">🐕</span>
                      При участии собаки:
                    </h4>
                    <p className="text-gray-700">
                      Если в преследовании участвует собака, остальному наряду 
                      следовать позади кинолога
                    </p>
                  </div>

                  {/* Метод СПИРАЛЬ */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-purple-600">🌀</span>
                      Метод &quot;СПИРАЛЬ&quot;:
                    </h4>
                    <p className="text-gray-700 mb-2">
                      Автопатруль совместно со свидетелем или потерпевшим начинает 
                      поиск преступника по принципу раскручивающейся спирали
                    </p>
                    <p className="text-sm text-purple-600 font-semibold">
                      Успешно используется в ряде городов страны
                    </p>
                  </div>

                  {/* Охрана места */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-gray-900 mb-2">
                      ⚠️ Охрана места происшествия:
                    </h4>
                    <p className="text-gray-700">
                      На период преследования обеспечивается соседними нарядами
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Шаги 8-10 в виде иконок */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Шаг 8 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center">
              <div className="text-3xl mb-4">👥</div>
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 font-semibold rounded-full text-sm mb-3">
                Шаг 8
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Установить свидетелей
              </h4>
            </div>

            {/* Шаг 9 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center">
              <div className="text-3xl mb-4">📝</div>
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 font-semibold rounded-full text-sm mb-3">
                Шаг 9
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Зафиксировать данные
              </h4>
              <p className="text-gray-600 text-sm">
                ФИО и адрес заявителя, потерпевшего
              </p>
            </div>

            {/* Шаг 10 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center">
              <div className="text-3xl mb-4">🕒</div>
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 font-semibold rounded-full text-sm mb-3">
                Шаг 10
              </span>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Ожидать СОГ
              </h4>
              <p className="text-gray-600 text-sm">
                Ожидать приезда следственно-оперативной группы
              </p>
            </div>
          </div>

          {/* Информация о плане "Квартал" */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg p-5">
            <h4 className="font-bold text-gray-900 mb-2 text-lg">
              📋 План операции &quot;Квартал&quot;
            </h4>
            <p className="text-gray-700 mb-2">
              После получения информации дежурный по ОВД вводит в действие план 
              операции &quot;Квартал&quot;. Каждый наряд получает определенный 
              квартал под кодовым номером для отработки.
            </p>
            <p className="text-gray-700">
              <strong>Важно:</strong> План города с номерами кварталов должен 
              находиться в каждом автопатруле.
            </p>
          </div>
        </main>

        {/* Футер страницы */}
        <footer className="mt-12 pt-6 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p>Тактика преследования по горячим следам | №65</p>
            <p className="mt-2">Система оперативно-служебной деятельности</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
