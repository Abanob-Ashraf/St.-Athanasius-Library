import React , {useState} from "react";
import { resetPassword } from "../../APIs";
import { useLocation } from "react-router-dom";
import "./ResetPassword.scss";

let ResetPassword = () => {
    const token = useLocation().search.slice(1);
    const [resetPasswordFeatch , setResetPasswordFeatch] = useState({ new_password: "" });
    const [resetPasswordESuccess , setResetPasswordSuccess] = useState();
    const [resetPasswordErrors , setResetPasswordErrors] = useState();
    let handleChange = (e) => {
        const { name, value } = e.target
        setResetPasswordFeatch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const reset = await resetPassword(resetPasswordFeatch , token);
            setResetPasswordSuccess(err);
            return setTimeout(() => setResetPasswordSuccess(null), 5000);        
        }catch(err){
            setResetPasswordErrors(err);
            return setTimeout(() => setResetPasswordErrors(null), 5000);
        }
    }
    
    return (
    <div className="reset-password">
        <form method='POST' onSubmit={handleSubmit} className="reset-password-form">
            <div className="collection">
                <input 
                type="password" 
                name='new_password' 
                onChange={handleChange} 
                value={resetPasswordFeatch.new_password}
                placeholder='إدخل كلمه المرور الجديده' 
                className="new-password"/>
            </div>
            {resetPasswordESuccess && <small className='note'>تم تغيير كلمه المرور يرجي تسجيل الدخول مجددا</small>}
            {resetPasswordErrors && <small className='note'>يرجي أن تزيد كلمه المرور عن 8 حروف و اقل من 16</small>}
            <input type="submit" className="submit" value="إرسال"/>
        </form>
    </div>
    )
}

export default ResetPassword;