import './Television.scss'
import Table from '../components/Table/Table'

const TVPack = [
    { name: 'Основний', description: 'Багатоквартирний будинок', price: 269 },
    { name: 'Основний', description: 'Приватний сектор', price: 369 },

    
];


export default function Television() {
    
    return(
        <div className='television'>
            
            <div className="content">

                <h1>Цифрове телебачення</h1>
                <h2>Понад 140 цифрових та 60 аналогових каналів</h2>
                <Table title={"Цифрове телебачення"} services={TVPack}></Table>

                <p style={{marginTop: "40px"}}>Тарифний план діє з 1 травня 2023 року.</p>
                <p>Цифрові канали транслюються в стандарті DVB-C в форматах MPEG-2 та MPEG-4. Для налаштування цифрових каналів використовуйте наступні параметри пошуку:</p>
                <p>Частота: 322 МГц;</p>
                <p>Модуляція: QAM 256;</p>
                <p>Символьна швидкість: 6900;</p>
                <p>Мережевий пошук каналів: увімкнено.</p>
                <p>Переглянути інструкцію з налаштування цифрових каналів.</p>
            </div>

        </div>
    )

}


