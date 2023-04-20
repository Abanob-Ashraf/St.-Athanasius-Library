import React from "react";
import "./MyBooks.scss";

let MyBooks = () => {
    return (
        <div className="my-books the-service">
            <div className="service-name">كتبي</div>
            <div className="collection">
                <button className="show">اظهار كتبي</button>
            </div>
        </div>
    )
}

export default MyBooks;