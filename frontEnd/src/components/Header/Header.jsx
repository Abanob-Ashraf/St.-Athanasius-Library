import React from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

let Header = ({nav}) => {
    return (
        <div className="header">
            <div className="container">
                <Logo/>
                {nav}
            </div>
        </div>
    )
}

export default Header