import "./HeroSection.scss"
import Button from "../Button/Button"
import wifiIcon from  "../../assets/images/rv-cion.png"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function HeroSection(){

    return(

        <div className="hero-section">

            <div className="hero-section__content content">
                
                <div className="hero-section__service-header">
                    <div style={{backgroundImage: `url(${wifiIcon})`}} className="hero-section__icon"></div>
                    <div className="hero-section__service">Інтернет та телебаченя</div>
                </div>

                <h1 className="hero-section__title">Найкращий провайдер в Твоєму регіоні</h1>

                <p className="hero-section__text">Швидкість + Без плати за обслуговування + Вигідні контракти + Широке покриття</p>

                <div className="hero-section__buttons">
                    <Button linkTo={"/internet"}>Інтернет</Button>
                    <Button linkTo={"/support"} className={'button-secondary'}>Зв'язатися з нами</Button>
                </div>

            </div>


        </div>


    )

}





