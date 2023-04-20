import React from "react";
import "./UserInfo.scss";

let UserInfo = () => {
    const firs_name = JSON.parse(sessionStorage.getItem("user")).first_name || null
    const last_name = JSON.parse(sessionStorage.getItem("user")).last_name || null
    const imgSrc = `https://api.dicebear.com/5.x/initials/svg?seed=${firs_name} ${last_name}&scale=90`;
    return (
        <div className="user-info the-service">
            <div className="service-name">البيانات</div>
            <div className="flex-collection">
                <div className="right-side">
                    <img src={imgSrc} alt="avatar" className="avatar" />
                </div>
                <div className="left-side">
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
                    </div>
                    <div className="collection">
                        <div className="flex-collection">
                            <button className="edit-my-info">تعديل البيانات</button>
                            <button className="change-password">تغيير كلمه المرور</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;