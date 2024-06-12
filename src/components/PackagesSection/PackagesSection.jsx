import "./PackagesSection.scss"
import PackageCard from "./PackageCard"
import monitor from "../../assets/images/monitoring.png"
import wifi from "../../assets/images/wireless.png"


export default function PackagesSection(){

  return(
    <div className="packages-section">

      <div className="content packages-section__content">
        <h2 className="packages-section__header">Підключення пакету</h2>
        
        <div className="packages-section__packages">
          <PackageCard iconUrl={monitor} header={"Супутникове ТБ"} description={"Неймовірне за якістю супутникове телебачення. Завдяки якому ви можете насолоджуватися улюбленими шоу, фільмами та новинами з усього світу."} price={"269"} linkTo={"/television"}/>
          <PackageCard iconUrl={wifi} header={"Інтернет"} description={"Стабільне та швидке з'єднання, яке дозволяє вам насолоджуватися онлайн-контентом без затримок та будь яких проблем."} price={"225"} linkTo={"/internet"}/>
        </div>
      </div>

    </div>
  )


}
