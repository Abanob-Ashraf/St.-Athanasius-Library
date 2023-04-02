import React from "react";
import "./User-info.scss";

let UserInfo = () => {
    return (
        <div className="user-info the-service">
            <div className="service-name">البيانات</div>
            <div className="collection">
                <div className="flex-collection">
                    <p className="first-name">kerolos</p>
                    <p className="last-name">reda</p>
                </div>
                <p className="email">elfanan@gmail.com</p>
                <p className="phone-number">01282332039</p>
                <p className="the-role">owner</p>
            </div>
        </div>
    )
}

export default UserInfo;