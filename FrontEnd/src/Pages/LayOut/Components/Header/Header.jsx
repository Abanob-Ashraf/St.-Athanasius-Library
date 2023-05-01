import React from "react";
import HeaderLogo from "./Components/HeaderLogo/HeaderLogo";
import VisitorNav from "./Components/VisitorNav/VisitorNav";
import UserNav from "./Components/UserNav/UserNav";
import LoginNav from "./Components/LoginNav/LoginNav";
import "./Header.scss";
import { useLocation } from "react-router-dom";

let Header = ({ onClickForLogin }) => {
    const [VMenuCLicked , setVMenuClicked] = React.useState(false);
    const [UMenuCLicked , setUMenuClicked] = React.useState(false);
    let handleVMenuCLicked = () => {
        setVMenuClicked(!VMenuCLicked)
    }
    let handleUMenuCLicked = () => {
        setUMenuClicked(!UMenuCLicked)
    }
    const location = useLocation().pathname;
    if (location == "/"){
        document.title = "مكتبه القديس أثناسيوس الرسولي | الصفحه الرئسيه"
    }
    if (location == "/Profile"){
        document.title = "مكتبه القديس أثناسيوس الرسولي | الصفحه الشخصيه"
    }
    if (location == "/CreateBooks"){
        document.title = "مكتبه القديس أثناسيوس الرسولي | إنشاء كتاب"
    }
    if (location == "/BrowseBooks"){
        document.title = "مكتبه القديس أثناسيوس الرسولي | تصفح الكتب"
    }
    return (
        <div className="header">
            <div className="container">
                <HeaderLogo onClick={handleVMenuCLicked} />
                {location == "/" ? <VisitorNav toggle={VMenuCLicked}/> : null}
                {
                    sessionStorage.getItem("user") ?
                    <UserNav onClick={handleUMenuCLicked} toggle={UMenuCLicked}/>:
                    <LoginNav onClick={onClickForLogin}/>
                }
            </div>
        </div>
    )
}

export default Header