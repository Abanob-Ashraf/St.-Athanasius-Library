import React from "react";
import "./Backup.scss";

let BackUp = () => {
    return (
        <div className="backup the-service">
            <div className="service-name">إستعاده البيانات</div>
                <div className="collection">
                    <div className="flex-collection">
                        <button className="users-data">بيانات المستخدمين</button>
                        <button className="libraries-data">بيانات المكتبات</button>
                        <button className="blocks-data">بيانات الوحدات</button>
                        <button className="shelfs-data">بيانات الأرفف</button>
                        <button className="books-data">بيانات الكتب</button>
                    </div>
                </div>
                <div className="collection">
                    <button className="all-data">جميع البيانات</button>
                </div>
        </div>
    )
}

export default BackUp;