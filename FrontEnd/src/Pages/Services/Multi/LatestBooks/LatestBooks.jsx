import React from "react";
import "./LatestBooks.scss";

let LatestBooks = () => {
    return (
        <div className="latest-books the-service">
            <div className="service-name">أخر الكتب </div>
            <div className="collection">
                <button className="show">اظهار أخر الكتب</button>
            </div>
        </div>
    )
}

export default LatestBooks;