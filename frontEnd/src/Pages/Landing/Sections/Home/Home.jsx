import React from "react";
import logo from "/images/logo/logo.png";
import "./Home.scss";

let Home = () => {
    return (
        <div className="home" id="home">
            <div className="container">
                <div className="wrapper">
                    <div className="logo-section">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="scroll"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;