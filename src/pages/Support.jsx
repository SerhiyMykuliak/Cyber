import "./Support.scss"


export default function Support() {
  
  return(
    <div className="support">
      <div className="content">

        <h1>Центр підтримки</h1>
        <h2> Івано-Франківськ, вул. Залізнична </h2>
        <div className="support__work-time">
          <p>Час роботи центру обслуговування абонентів: пн-пт 9:00–18:00, cб 9:00–15:00.</p>
          <p>Час роботи call-центру: пн-пт 8:00–22:00, сб-нд 9:00–22:00.</p>
        </div>

        <div className="support__contacts">

          <h3>Багатоканальний номер</h3>
          <p className="support__contact"> 000 333 </p>

          <h3>Мобільний телефон</h3>
          <p className="support__contact"> 050 2 333 000 </p>
          <p className="support__contact"> 038 2 333 000 </p>
          <p className="support__contact"> 067 2 333 000 </p>
          
          <h3>Електронна пошта</h3>
          <p className="support__contact"> info@gamil.com </p>

          <p style={{marginBottom: "10px"}}>Відвідавши центр обслуговування, Ви зможете:</p>
          <p>Подати заявку на підключення до мережі.</p>
          <p>Подати заявку на розгляд можливості підключення Вашого помешкання до мережі.</p>
          <p>Отримати консультації щодо роботи провайдера та мережі.</p>
          <p>Замовити оголошення на «Інфоканалі».</p>
          <p>Замовити нашого фахівця для усунення поломок чи для монтажу додаткового обладнання.</p>
      
        </div>
      </div>
    </div>
  )
}




