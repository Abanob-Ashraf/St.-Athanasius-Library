import React from 'react'

let VisitorNav = () => {
  return (
    <div className="visitor-nav">
        <i className="fa-solid fa-bars fa-2x"></i>
        <ul className="menu">
            <li><a href="#intro">الرئيسيه</a></li>
            <li><a href="#adminstrators">المسئولين</a></li>
            {/* <li><a href="#activites">أنشطه المكتبه</a></li> */}
            <li><a href="#contact-us">تواصل معنا</a></li>
            <li><a href="#browse-books">تصفح الكتب</a></li>
            <li><a href="./login.html" className="login">تسجيل الدخول</a></li>
        </ul>
    </div>
  )
}

export default VisitorNav;
