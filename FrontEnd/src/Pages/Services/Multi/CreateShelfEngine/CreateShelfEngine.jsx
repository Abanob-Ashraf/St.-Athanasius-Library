import React from "react";
import "./CreateShelfEngine.scss";

let CreateShelfEngine = () => {
    return (
        <div className="create-shelf-engine the-service">
            <div className="service-name">إنشاء رف</div>
            <form action="" className="create-shelf-form">
                <div className="collection">
                    <div className="flex-collection">
                        <select name="select-library" className="select-library">
                            <option>إختر المكتبه</option>
                        </select>
                        <select name="select-block" className="select-block">
                                <option>إختر الوحده</option>
                        </select>
                    </div>
                    <div className="flex-collection">
                        <input type="number" placeholder="رقم الرف" className="shelf-number" />
                        <input type="text" placeholder="إسم الرف" className="shelf-name"/>
                    </div>
                </div>
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreateShelfEngine;