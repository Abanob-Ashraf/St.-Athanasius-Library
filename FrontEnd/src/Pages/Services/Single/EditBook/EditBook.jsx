import React , {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { editBook , allLibraries , allBlocks , allShelfs } from "../../../../APIs";
import "./EditBook.scss";

let EditBook = ({ ocClickForEditBook }) => {
    const the_book = JSON.parse(sessionStorage.getItem("the-book"));
    const [editBookFeatch , setEditBookFeatch] = useState({select_library:""})
    const [editBookFeatchErrors , setEditBookFeatchErrors] = useState(null)

    let handleChange = (e) => {
        const { name, value } = e.target
        setEditBookFeatch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const books = await editBook(editBookFeatch);
        }catch(err){
            setEditBookFeatchErrors(err);
            return setTimeout(() => setEditBookFeatchErrors(null), 5000);
        }
    }
    return (
        <div className="overlay">
            <div className="edit-book the-service">
                <div className="header-collection">
                    <div className="service-name">معلومات الكتاب</div>
                    <Link onClick={ocClickForEditBook}><FontAwesomeIcon icon={faArrowLeft} size="2xl" className="back-icon"/></Link>
                </div>
                <div className="scroll">
                    <form method="POST" action="" onSubmit={handleSubmit} className="create-book-form">
                        <div className="collection">
                            <div className="flex-collection">
                                <select name="select_library" className="select-library" value={editBookFeatch.select_library} onChange={handleChange}>
                                    <option>إختر المكتبه</option>
                                    {LibrariesMaping}
                                </select>
                                <select name="select_block" className="select-block" value={editBookFeatch.select_block} onChange={handleChange}>
                                    <option>إختر الوحده</option>
                                    {BlocksMaping}
                                </select>
                                <select name="select_shelf" className="select-shelf" value={editBookFeatch.select_shelf} onChange={handleChange}>
                                    <option>إختر الرف</option>
                                    {ShelfsMaping}
                                </select>
                            </div>
                        </div>
                        <div className="collection">
                            <div className="flex-collection">
                                <input type="text" data-type="إسم الكتاب" placeholder={the_book.book_name || "لا يوجد"} name="book-name" className="book-name" onChange={handleChange}/>
                                <input type="text" data-type="إسم المؤلف" placeholder={the_book.author || "لا يوجد"} name="author-name"  className="author-name" onChange={handleChange}/>
                                <input type="text" data-type="إسم الناشر" placeholder={the_book.publisher || "لا يوجد"} name="publisher-name" className="publisher-name" onChange={handleChange}/>
                                <input type="text" data-type="إسم السلسله" placeholder={the_book.name_of_series || "لا يوجد"} name="series-name" className="series-name" onChange={handleChange}/>
                                <input type="text" data-type="التصنيف" placeholder={the_book.topic || "لا يوجد"} name="topic" className="topic" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="collection">
                            <div className="flex-collection">
                                <input type="number" data-type="عدد النسخ" placeholder={the_book.number_of_copies || "لا يوجد"} name="copies-number" className="copies-number" min="1" onChange={handleChange}/>
                                <input type="number" data-type="عدد الأجزاء" placeholder={the_book.number_of_parts || "لا يوجد"} name="parts-number" className="parts-number" min="1" onChange={handleChange}/>
                                <input type="number" data-type="عدد الصفح" placeholder={the_book.number_of_pages || "لا يوجد"} name="pages-number" className="pages-number" min="1" onChange={handleChange}/>
                                <input type="text" data-type="تاريخ النشر" placeholder={the_book.publish_date || "لا يوجد"} name="publish-date" className="publish-date" onChange={handleChange}/>
                                <input type="text" data-type="تاريخ الدخول" placeholder={the_book.entry_date || "لا يوجد"} name="entry-date" className="entry-date" onChange={handleChange}/>
                                <input type="number" data-type="رقم الكتاب في الرف" placeholder={the_book.book_number_in_shelf || "لا يوجد"} name="book-number" className="book-number" min="1" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="collection">
                            <textarea name="conclusion" data-type="الموضوع" placeholder={the_book.conclusion || "لا يوجد"} className="conclusion" onChange={handleChange}/>
                        </div>
                        {/* <small className="note"></small> */}
                        <input type="submit" className="submit" value="تعديل"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditBook;