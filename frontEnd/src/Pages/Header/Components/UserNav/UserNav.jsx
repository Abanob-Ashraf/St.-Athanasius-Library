import React from 'react';
import "./UserNav.scss";

let UserNav = ({ onClick , toggle }) => {
  const firs_name = JSON.parse(sessionStorage.getItem("user")).first_name || null
  const last_name = JSON.parse(sessionStorage.getItem("user")).last_name || null
  const imgSrc = `https://api.dicebear.com/5.x/initials/svg?seed=${firs_name} ${last_name}&scale=90`;
  let hangleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div className="user-nav">
        <div className="avatar" onClick={onClick}>
            <img src={imgSrc} className="user-avatar"/>
        </div>
        <ul className={`menu ${toggle ? "clicked" : ""}`}>
            <li><a href="./profile.html">الصفحه الشخصيه</a></li>
            <li><a href="./index.html">الصفحه الرئيسيه</a></li>
            <li><a href="./createBooks.html">تسجيل الكتب</a></li>
            <li><a href="./browseBooks.html">تصفح الكتب</a></li>
            <hr/>
            <li><a className="logout" onClick={hangleLogout}>تسجيل الخروج</a></li>
        </ul>
    </div>
  )
}

export default UserNav;
