import React from 'react'

let MemberNav = () => {
  return (
    <div className="member-nav">
        <div className="avatar">
            <img className="member-avatar"/>
            <i className="fa-solid fa-caret-down fa-1x"></i>
        </div>
        <ul className="menu">
            <li><a>مرحباً !<span className="welcome"></span></a></li>
            <hr/>
            <li><a href="./profile.html">الصفحه الشخصيه</a></li>
            <li><a href="./index.html">الصفحه الرئيسيه</a></li>
            <li><a href="./createBooks.html">تسجيل الكتب</a></li>
            <li><a href="./browseBooks.html">تصفح الكتب</a></li>
            <hr/>
            <li><a className="logout">تسجيل الخروج</a></li>
        </ul>
    </div>
  )
}

export default MemberNav
