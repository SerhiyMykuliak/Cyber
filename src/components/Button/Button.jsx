import './Button.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Button({children, className, linkTo}){

    return(

        <Link to = {linkTo}> <button className={`${className} button `} type="button">{children}</button></Link>

    )   

}