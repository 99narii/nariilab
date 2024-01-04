import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/LOGO_white.png';

export default function Header() {

return(
<div className="header">
    <div className="headerList">
    <div className="logo">
        <Link to="/">
            <img className="logoImg" src={Logo} />
        </Link>
    </div>
    <div>
    <ul className="headerMenu">
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
    </ul>
    </div>
    </div>
</div>
);
}