import React from "react";
import "./My-books.scss";

let MyBooks = () => {
    return (
        <div className="my-books the-service">
            <div className="service-name">كتبي</div>
            <div className="collection">
                <div className="the-book">
                    <p className="book-name">احمس احمس</p>
                    <p className="book-ceated-date">12-7-2003</p>
                </div>
                <div className="the-book">
                    <p className="book-name">احمس احمس</p>
                    <p className="book-ceated-date">12-7-2003</p>
                </div>
                <div className="the-book">
                    <p className="book-name">احمس احمس</p>
                    <p className="book-ceated-date">12-7-2003</p>
                </div>
            </div>
        </div>
    )
}

export default MyBooks;