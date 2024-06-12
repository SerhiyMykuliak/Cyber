
import "./Internet.scss"
import Table from "../components/Table/Table"

const internetTVPack = [
  { name: 'PON 100+КТБ', description: 'До 100 Мбіт швидкості', price: 269 },
  { name: 'PON 300+КТБ', description: 'До 300 Мбіт швидкості', price: 369 },
  { name: 'PON 500+КТБ', description: 'До 500 Мбіт швидкості', price: 469 },
  
];

const internetPack = [
  { name: 'Оптика 100', description: 'До 100 Мбіт швидкості', price: 225 },
  { name: 'Оптика 300', description: 'До 300 Мбіт швидкості', price: 325 },
  { name: 'Оптика 500', description: 'До 500 Мбіт швидкості', price: 425 },
];

const privatSectorInternetTVPack = [
  { name: 'Хатинка 100+КТБ', description: 'До 100 Мбіт швидкості', price: 350 },
  { name: 'Хатинка 300+КТБ', description: 'До 300 Мбіт швидкості', price: 450 },
  { name: 'Хатинка 500+КТБ', description: 'До 500 Мбіт швидкості', price: 550 },
];

const privatSectorInternetPack = [
  { name: 'Хатинка 100', description: 'До 100 Мбіт швидкості', price: 250 },
  { name: 'Хатинка 500', description: 'До 500 Мбіт швидкості', price: 500 },
  
];

export default function Internet(){

  return(
    <div className="internet">
      <div className="content internet__content">
        <h1>Інтернет для дому</h1>
    
        <h2 className="">PON@NET</h2>
        <p>Тарифи PON@NЕТ надаються по технології GPON у багатоповерхових будинках</p>
        <div className="internet__pack-section">
            <Table title="Інтернет+Телебачення" services={internetTVPack} ></Table>
            <Table title="Інтернет" services={internetPack} ></Table>
        </div>


        <h2 className="">Приватний сектор</h2>
        <p>Тарифи Хатинка надаються по технології GPON у приватних та малоквартирних будинках</p>
        <div className="internet__pack-section">
          <Table title="Інтернет+Телебачення" services={privatSectorInternetTVPack} ></Table>
          <Table title="Інтернет" services={privatSectorInternetPack} ></Table>
        </div>

        <h3>Вибираючи будь-який з тарифів, ви автоматично погоджуєтесь з правилами надання телекомунікаційних послуг</h3>
        <ul>
          <li><p>Тарифні плани діють з 1 травня 2023 року.</p></li>
          <li><p>З 1 лютого 2023 року вартість послуги «Оренда зовнішньої статичної IP адреси» — 50 гривень в місяць. Цей фіксований платіж буде нараховуватися щомісяця  поки зовнішній IP надається Вам в оренду незалежно від стану активності інтернет послуги.</p></li>
          <li><p>Для пакетів «Інтернет+Телебачення» доступ до мережі Інтернет надається за умови здійснення авансового платежу та одночасно з послугами Кабельне Телебачення (тарифний план «Основний» — 64 телеканалів) та Цифрове Телебачення (146 телеканалів).</p></li>
          <li><p>Тарифні плани розраховані для кінцевого домашнього користувача з підключенням одного комп’ютера. У випадку надмірного та нерівномірного використання ресурсів — як навмисного, так і ненавмисного (наприклад, в результаті вірусних атак, програм-троянів або у випадку професійного використання мережі з метою отримання прибутку, розміщення у себе веб-ресурсів та FTP-серверів і т.п.) заявлені параметри якості не гарантуються.</p></li>
        </ul>

      </div>
    </div>
  )
  
}








