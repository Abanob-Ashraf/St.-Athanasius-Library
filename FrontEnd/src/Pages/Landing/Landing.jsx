import React from "react";
import "./Landing.scss";
import Home from "./Sections/Home/Home";
import Adminstrators from "./Sections/Adminstrators/Adminstrators";
import ContactUs from "./Sections/ContactUs/ContactUs";
import FIndBooks from "./Sections/FIndBooks/FIndBooks";

let Landing = () => {
    return (
        <div className="landing">
            <Home/>
            <Adminstrators/>
            <ContactUs/>
            <FIndBooks/>
        </div>
    )
}

export default Landing;