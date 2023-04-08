import React from "react";
import Logo from "../Constants/Logo";
import SocialsBox from "./components/socials-box";
import CopyRight from "./components/copy-right";
import "./Footer.scss"

let Footer = () => {
    return (
        <div className="footer">
        <div className="container">
            <div className="box"><Logo/></div>
            <div className="box"><SocialsBox/></div>
        </div>
        <CopyRight/>
    </div>
    )
}

export default Footer