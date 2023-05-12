import React from 'react';
import "./BookDetails.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

let BookDetails = ({ onClickForSearchedBooks , onClickForBooksDetails , onClickForEditBook}) => {
    const the_book = JSON.parse(sessionStorage.getItem("the-book"));
  return (
    <div className="overlay">
        <div className="book-details the-service">
            <div className="header-collection">
                <div className="service-name">معلومات الكتاب</div>
                <Link onClick={()=>{
                    onClickForSearchedBooks();
                    onClickForBooksDetails();
                    sessionStorage.removeItem('the-book');
                }}><FontAwesomeIcon icon={faArrowLeft} size="2xl" className="back-icon"/>
                </Link>
            </div>
            <div className="scroll">
                <div className="collection-of">
                    <div className="flex-collection">
                        <p className="library-name">
                            <p className="detail-data">إسم المكتبه</p>
                            {the_book.library_name || "لا يوجد"}
                        </p>
                        <p className="block-number">
                            <p className="detail-data">رقم الوحده</p>
                            {the_book.block_number || "لا يوجد"}
                        </p>
                        <p className="shelf-number">
                            <p className="detail-data">رقم الرف</p>
                            {the_book.shelf_number || "لا يوجد"}
                        </p>
                        <p className="book-number">
                            <p className="detail-data">رقم الكتاب</p>
                            {the_book.book_number_in_shelf || "لا يوجد"}
                        </p>
                    </div>
                    <div className="flex-collection">
                        <p className="book-name">
                            <p className="detail-data">إسم الكتاب</p>
                            {the_book.book_name || "لا يوجد"}
                        </p>
                        <p className="author-name">
                            <p className="detail-data">إسم المؤلف</p>
                            {the_book.author || "لا يوجد"}
                        </p>
                        <p className="publisher-name">
                            <p className="detail-data">إسم الناشر</p>
                            {the_book.publisher || "لا يوجد"}
                        </p>
                        <p className="series-name">
                            <p className="detail-data">إسم السلسله</p>
                            {the_book.name_of_series || "لا يوجد"}
                        </p>
                    </div>
                    <div className="flex-collection">
                        <p className="copies-number">
                            <p className="detail-data">عدد النسخ</p>
                            {the_book.number_of_copies || "لا يوجد"}
                        </p>
                        <p className="parts-number">
                            <p className="detail-data">عدد الأجزاء</p>
                            {the_book.number_of_parts || "لا يوجد"}
                        </p>
                        <p className="pages-number">
                            <p className="detail-data">عدد الصفح</p>
                            {the_book.number_of_pages || "لا يوجد"} 
                        </p>
                        <p className="publish-date">
                            <p className="detail-data">تاريخ النشر</p>
                            {the_book.publish_date || "لا يوجد"}
                        </p>
                    </div>
                    <div className="flex-collection">
                        <p className="entry-date">
                            <p className="detail-data">تاريخ الدخول</p>
                            {the_book.entry_date || "لا يوجد"}
                        </p>
                        <p className="book-code">
                            <p className="detail-data">كود الكتاب</p>
                            {the_book.book_code || "لا يوجد"}
                        </p>
                    </div>
                    <div className="flex-collection">
                        <p className="topic">
                            <p className="detail-data">تصنيف الكتاب</p>
                            {the_book.topic || "لا يوجد"}
                        </p>
                    </div>
                </div>
                <div className="collection-of">
                    <p className="detail-data">موضوع الكتاب</p>
                    <textarea name="conclusion" className="conclusion" placeholder={the_book.conclusion || "لا يوجد"}/>
                </div>
                {sessionStorage.getItem("user") &&
                <div className="collection-of">
                    <div className="flex-collection">
                        <p className="old-user">
                            <p className="detail-data">مُسجل الكتاب</p>
                            {the_book.old_user || "لا يوجد"}
                        </p>
                        <p className="who-edited">
                            <p className="detail-data">مُعدل الكتاب</p>
                            {the_book.who_edited || "لا يوجد"}
                        </p>                    
                        <p className="created-date">
                            <p className="detail-data">تاريخ التسجيل</p>
                            {`${new Date(the_book.created_date).getFullYear()}-${new Date(the_book.created_date).getMonth() + 1}-${new Date(the_book.created_date).getDay()}` || "لا يوجد"}
                        </p>
                        <p className="updated-date">
                            <p className="detail-data">تاريخ التعديل</p>
                            {`${new Date(the_book.updated_date).getFullYear()}-${new Date(the_book.updated_date).getMonth() + 1}-${new Date(the_book.updated_date).getDay()}` || "لا يوجد"}
                        </p> 
                    </div>
                    <button onClick={() => {
                        onClickForEditBook();
                        onClickForBooksDetails();}} 
                        className="edit-book">
                            تعديل بيانات الكتاب
                        </button>      
                </div>}
            </div>
        </div>
    </div>
  )
}

export default BookDetails;
