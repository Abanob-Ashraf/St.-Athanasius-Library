import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Login from "../../Login/Login";
import GetMAil from "../../GetMail/GetMail";


let Layout = () => {
    const [login , setLogin] = useState(false);
    const [getMail , setGetMail] = useState(false);
    let handleLogin = () => {
        setLogin(!login)
        document.body.classList.toggle("hidden");
    }
    let handleGetMail = () => {
        setGetMail(!getMail)
        setLogin(!login)
    }
    return (
        <>
            <Header onClickForLogin={handleLogin}/>
            {login && <Login onClickForLogin={handleLogin} onClickForGetMail={handleGetMail}/>}
            {getMail && <GetMAil onClickForGetMail={handleGetMail}/>}
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;