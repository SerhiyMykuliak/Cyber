import FeatureCard from './FeatureCard'
import './FeaturesCardList.scss'

export default function FeaturesSectionList({features}){

  return(
    <div className="feature-card-list">
      {features.map((feature, index) =>
    
        <FeatureCard key = {index} {...feature}></FeatureCard>
      
      )}
    </div>
  )
}




