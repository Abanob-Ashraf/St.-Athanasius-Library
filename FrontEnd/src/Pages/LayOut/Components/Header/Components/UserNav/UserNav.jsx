import React from 'react';
import "./UserNav.scss";
import { Link } from 'react-router-dom';

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
            <li><Link to="/">الصفحه الرئيسيه</Link></li>
            <li><Link to="Profile">الصفحه الشخصيه</Link></li>
            <li><Link to="CreateBooks">تسجيل الكتب</Link></li>
            <li><Link to="BrowseBooks">تصفح الكتب</Link></li>
            <hr/>
            <li><a className="logout" onClick={hangleLogout}>تسجيل الخروج</a></li>
        </ul>
    </div>
  )
}

export default UserNav;
