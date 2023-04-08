import React from "react";
import logo from "/images/logo/logo.png";

let Logo = () => {
    return (
        <a href="./index.html" className="logo">
            <img src={logo} alt="logo"/>
            <h3>مكتبه القديس<br/>أثناسيوس الرسولي</h3>
        </a>
    )
}

export default Logo