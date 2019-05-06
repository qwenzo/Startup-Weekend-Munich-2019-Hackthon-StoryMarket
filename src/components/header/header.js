import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        // <header className="header-long">

        // </header>
        <header className="header">
         <Link to="/"> <div className="header__logo-container"></div></Link>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#" className="btn btn-wrapped">for freelancers</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="btn">About us</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="btn">Career</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;