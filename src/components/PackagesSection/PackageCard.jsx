import Button from "../Button/Button"
import "./PackageCard.scss"



export default function PackageCard({iconUrl, header, description, price, linkTo}){
    
    return(

        <div className="package-card">
            <div className="package-card__content">

                <div className="package-card__icon">
                    <img src={iconUrl} alt="" className="package-card__icon-image"/>
                </div>
                <div className="package-card__header">{header}</div>
                <div className="package-card__text">{description}</div>

                <Button linkTo={linkTo} className={'button-primary'} >Від {price} грн/міс</Button>

            </div>
        </div>

    )


}






