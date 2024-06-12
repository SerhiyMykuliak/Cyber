import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from "../../assets/images/logo.png"
import "./Logo.scss"



export default function Logo() {
    return(
        <div className="logo">
            
            <Link to="/"><img className="logo__image" src={logo} alt="Logo"/></Link>
            
        </div>
    )
}




