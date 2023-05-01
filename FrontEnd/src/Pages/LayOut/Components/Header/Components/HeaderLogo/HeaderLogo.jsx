import React from "react";
import logo from "/images/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./HeaderLogo.scss";

let HeaderLogo = ({onClick}) => {
    const location = useLocation().pathname;
    return (
        <div className="logo-collection">
            {location == "/" ? <FontAwesomeIcon icon={faBars} size="2xl" className="bar-icon" onClick={onClick}/> : null}
            <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
                <p>مكتبه القديس<br/>أثناسيوس الرسولي</p>
            </Link>
        </div>
    )
}

export default HeaderLogo;