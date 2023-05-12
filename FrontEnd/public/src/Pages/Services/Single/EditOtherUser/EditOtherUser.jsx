import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { editUser } from '../../../../APIs';
import "./EditOtherUser.scss";

let EditOtherUser = ({ ocClickForEditOtherUser }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const the_other_user = JSON.parse(sessionStorage.getItem("the-other-user"));
    const [editOtherUserFeatch , setEditOtherUserFeatch] = useState({
        admin_flag:"" || the_other_user.admin_flag, 
        first_name:"" || the_other_user.first_name, 
        last_name:"" || the_other_user.last_name, 
        email:"" || the_other_user.email, 
        phone_number:"" || the_other_user.phone_number,
        job:"" || the_other_user.job
    });
    const [editOtherUserFetchError , setEditOtherUserFetchError] = useState()
    let handleChange = (e) => {
        const { name, value , checked , type} = e.target
        setEditOtherUserFeatch(obj => ({
            ...obj,
            [name]: type == "checkbox" ?  checked : value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const edit = await editUser(the_other_user.id , editOtherUserFeatch ,user.token);
            sessionStorage.setItem("the_other_user",JSON.stringify({...the_other_user, ...editOtherUserFeatch}));
            document.body.classList.toggle("hidden");
            return ocClickForEditOtherUser()
        }catch(err){
            setEditOtherUserFetchError(err);
            return setTimeout(() => setEditOtherUserFetchError(null), 5000);
        }
    }

  return (
    <div className="overlay">
        <div className="edit-other-user the-service">
            <div className="header-collection">
                <div className="service-name">تعديل البيانات</div>
                <Link>
                    <FontAwesomeIcon onClick={() => {
                        ocClickForEditOtherUser();
                        document.body.classList.toggle("hidden");
                        }} icon={faClose} size="2xl" className="close-icon"/>
                </Link>
            </div>
            <form action="" method='POST' onSubmit={handleSubmit} className="edit-user-form">
                <div className="flag">
                    <input type="checkbox" onChange={handleChange} checked={editOtherUserFeatch.admin_flag} name="admin_flag" id="the-flag-admin"/>
                    <label for="the-flag-admin"></label>
                </div>
                <div className="collection">
                    <div className="first-name">
                        <p className="detail-data">الإسم الأول</p>
                        <input type="text" placeholder={the_other_user.first_name} onChange={handleChange} value={editOtherUserFeatch.first_name} name='first_name' />
                    </div>
                    <div className="last-name">
                        <p className="detail-data">الإسم الأخير</p>
                        <input type="text" placeholder={the_other_user.last_name} onChange={handleChange} value={editOtherUserFeatch.last_name} name='last_name' />
                    </div>
                    <div className="email">
                        <p className="detail-data">البريد الألكتروني</p>
                        <input type="email" placeholder={the_other_user.email} onChange={handleChange} value={editOtherUserFeatch.email} name='email' />
                    </div>
                    <div className="phone-number">
                        <p className="detail-data">رقم الهاتف</p>
                        <input type="text" placeholder={the_other_user.phone_number} onChange={handleChange} value={editOtherUserFeatch.phone_number} name='phone_number' />
                    </div>
                    <div className="the-role">
                        <p className="detail-data">دور الخادم</p>
                        <select onChange={handleChange} value={editOtherUserFeatch.job} name="job">
                            <option>--إختر دور الخادم--</option>
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
                    </div>
                </div>
                {editOtherUserFetchError && <small className='note'>{editOtherUserFetchError.statusText == "this email already existe" ?
                 "البريد الألكتروني يوجد بالفعل أو رقم الهاتف" :
                 editOtherUserFetchError.statusText["errors"][0].param == "email" ?
                  "يرجي كتابه البريد الالكتروني" :
                  editOtherUserFetchError.statusText["errors"][0].param == "phone_number" ? 
                  "يرجي كتابه رقم الهاتف" : 
                  null}</small>}
                <input type="submit" className="submit" value="حفظ"/>
            </form>
        </div>
    </div>
  )
}

export default EditOtherUser;
