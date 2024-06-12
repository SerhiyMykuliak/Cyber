import "./Question.scss"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";


export default function Question({header, children}) {
    
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup =() => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="question">
            <div onClick={togglePopup} className="question__header">{header} 
                <IoIosArrowDown className="down-arrow" />    
            </div>    
            
            {isOpen && (
                <div className="question__body">{children}</div>
            )}

        </div>
    )

}

