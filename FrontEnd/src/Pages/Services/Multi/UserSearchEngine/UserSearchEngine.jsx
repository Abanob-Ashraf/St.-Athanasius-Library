import React from "react";
import "./UserSearchEngine.scss"

let UserSearchEngine = () => {
    return (
        <div className="user-search-engine the-service">
            <div className="service-name">البحث عن مستخدم</div>
            <form action="" className="user-search-form">
                <div className="collection">
                    <input type="search" required className="search" placeholder="البحث عن المستخدم بحسب"/>
                    <select className="key">
                        <option value="first_name">الإسم الأول</option>
                        <option value="last_name">الإسم الأخير</option>
                        <option value="full_name">الإسم الكامل</option>
                        <option value="email">البريد الألكتروني</option>
                    </select>
                </div>
                <input type="submit" className="submit" value="البحث"/>
            </form>
            <div className="flex-collection">
                    <button>جميع المستخدمين</button>
                    <button>المستخدمين المحذوفين</button>
            </div>
        </div>
    )
}

export default UserSearchEngine;