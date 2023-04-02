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
                        <input type="text" placeholder="إسم المؤلف" name="author-name"  class="author-name"/>
                        <input type="text" placeholder="إسم الناشر" name="publisher-name" class="publisher-name"/>
                        <input type="text" placeholder="إسم السلسله" name="series-name" className="series-name"/>
                        <input type="text"  placeholder="تصنيف الكتاب" name="topic" className="topic"/>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <input type="number" placeholder="عدد النسخ" name="copies-number" class="copies-number" min="1"/>
                        <input type="number" placeholder="عدد الأجزاء" name="parts-number" class="parts-number" min="1"/>
                        <input type="number" placeholder="عدد الصفحات" name="pages-number" class="pages-number" min="1"/>
                        <input type="number" placeholder="رقم الكتاب في الرف" name="book-number" class="book-number" min="1"/>
                    </div>
                </div>
                <div className="collection">
                    <textarea name="conclusion" cols="30" rows="6" placeholder="موضوع الكتاب" className="conclusion"></textarea>
                </div>
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreateBookEngine;