import React from "react";
import "./User-general-info.scss";

let UserGeneralInfo = () => {
    return (
        <div className="user-general-info the-service">
            <p className="admin-flag">مستخدم</p>
            <div className="collection">
                <img src="/images/adminstrators/whael.jpg" className="avatar"/>
                <div className="group">
                    <p className="name">كيرلس رضا مكرم</p>
                    <p className="the-role">امين الم</p>
                </div>
            </div>
        </div>
    )
}

export default UserGeneralInfo;