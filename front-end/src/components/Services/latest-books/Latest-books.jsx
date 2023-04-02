import React from "react";
import "./Latest-books.scss";

let LatestBooks = () => {
    return (
        <div className="latest-books the-service">
            <div className="service-name">أخر الكتب </div>
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

export default LatestBooks;