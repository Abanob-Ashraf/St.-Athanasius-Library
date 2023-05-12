import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { login } from '../../../../APIs';
import './Login.scss';

let Login = ({ onClickForLogin , onClickForGetMail }) => {
    const [loginFeatch , setLoginFeatch] = useState({ email: "", password:"" })
    const [loginErrors , setLoginErrors] = useState()
    let handleChange = (e) => {
        const { name, value } = e.target
        setLoginFeatch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const user = await login(loginFeatch);
            sessionStorage.setItem("user",JSON.stringify({...user}));
            return onClickForLogin();
        }catch(err){
            setLoginErrors(err);
            return setTimeout(() => setLoginErrors(null), 5000);
        }
    }

  return (
    <div className="overlay">
        <div className="login the-service">
            <div className="flex-collection">
                <div className="service-name">تسجيل الدخول</div>
                <Link onClick={onClickForLogin}>
                    <FontAwesomeIcon icon={faClose} size="2xl" className="close-icon"/>
                </Link>
            </div>
            <form action='' method='POST' onSubmit={handleSubmit} className="login-form">
                <div className="collection">
                    <input 
                    type="email" 
                    name='email'
                    onChange={handleChange} 
                    value={loginFeatch.email} 
                    placeholder='البريد الألكتروني' 
                    className="email"/>

                    <input 
                    type="password" 
                    name='password' 
                    onChange={handleChange} 
                    value={loginFeatch.password} 
                    placeholder='كلمه المرور' 
                    className="password"/>
                </div>
                {loginErrors && <small className='note'>
                    {loginErrors.statusText == "the username and password do not match please try again" ?
                    "البريد الألكتروني أو كلمه المرور غير صحيحه" :
                    loginErrors.statusText == "you can not login contact with admin" ?
                    "أنت مستخدم محذوف تواصل المدير" :
                    loginErrors.statusText.errors[0].msg ? 
                    "البريد الألكتروني أو كلمه المرور غير صحيحه" :
                     null}
                </small>}
                <input type="submit" className="submit" value="تسجيل الدخول"/>
                <Link onClick={onClickForGetMail}><p className='forget'> نسيت كلمه المرور؟</p></Link>
            </form>
        </div>
    </div>
  )
}

export default Login;