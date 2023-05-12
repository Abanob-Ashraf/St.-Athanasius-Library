import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { changePassword } from '../../../../APIs';
import "./ChangePassword.scss";

let ChangePassword = ({ onClickForChangePassword }) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [changePasswordFetch , setChangePasswordFetch] = useState({ old_password:"", new_password:""});
  const [changePasswordFetchError , setChangePasswordFetchError] = useState()
  let handleChange = (e) => {
      const { name, value } = e.target
      setChangePasswordFetch(obj => ({
          ...obj,
          [name]: value
      }))
  }

  let handleSubmit = async(e) => {
      e.preventDefault()
      try {
          const change = await changePassword(changePasswordFetch ,user.token);
          sessionStorage.removeItem("user");
          return document.location.reload();
      }catch(err){
          setChangePasswordFetchError(err);
          return setTimeout(() => setChangePasswordFetchError(null), 5000);
      }
  }

  return (
    <div className="overlay">
      <div className="change-password the-service">
        <div className="header-collection">
            <div className="service-name">تعديل البيانات</div>
            <Link>
              <FontAwesomeIcon 
              onClick={onClickForChangePassword} 
              icon={faClose} size="2xl" 
              className="close-icon"/>
            </Link>
        </div>
        <form action="" method='POST' onSubmit={handleSubmit} className="Change-password-form">
            <div className="collection">
                <input type="password" 
                name='old_password' 
                onChange={handleChange} 
                value={changePasswordFetch.old_password} 
                placeholder='إدخل كلمه المرور القديمه' 
                className="old-password" />
                
                <input type="password" 
                name='new_password' 
                onChange={handleChange} 
                value={changePasswordFetch.new_password} 
                placeholder='إدخل كلمه المرور الجديده' 
                className="new-password" />
            </div>
            {changePasswordFetchError && <small className='note'>
              {changePasswordFetchError.statusText == "you used this password before try another password" ?
              "أنت مستخدم كلمه المرور بالفعل" :
              changePasswordFetchError.statusText == "the password do not match please try again" ?
              "كلمه المرور القديمه خاطئه" :
                null}
              </small>}
            <input type="submit" className="submit" value="تأكيد"/>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword;
