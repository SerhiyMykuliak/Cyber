import "./FeaturesSection.scss"
import {features} from './FeatureData'
import FeaturesCardList from "./FeaturesCardList"



export default function FeaturesSection(){

  return(
    <div className="features-section">
      <div className="content">
        <h2 className="features-section__header">Неймовірні супер функції та дивовижні пропозиції</h2>
        
        <FeaturesCardList features = {features}/>

      </div>
    </div>
  )
}