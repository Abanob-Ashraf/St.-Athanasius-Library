import React from 'react';
import './VisitorNav.scss';
import UserNav from '../UserNav/UserNav';

let VisitorNav = ({toggle}) => {
  return (
    <div className="visitor-nav">
        <ul className={`menu ${toggle ? "clicked" : ""}`}>
            <li><a href="#home">الرئيسيه</a></li>
            <li><a href="#adminstrators">المسئولين</a></li>
            <li><a href="#contact-us">تواصل معنا</a></li>
            <li><a href="#browse-books">تصفح الكتب</a></li>
        </ul>
    </div>
  )
}

export default VisitorNav;
