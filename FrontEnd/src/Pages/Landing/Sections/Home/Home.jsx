import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "/images/logo/logo.png";
import "./Home.scss";

let Home = () => {
    return (
        <div className="home" id="home">
            <div className="container">
                <div className="slide-container">
                    <div className="logo-side">
                        <img src={logo} alt="logo" />
                        <ul className="socials">
                            <li>
                                <a href="https://www.facebook.com/subdeaconwael?mibextid=ZbWKwL" className="facebook"></a>
                            </li>
                            <li>
                                <a href="https://t.me/StAthansiousbot" className="telegram"></a>
                            </li>
                            <li>
                                <a href="tel:+201211763098" className="phone"></a>
                            </li>
                            <li>
                                <a href="mailto:st.athanasius998@gmail.com" className="email"></a>
                            </li>
                        </ul>
                    </div>
                    <div className="content-side">
                        <h1>مكتبه القديس أثناسيوس الرسولي ترحب بكم.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;