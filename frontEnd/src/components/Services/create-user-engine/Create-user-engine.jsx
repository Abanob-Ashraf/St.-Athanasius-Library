import React from "react";
import "./Create-user-engine.scss";

let CreateUserEngine = () => {
    return (
        <div className="create-user-engine the-service">
            <div className="service-name">إنشاء مستخدم</div>
            <form action="" className="create-user-form">
                <div className="collection">
                    <div className="flex-collection">
                        <input type="text" placeholder="الأسم الأول" className="first-name"/>
                        <input type="text" placeholder="الأسم الأخير" className="last-name"/>
                        <select name="select-role" class="select-role">
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
                        <input type="email" placeholder="البريد الألكتروني" className="email"/>
                        <input type="password" placeholder="كلمه المرور" className="password"/>
                    </div>
                </div>
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreateUserEngine;