import React from "react";
import "./CreateLibraryEngine.scss";

let CreatLibraryEngine = () => {
    return (
        <div className="create-library-engine the-service">
            <div className="service-name">إنشاء مكتبه</div>
            <form action="" className="create-library-form">
                <div className="collection">
                    <input type="text" placeholder="إسم المكتبه" className="library-name"/>
                </div>
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreatLibraryEngine;