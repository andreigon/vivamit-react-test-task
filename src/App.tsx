import './App.css'
import provider from './assets/provider.jpg'
import bisness_partner from './assets/bisness_partner.jpg'
import agents from './assets/agents.jpg'

function App() {


  return (
    <>
     <div className="container">
        <div className="header">
            <h1>Приглашаем бизнес к сотрудничеству</h1>
        </div>
        <div className="main_block">
            <div className="main_block_card_provider">
            <img src={provider} />
                <h5 className="card_name">
                    ПОСТАВЩИК ТОВАРОВ И УСЛУГ
                </h5>
                <h2>
                    Доступ к новым рынкам и клиентам
                </h2>
                <div className="description">
                    Откройте для себя новые возможности на международных рынках, получая доступ к эксклюзивным предложениям и улучшая свои позиции в глобальной цепочке поставок. Мы поможем вам расширить охват и найти надежных партнеров для устойчивого роста.
                </div>
                <button>Верефецироваться →</button>

            </div>      
            <div className="main_block_card_associations">
                <img src={bisness_partner} />
                <h5 className="card_name">
                    БИЗНЕС-АССОЦИАЦИИ
                </h5>
                <h2>
                    Расширение стратегических партнерств
                </h2>
                <div className="description">
                    Объедините усилия с лидерами отрасли других стран. Создайте инновационные решения и продвигайте новые стандарты в своей сфере. Мы постараемся укрепить позиции ваших членов на их целевом рынке, чтобы помочь достичь поставленных целей.
                </div>
                <button>Подать заявку →</button>
            </div>
            <div className="main_block_card_agents">
                <img src={agents}/>
                <h5 className="card_name">
                    АГЕНТЫ И БРОКЕРЫ
                </h5>
                <h2>
                    Обеспечьте надежные сделки
                </h2>
                <div className="description">
                    Увеличьте свою клиентскую базу и заключайте выгодные сделки. Поддерживайте прозрачность и снижение рисков для участников рынка. Получите необходимые инструменты и ресурсы для повышения эффективности вашего бизнеса.
                </div>
                <button>Верефецироваться →</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
