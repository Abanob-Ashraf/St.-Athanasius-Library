import React from "react";
import "./Books-in-block.scss";

let BooksInBlock = () => {
    return (
        <div className="books-in-block the-service">
            <div className="service-name">كتب الوحده</div>
            <form action="" className="books-in-block-form">
                <div className="collection">
                    <select name="select-library" className="select-library">
                        <option>إختر المكتبه</option>
                    </select>
                    <select name="select-block" className="select-block">
                            <option>إختر الوحده</option>
                    </select>
                </div>
                <input type="submit" className="submit" value="البحث"/>
            </form>
            <small className="note"></small>
            <small className="count"></small>
        </div>
    )
}

export default BooksInBlock;