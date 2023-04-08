import React from "react";

let SocialsBox = () => {
    return (
        <ul className="socials">
            <li>
                <a href="https://www.facebook.com/subdeaconwael?mibextid=ZbWKwL" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a href="https://t.me/StAthansiousbot" className="telegram">
                    <i className="fab fa-telegram"></i>
                </a>
            </li>
            <li>
                <a href="tel:+201211763098" className="phone">
                    <i className="fa-solid fa-phone"></i>                            
                </a>
            </li>
            <li>
                <a href="mailto:st.athanasius998@gmail.com" className="email">
                    <i className="fa-solid fa-envelope"></i>                        
                </a>
            </li>
        </ul>
    )
}

export default SocialsBox