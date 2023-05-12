import React from "react";
import logo from "/images/logo/logo.png";
import { Link } from "react-router-dom";
import "./FooterLogo.scss";

let FooterLogo = () => {
    return (
        <div className="logo">
            <Link to='/' className="logo">
                <img src={logo} alt="logo"/>
                <p>مكتبه القديس<br/>أثناسيوس الرسولي</p>
            </Link>
        </div>
    )
}

export default FooterLogo;