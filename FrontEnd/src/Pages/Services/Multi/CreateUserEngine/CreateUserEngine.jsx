import React , {useState} from "react";
import { createUser } from "../../../../APIs";
import "./CreateUserEngine.scss";

let CreateUserEngine = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [createUserFetch , setCreateUserFetch] = useState({
        admin_flag:"", 
        first_name:"", 
        last_name:"", 
        email:"", 
        password:"", 
        job:""
    });
    const [createUserFetchSuccess, setCreateUserFetchSuccess] = useState()
    const [createUserFetchErrors , setCreateUserFetchErrors] = useState()

    let handleChange = (e) => {
        const { name, value , checked , type} = e.target
        setCreateUserFetch(obj => ({
            ...obj,
            [name]: type == "checkbox" ?  checked : value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const create = await createUser(createUserFetch ,user.token);
            setCreateUserFetchSuccess(create)
            return setTimeout(() => setCreateUserFetchSuccess(null), 5000);
        }catch(err){
            console.log(err)
            setCreateUserFetchErrors(err);
            return setTimeout(() => setCreateUserFetchErrors(null), 5000);
        }
    }
    return (
        <div className="create-user-engine the-service">
            <div className="service-name">إنشاء مستخدم</div>
            <form action=""  method='POST' onSubmit={handleSubmit} className="create-user-form">
                <div className="flag">
                    <input type="checkbox" name="admin_flag" onChange={handleChange} value={createUserFetch.admin_flag} id="flag-admin"/>
                    <label for="flag-admin"></label>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <input 
                        type="text" 
                        placeholder="الأسم الأول" 
                        required 
                        name="first_name" 
                        onChange={handleChange} 
                        value={createUserFetch.first_name} 
                        className="first-name"/>

                        <input 
                        type="text" 
                        placeholder="الأسم الأخير" 
                        required 
                        name="last_name" 
                        onChange={handleChange} 
                        value={createUserFetch.last_name} 
                        className="last-name"/>

                        <select 
                        name="job" 
                        onChange={handleChange} 
                        required 
                        value={createUserFetch.job} 
                        className="select-role">
                            <option>إختر دور الخادم</option>
                            <option value="أمين المكتبه">أمين المكتبه</option>
                            <option value="نائب أمين المكتبه">نائب أمين المكتبه</option>
                            <option value="أمين الميديا">أمين الميديا</option>
                            <option value="أمين مكتبه البراعم">أمين مكتبه البراعم</option>
                            <option value="أمين السكرتاريه">أمين السكرتاريه</option>
                            <option value="أمين مساعدين الخدام">أمين مساعدين الخدام</option>
                            <option value="خدمه بمكتبه البراعم">خادم بمكتبه البراعم</option>
                            <option value="خدمه السكرتاريه">خادم بالسكرتاريه</option>
                            <option value="خدمه الميديا">خادم بالميديا</option>
                            <option value="مساعد خادم">مساعد خادم</option>
                        </select>

                        <input 
                        type="email" 
                        placeholder="البريد الألكتروني" 
                        required 
                        name="email" 
                        onChange={handleChange} 
                        value={createUserFetch.email} 
                        className="email"/>

                        <input 
                        type="password" 
                        placeholder="كلمه المرور" 
                        required 
                        name="password" 
                        onChange={handleChange} 
                        value={createUserFetch.password} 
                        className="password"/>
                    </div>
                </div>

                {createUserFetchSuccess &&
                 <small className='note'>
                    {createUserFetchSuccess == "user created correctly" ? "تم إنشاء المستخدم تفقد بريدك الألكتروني" : null}
                </small>}

                {createUserFetchErrors &&
                 <small className='note'>
                    {createUserFetchErrors.statusText == "this email already existe" ?
                    "هذا البريد الألكتروني مُسجل من قبل" :
                    createUserFetchErrors.statusText.errors[0].param == "password" ?
                    "يرجي أن تزيد كلمه المرور عن 8 حروف و اقل من 16" :
                     null}
                 </small>}
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
        </div>
    )
}

export default CreateUserEngine;