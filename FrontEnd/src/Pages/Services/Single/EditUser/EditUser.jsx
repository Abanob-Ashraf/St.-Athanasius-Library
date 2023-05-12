import React , { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { editUser } from '../../../../APIs';
import "./EditUser.scss";

let EditUser = ({ onClickForEditUser }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [editUserFetch , setEditUserFetch] = useState({
        admin_flag: user.admin_flag,
        job: user.job,
        first_name:"" || user.first_name, 
        last_name:"" || user.last_name, 
        email:"" || user.email, 
        phone_number:"" || user.phone_number,
    });
    const [editUserFetchError , setEditUserFetchError] = useState()
    let handleChange = (e) => {
        const { name, value } = e.target
        setEditUserFetch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const edit = await editUser(user.id , editUserFetch ,user.token);
            sessionStorage.setItem("user",JSON.stringify({...user, ...editUserFetch}));
            return onClickForEditUser()
        }catch(err){
            setEditUserFetchError(err);
            return setTimeout(() => setEditUserFetchError(null), 5000);
        }
    }
  return (
    <div className="overlay">
        <div className="edit-user the-service">
            <div className="header-collection">
                <div className="service-name">تعديل البيانات</div>
                <Link>
                    <FontAwesomeIcon 
                    onClick={onClickForEditUser} 
                    icon={faClose} size="2xl" 
                    className="close-icon"/>
                </Link>
            </div>
            <form action="" method='POST' onSubmit={handleSubmit} className="edit-user-form">
                <div className="collection">
                    <div className="first-name">
                        <p className="detail-data">الإسم الأول</p>
                        <input 
                        type="text" 
                        placeholder={user.first_name} 
                        onChange={handleChange} 
                        value={editUserFetch.first_name} 
                        name='first_name' />
                    </div>
                    <div className="last-name">
                        <p className="detail-data">الإسم الأخير</p>
                        <input 
                        type="text" 
                        placeholder={user.last_name} 
                        onChange={handleChange} 
                        value={editUserFetch.last_name} 
                        name='last_name'/>
                    </div>
                    <div className="email">
                        <p className="detail-data">البريد الألكتروني</p>
                        <input 
                        type="email" 
                        placeholder={user.email} 
                        onChange={handleChange} 
                        value={editUserFetch.email} 
                        name='email'/>
                    </div>
                    <div className="phone-number">
                        <p className="detail-data">رقم الهاتف</p>
                        <input 
                        type="text" 
                        placeholder={user.phone_number} 
                        onChange={handleChange} 
                        value={editUserFetch.phone_number} 
                        name='phone_number'/>
                    </div>
                </div>
                {editUserFetchError && <small className='note'>{editUserFetchError.statusText == "this email already existe" ?
                 "البريد الألكتروني يوجد بالفعل أو رقم الهاتف" :
                 editUserFetchError.statusText["errors"][0].param == "email" ?
                  "يرجي كتابه البريد الالكتروني" :
                  editUserFetchError.statusText["errors"][0].param == "phone_number" ? 
                  "يرجي كتابه رقم الهاتف" : 
                  null}</small>}
                <input type="submit" className="submit" value="حفظ"/>
            </form>
        </div>
    </div>
  )
}

export default EditUser;
