import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/LOGO.png';

export default function Header() {

return(
<div className="header">
    <div className="logo">
        <img className="logoImg" src={Logo} />
    </div>
    <div>
    <ul className="headerList">
        <li>COMPANY</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>

    </ul>
    </div>
</div>
);
}