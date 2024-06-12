import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Menu.scss';
import Dropdown from '../Dropdown/Dropdown';

export default function Menu({ isMenuOpen, toggleMenu }) {

    
    return (
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
                <Dropdown header={"Інтернет"}>
                    <li><Link onClick={toggleMenu} to="/internet">Інтернет для дому</Link></li>
                    <li><Link onClick={toggleMenu} to="/internet-for-business">Інтернет для бізнесу</Link></li>
                </Dropdown>
                
                <Dropdown header={"Телебачення"}>
                    <li><Link onClick={toggleMenu} to="/television">Цифрове телебачення</Link></li>
                    <li><Link onClick={toggleMenu} to="/channels">Список каналів</Link></li>
                </Dropdown>

                <li className='link'><Link onClick={toggleMenu} to="/about" style={{ color: "white", fontWeight: "700" }}>Про нас</Link></li>
            
                <Dropdown header={"Підтримка"}>
                    <li><Link onClick={toggleMenu} to="/support">Центр підтримки</Link></li>
                    <li><Link onClick={toggleMenu} to="/questions">Часті запитання</Link></li>
                </Dropdown>
             </ul>
        </div>
    );
}
