import "./Footer.scss"
import Logo from "../Logo/Logo"
import workTimeIcon from "../../assets/images/work-time-icon.png"
import telegramIcon from "../../assets/images/telegram.png"
import phoneIcon from "../../assets/images/phone.png"


export default function Footer() {

    return(

        <footer className="footer">
            <div className="content footer__content">
                <Logo></Logo>

                <div className="footer__contacts">

                    <div className="footer__contact">
                        <img src={telegramIcon} alt="" />
                        <div className="footer__contact-text"> +380 06 566 3040 </div>
                    </div>
                    <div className="footer__contact"><img src={phoneIcon} alt="" /> _Serhij_ </div>

                </div>

                <div className="footer__work-time">
                    <div className="footer__work-time-icon"><img className="footer__work-time-icon-image" src={workTimeIcon} alt="" /></div>

                    <div className="footer__work-time-icon-wrap">

                        <div className="footer__work-time-header">Робочі дні</div>
                        <div className="footer__work-time-description">Пн-Сб(8:00 - 19:00)</div>
                        <div className="footer__work-time-description">Неділя - вихідний</div>

                    </div>
                </div>


            </div>
        </footer>

    )
    
}





