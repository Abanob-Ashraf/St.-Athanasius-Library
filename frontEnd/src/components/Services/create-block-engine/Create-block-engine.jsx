import React from "react";
import "./Create-block-engine.scss";

let CreateBlockEngine = () => {
    return (
        <div className="create-block-engine the-service">
            <div className="service-name">إنشاء وحده</div>
            <form action="" className="create-block-form">
                <div className="collection">
                    <select name="select-library" className="select-library">
                        <option>إختر المكتبه</option>
                    </select>
                    <div className="flex-collection">
                        <input type="number" placeholder="رقم الوحده" className="block-number" />
                        <input type="text" placeholder="إسم الوحده" className="block-name"/>
                    </div>
                </div>
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreateBlockEngine;