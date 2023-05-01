import React from "react";
import { FaFacebookF , FaTelegram  , } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import FooterLogo from "./Components/FooterLogo/FooterLogo";
import "./Footer.scss";

let Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="box"><FooterLogo/></div>
                <div className="box">
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
            </div>
            <p className="copy-right">{`جميع الحقوق محفوظه - مكتبه القديس اثناسيوس الرسولي ${new Date().getFullYear()}©`}</p>
        </div>
    )
}

export default Footer;