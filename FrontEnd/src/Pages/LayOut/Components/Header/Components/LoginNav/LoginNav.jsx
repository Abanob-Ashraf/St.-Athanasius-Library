import React from 'react';
import './LoginNav.scss'
import { Link } from 'react-router-dom';

let LoginNav = ({onClick}) => {
  return (
    <div className="login-nav">
        <Link onClick={onClick} className="login" >تسجيل الدخول</Link>
    </div>
  )
}

export default LoginNav;
