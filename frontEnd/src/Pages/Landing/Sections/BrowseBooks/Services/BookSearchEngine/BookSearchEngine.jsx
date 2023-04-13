import React from "react";
import "./BookSearchEngine.scss";

let BookSearchEngine = () => {
    return (
        <div className="book-search-engine the-service">
            <div className="service-name">البحث عن كتاب</div>
            <form action="" className="boo-search-form">
                <div className="collection">
                    <input type="search" required className="search" placeholder="البحث عن الكتاب بحسب"/>
                    <select className="the-way">
                        <option value="book_name">اﻷسم</option>
                        <option value="author">المؤلف</option>
                        <option value="topic">التصنيف</option>
                        <option value="publisher">الناشر</option>
                    </select>
                </div>
                <input type="submit" className="submit" value="البحث"/>
            </form>
            <small className="note"></small>
            <div className="show-searched-books">
                <table className="books">
                    <tr>
                        <th>المكتبه</th>
                        <th>أسم الكتاب</th>
                        <th>المؤلف</th>
                        <th>الناشر</th>
                        <th>كود الكتاب</th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default BookSearchEngine;