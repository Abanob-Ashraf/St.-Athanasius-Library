import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Form , Link } from 'react-router-dom';
import {login} from '../../APIs';
import './Login.scss';

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const user = await login({email , password});
        sessionStorage.setItem("user",JSON.stringify({...user}));
        return document.location.reload();
    }catch(err){
        return err;
    }
}

let Login = ({ onClickForLogin , onClickForGetMail }) => {
  return (
    <div className="overlay">
        <div className="login the-service">
            <div className="flex-collection">
                <div className="service-name">تسجيل الدخول</div>
                <Link onClick={onClickForLogin}><FontAwesomeIcon icon={faClose} size="2xl" className="close-icon"/></Link>
            </div>
            <Form method='POST' replace className="login-form">
                <div className="collection">
                    <input type="email" name='email' placeholder='البريد الألكتروني' className="email"/>
                    <input type="password" name='password' placeholder='كلمه المرور' className="password"/>
                </div>
                <input type="submit" className="submit" value="تسجيل الدخول"/>
                <Link onClick={onClickForGetMail}><p className='forget'> نسيت كلمه المرور؟</p></Link>
            </Form>
        </div>
    </div>
  )
}

export default Login;