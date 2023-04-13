import React from "react";

let Adminstrator = ({ role , name , img , phone }) => {
    return (
        <div className="adminstrator">
            <div className="the-role">{role}</div>
            <div className="name">أ/ {name}</div>
            <img src={`./images/adminstrators/${img}`} alt={name}/>
            <a  className="tele" href={`tele:${phone}`}>للتواصل</a>
        </div>
    )
}

export default Adminstrator;