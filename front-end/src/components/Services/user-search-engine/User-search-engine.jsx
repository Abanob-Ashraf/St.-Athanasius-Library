import React from "react";
import "./User-search-engine.scss"

let UserSearchEngine = () => {
    return (
        <div className="user-search-engine the-service">
            <div className="service-name">البحث عن مستخدم</div>
            <form action="" className="user-search-form">
                <div className="collection">
                    <input type="search" required className="search" placeholder="البحث عن المستخدم بحسب"/>
                    <select className="the-way">
                        <option value="first_name">اﻷسم الأول</option>
                        <option value="last_name">الأسم الأخير</option>
                        <option value="full_name">الأسم الكامل</option>
                        <option value="email">البريد الألكتروني</option>
                    </select>
                </div>
                <input type="submit" className="submit" value="البحث"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default UserSearchEngine;