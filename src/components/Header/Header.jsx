import React, { useState } from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { TiThMenu } from "react-icons/ti";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="wrapper">
                <div className="menu-toggle" onClick={toggleMenu}>
                    <TiThMenu color='white' size={30}/>
                </div>
                <Logo />
                <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                <Button linkTo={"/connection"}>Приєднатися</Button>
            </div>
        </header>
    );
}

export default Header;
