import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./EditUser.scss";

let EditUser = () => {
  return (
    <div className="overlay">
        <div className="edit-user the-service">
            <div className="header-collection">
                <div className="service-name">تعديل البيانات</div>
                <Link><FontAwesomeIcon icon={faClose} size="2xl" className="close-icon"/></Link>
            </div>
            <div class="flag">
                <input type="checkbox" name="admin-flag" id="the-flag-admin"/>
                <label for="the-flag-admin"></label>
            </div>
            <form action="" className="edit-user-form">
                <div className="collection">
                    <div className="first-name">
                        <p className="detail-data">الإسم الأول</p>
                        <input type="text" name='first-name' />
                    </div>
                    <div className="last-name">
                        <p className="detail-data">الإسم الأخير</p>
                        <input type="text" name='last-name' />
                    </div>
                    <div className="email">
                        <p className="detail-data">البريد الألكتروني</p>
                        <input type="email" name='email' />
                    </div>
                    <div className="phone-number">
                        <p className="detail-data">رقم الهاتف</p>
                        <input type="text" name='phone-number' />
                    </div>
                    <div className="the-role">
                        <p className="detail-data">دور الخادم</p>
                        <select name="the-role">
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
                    </div>
                </div>
                <input type="submit" className="submit" value="حفظ"/>
            </form>
        </div>
    </div>
  )
}

export default EditUser;
