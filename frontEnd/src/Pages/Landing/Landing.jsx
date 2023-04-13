import React from "react";
import "./Landing.scss";
import Home from "./Sections/Home/Home";
import Adminstrators from "./Sections/Adminstrators/Adminstrators";
import ContactUs from "./Sections/ContactUs/ContactUs";
import BrowseBooks from "./Sections/BrowseBooks/BrowseBooks";

let Landing = () => {
    return (
        <div className="landing">
            <Home/>
            <Adminstrators/>
            <ContactUs/>
            <BrowseBooks/>
        </div>
    )
}

export default Landing;