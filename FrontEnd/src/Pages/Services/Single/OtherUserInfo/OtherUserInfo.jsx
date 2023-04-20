import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./OtherUserInfo.scss";

let OtherUserInfo = () => {
    return (
        <div className="overlay">
            <div className="other-user-info the-service">
                <div className="header-collection">
                    <div className="service-name">البيانات</div>
                    <Link><FontAwesomeIcon icon={faClose} size="2xl" className="close-icon"/></Link>
                </div>
                <div className="scroll">
                    <div className="collection">
                        <div className="flex-collection">
                            <p className="first-name">
                                <p className="detail-data">الإسم الأول</p>
                                kerolos
                            </p>
                            <p className="last-name">
                                <p className="detail-data">الإسم الأخير</p>
                                reda
                            </p>
                        </div>
                        <p className="email">
                            <p className="detail-data">البريد الألكتروني</p>
                            elfanan@gmail.com
                        </p>
                        <p className="phone-number">
                            <p className="detail-data">رقم الهاتف</p>
                            01282332039
                        </p>
                        <p className="the-role">
                            <p className="detail-data">دور الخادم</p>
                            owner
                        </p>
                        <p className="admin">
                            <p className="detail-data">هل هو مدير</p>
                            yes
                        </p>
                        <p className="status">
                            <p className="detail-data">حاله المستخدم</p>
                            online
                        </p>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <button className="edit-user-info">تعديل البيانات</button>
                        <button className="delete">حذف المستخدم</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherUserInfo;