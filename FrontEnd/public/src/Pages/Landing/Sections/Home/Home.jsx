import React from "react";
import { FaFacebookF , FaTelegram  , } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
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
                                <a href="https://www.facebook.com/subdeaconwael?mibextid=ZbWKwL" className="facebook">
                                    <FaFacebookF size="30px"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/StAthansiousbot" className="telegram">
                                    <FaTelegram size="30px"/>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+201211763098" className="phone">
                                    <BsFillTelephoneFill size="25px"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:st.athanasius998@gmail.com" className="email">
                                    <SiGmail size="25px"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="content-side">
                        <h1>مكتبه القديس أثناسيوس الرسولي ترحب بكم.</h1>
                        <div className="scroll">
                            <p>"فَتِّشُوا الْكُتُبَ لأَنَّكُمْ تَظُنُّونَ أَنَّ لَكُمْ فِيهَا حَيَاةً أَبَدِيَّةً. وَهِيَ الَّتِي تَشْهَدُ لِي." (يو 5: 39).</p>
                            <p>هذا الموقع يساعد علي معرفه الكتب و أماكن الكتب في مكتبه القديس أثناسيوس الرسولي لكن لقرأتها نرحب بكم في المكتبه.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;