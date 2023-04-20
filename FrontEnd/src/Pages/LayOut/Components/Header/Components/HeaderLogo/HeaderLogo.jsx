import React from "react";
import logo from "/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./HeaderLogo.scss";

let HeaderLogo = ({onClick}) => {
    return (
        <div className="logo-collection">
            <FontAwesomeIcon icon={faBars} size="2xl" className="bar-icon" onClick={onClick}/>
            <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
                <p>مكتبه القديس<br/>أثناسيوس الرسولي</p>
            </Link>
        </div>
    )
}

export default HeaderLogo;