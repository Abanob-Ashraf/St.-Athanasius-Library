import React from "react";
import "./Create-book-engine.scss";

let CreateBookEngine = () => {
    return (
        <div className="create-book-engine the-service">
            <div className="service-name">إنشاء كتاب</div>
            <form action="" className="create-book-form">
                <div className="collection">
                    <div className="flex-collection">
                        <select name="select-library" className="select-library">
                            <option>إختر المكتبه</option>
                        </select>
                        <select name="select-block" className="select-block">
                            <option>إختر الوحده</option>
                        </select>
                        <select name="select-shelf" className="select-shelf">
                            <option>إختر الرف</option>
                        </select>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <input type="text" placeholder="إسم الكتاب" name="book-name" className="book-name"/>
                        <input type="text" placeholder="إسم المؤلف" name="author-name"  className="author-name"/>
                        <input type="text" placeholder="إسم الناشر" name="publisher-name" className="publisher-name"/>
                        <input type="text" placeholder="إسم السلسله" name="series-name" className="series-name"/>
                        <input type="text"  placeholder="تصنيف الكتاب" name="topic" className="topic"/>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <input type="number" placeholder="عدد النسخ" name="copies-number" className="copies-number" min="1"/>
                        <input type="number" placeholder="عدد الأجزاء" name="parts-number" className="parts-number" min="1"/>
                        <input type="number" placeholder="عدد الصفحات" name="pages-number" className="pages-number" min="1"/>
                        <input type="text" placeholder="تاريخ النشر" name="publish-date" className="publish-date"/>
                        <input type="text" placeholder="تاريخ دخول الكتاب" name="entry-date" className="entry-date"/>
                        <input type="number" placeholder="رقم الكتاب في الرف" name="book-number" className="book-number" min="1"/>
                    </div>
                </div>
                <div className="collection">
                    <textarea name="conclusion" placeholder="موضوع الكتاب" className="conclusion"></textarea>
                </div>
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreateBookEngine;