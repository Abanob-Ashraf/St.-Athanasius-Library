import React from 'react';
import "./Change-password.scss";

let ChangePassword = () => {
  return (
    <div className="change-password the-service">
        <div className="flex-collection">
            <div className="service-name">تغيير كلمه المرور</div>
            <div className="x">X</div>
        </div>
        <form action="" className="Change-password-form">
            <div className="collection">
                <input type="password" placeholder='إدخل كلمه المرور القديمه' className="old-password" />
                <input type="password" placeholder='إدخل كلمه المرور الجديده' className="new-password" />
            </div>
            <input type="submit" className="submit" value="تأكيد"/>
        </form>
        <p className="note"></p>
    </div>
  )
}

export default ChangePassword;
