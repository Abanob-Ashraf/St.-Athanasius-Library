import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./ChangePassword.scss";

let ChangePassword = () => {
  return (
    <div className="overlay">
      <div className="change-password the-service">
        <div className="header-collection">
            <div className="service-name">تعديل البيانات</div>
            <Link><FontAwesomeIcon icon={faClose} size="2xl" className="close-icon"/></Link>
        </div>
        <form action="" className="Change-password-form">
            <div className="collection">
                <input type="password" placeholder='إدخل كلمه المرور القديمه' className="old-password" />
                <input type="password" placeholder='إدخل كلمه المرور الجديده' className="new-password" />
            </div>
            <input type="submit" className="submit" value="تأكيد"/>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword;
