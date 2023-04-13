import React from 'react';
import "./Book-details.scss";

let BookDetails = () => {
  return (
    <div className="book-details the-service">
        <div className="flex-collection">
            <div className="service-name">معلومات الكتاب</div>
            <div className="x">X</div>
        </div>
        <form action="" className="book-details-form">
            <div className="collection">
                <div className="flex-collection">
                    <p className="library-name">
                        <p className="detail-data">إسم المكتبه</p>
                        براعم القديس أثناسيوس
                    </p>
                    <p className="block-number">
                        <p className="detail-data">رقم الوحده</p>
                        1
                    </p>
                    <p className="shelf-number">
                        <p className="detail-data">رقم الرف</p>
                        1
                    </p>
                    <p className="book-number">
                        <p className="detail-data">رقم الكتاب</p>
                        1
                    </p>
                </div>
                <div className="flex-collection">
                    <p className="book-name">
                        <p className="detail-data">إسم الكتاب</p>
                        القديس أثناسيوس
                    </p>
                    <p className="author-name">
                        <p className="detail-data">إسم المؤلف</p>
                        القديس أثناسيوس
                    </p>
                    <p className="publisher-name">
                        <p className="detail-data">إسم الناشر</p>
                        القديس أثناسيوس
                    </p>
                    <p className="series-name">
                        <p className="detail-data">إسم السلسله</p>
                        القديس أثناسيوس
                    </p>
                </div>
                <div className="flex-collection">
                    <p className="copies-number">
                        <p className="detail-data">عدد النسخ</p>
                        1
                    </p>
                    <p className="parts-number">
                        <p className="detail-data">عدد الأجزاء</p>
                        2
                    </p>
                    <p className="pages-number">
                        <p className="detail-data">عدد الصفح</p>
                        240 
                    </p>
                    <p className="publish-date">
                        <p className="detail-data">تاريخ النشر</p>
                        2003/1
                    </p>
                </div>
                <div className="flex-collection">
                    <p className="entry-date">
                        <p className="detail-data">تاريخ الدخول</p>
                        2005/2
                    </p>
                    <p className="book-code">
                        <p className="detail-data">كود الكتاب</p>
                        1-1-1
                    </p>
                </div>
            </div>
            <div className="collection">
                <p className="detail-data">موضوع الكتاب</p>
                <textarea name="conclusion" className="conclusion"></textarea>
            </div>
            <div className="collection">
                <div className="flex-collection">
                    <p className="old-user">
                        <p className="detail-data">مُسجل الكتاب</p>
                        احمس
                    </p>
                    <p className="who-edited">
                        <p className="detail-data">مُعدل الكتاب</p>
                        ابلو
                    </p>                    
                    <p className="created-date">
                        <p className="detail-data">تاريخ التسجيل</p>
                        2006/10
                    </p>
                    <p className="updated-date">
                        <p className="detail-data">تاريخ التعديل</p>
                        2006/10
                    </p> 
                </div>
                <button className="edit-book">تعديل بيانات الكتاب</button>      
            </div>
        </form>
    </div>
  )
}

export default BookDetails;
