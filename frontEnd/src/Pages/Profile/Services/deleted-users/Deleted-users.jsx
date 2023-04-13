import React from "react";
import "./Deleted-users.scss";

let DeletedUsers = () => {
    return (
        <div className="deleted-users the-service">
            <div className="service-name">إنشاء مستخدم</div>
            <button>إظهار المستخدمين المحذوفين</button>
            <small className="note"></small>
        </div>
    )
}

export default DeletedUsers;