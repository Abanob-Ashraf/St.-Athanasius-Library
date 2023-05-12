import React from "react";
import { FaFacebookF , FaTelegram  , } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import "./ContactUs.scss";

let ContactUs = () => {
    return (
        <div className="contact-us" id="contact-us">
            <h3 className="title">تواصل معنا</h3>
            <div className="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.9371982490065!2d31.31164938482011!3d30.153211481842973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581501d9537b39%3A0x2d559bca8950eeab!2z2YPZhtmK2LPYqSDYp9mE2LTZh9mK2K8g2KfZhNi52LjZitmFINmF2KfYsdmF2YrZhtinINmI2KfZhNio2KfYqNinINmD2YrYsdmE2LMg2KfZhNiz2KfYr9izINio2KfZhNiu2LXZiNi1INil2YrYqNin2LHYtNmK2Kkg2LTYqNmK2YYg2KfZhNmC2YbYp9i32LEg2YjYqtmI2KfYqNi52YfYpw!5e0!3m2!1sar!2seg!4v1679662532095!5m2!1sar!2seg" width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="social-media">
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
    )
}

export default ContactUs;