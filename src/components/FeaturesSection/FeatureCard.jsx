import './FeatureCard.scss'

export default function FeatureCard(feature){

    return(
        
        <div className="feature-card">
            
            <div style={{backgroundImage: `url(${feature.iconUrl})`}} className='feature-card__icon'></div>
            <div className="feature-card__description">{feature.description}</div>

        </div>

    )

}


