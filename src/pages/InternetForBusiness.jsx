import "./InternetForBusiness.scss"
import Table from "../components/Table/Table"

const internetBusinessPack = [
  { name: 'Бізнес 100', description: 'До 100 Мбіт швидкості', price: 350 },
  { name: 'Бізнес 200', description: 'До 300 Мбіт швидкості', price: 450 },
  { name: 'Бізнес 500', description: 'До 500 Мбіт швидкості', price: 900 },
  { name: 'Бізнес 1000', description: 'До 1000 Мбіт швидкості', price: 1500 },
];
const internetPack = [
  { name: 'Бізнес 50', description: 'До 50 Мбіт швидкості', price: 400 },
  { name: 'Бізнес 100', description: 'До 100 Мбіт швидкості', price: 600 },
  { name: 'Бізнес 200', description: 'До 200 Мбіт швидкості', price: 900 },
  { name: 'Бізнес 500', description: 'До 500 Мбіт швидкості', price: "Індивідуально" },
  { name: 'Бізнес 1000', description: 'До 1000 Мбіт швидкості', price: "Індивідуально" }
  
];


export default function InternetForBusiness() {
  return(
      <div className="internet-for-business">

        <div className="content">
          <h1>Інтернет для бізнесу</h1>

          <Table title={"Інетенет для бізнесу"} services={internetBusinessPack}></Table>
      
          <h2>Інтернет для юридичних осіб та фізичних осіб-підприємців</h2>
          <Table title={"Інтернет для юридичних осіб та фізичних осіб-підприємців"} services={internetPack}></Table>
      
          <p>Корпоративним клієнтам ми завжди готові запропонувати повний набір комплексних рішень в області кабельного телебачення та Інтернет, які перетворюють новітні електронні комунікаційні технології в повноцінний бізнес-інструмент, який, в поєднанні з Вашими здібностями, дозволить освоїти нові рубежі і завоювати нові ринки. Обравши нас, Ви завжди зможете розраховувати на весь спектр електронних комунікаційних сервісів, у тому числі консультування і створення корпоративних мереж «під ключ».</p>
          <p>Висококваліфіковані фахівці нашої компанії знайдуть вихід навіть із найскладніших ситуацій і запропонують таке рішення на завдання замовника, яке забезпечило б високу якість зв’язку й було максимально економним. Ми чудово розуміємо специфіку будь-якого виду діяльності і зможемо підібрати відповідне рішення саме для Вашого бізнесу.</p>
          <p>Цілодобовий моніторинг і резервні канали зв’язку гарантують комфортну роботу з нами в якості партнера, який вирішує Ваші телекомунікаційні задачі.</p>
      
          <ul>
            <li>Тарифні плани діють з 1 травня 2023 року.</li>
            <li>З 1 лютого 2023 року вартість послуги «Оренда зовнішньої статичної IP адреси» — 50 гривень в місяць. Цей фіксований платіж буде нараховуватися щомісяця  поки зовнішній IP надається Вам в оренду незалежно від стану активності інтернет послуги.</li>
            <li>Для пакетів «Інтернет+Телебачення» доступ до мережі Інтернет надається за умови здійснення авансового платежу та одночасно з послугами Кабельне Телебачення (тарифний план «Основний» — 64 телеканалів) та Цифрове Телебачення (146 телеканалів).</li>
            <li>Тарифні плани розраховані для кінцевого домашнього користувача з підключенням одного комп’ютера. У випадку надмірного та нерівномірного використання ресурсів — як навмисного, так і ненавмисного (наприклад, в результаті вірусних атак, програм-троянів або у випадку професійного використання мережі з метою отримання прибутку, розміщення у себе веб-ресурсів та FTP-серверів і т.п.) заявлені параметри якості не гарантуються.</li>                    
          </ul>
        </div>

      </div>
  )
}


