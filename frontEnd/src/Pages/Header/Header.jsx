import React from "react";
import Logo from "./Components/Logo/Logo";
import VisitorNav from "./Components/VisitorNav/VisitorNav";
import UserNav from "./Components/UserNav/UserNav";
import LoginNav from "./Components/LoginNav/LoginNav";
import "./Header.scss";

let Header = ({ onClickForLogin }) => {
    const [VMenuCLicked , setVMenuClicked] = React.useState(false);
    const [UMenuCLicked , setUMenuClicked] = React.useState(false);
    let handleVMenuCLicked = () => {
        setVMenuClicked(!VMenuCLicked)
    }
    let handleUMenuCLicked = () => {
        setUMenuClicked(!UMenuCLicked)
    }
    return (
        <div className="header">
            <div className="container">
                <Logo onClick={handleVMenuCLicked} />
                <VisitorNav toggle={VMenuCLicked}/>
                {
                    sessionStorage.getItem("user") ?
                    <UserNav onClick={handleUMenuCLicked} toggle={UMenuCLicked}/> :
                    <LoginNav onClick={onClickForLogin}/>
                }
            </div>
        </div>
    )
}

export default Header