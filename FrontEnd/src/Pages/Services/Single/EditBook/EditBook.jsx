import React , {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { editBook , allLibraries , allBlocks , allShelfs } from "../../../../APIs";
import "./EditBook.scss";

let EditBook = ({ onClickForBooksDetails , onClickForEditBook }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const the_book = JSON.parse(sessionStorage.getItem("the-book"));
    const [libraryFetch ,setLibraryFetch] = useState([]);
    const [blockFetch ,setBlockFetch] = useState([]);
    const [shelfFetch ,setShelfFetch] = useState([]);
    const [editBookFeatch , setEditBookFeatch] =useState({ library_id:"",
        block_id:"",
        shelf_id:"" || the_book.shelf_id,
        book_name:"" || the_book.book_name,
        author:"" || the_book.author,
        publisher:"" || the_book.publisher,
        topic:"" || the_book.topic,
        name_of_series:"" || the_book.name_of_series,
        number_of_copies:"" || the_book.number_of_copies,
        number_of_parts:"" || the_book.number_of_parts,
        number_of_pages:"" || the_book.number_of_pages,
        book_number_in_shelf:"" || the_book.book_number_in_shelf,
        publish_date:"" || the_book.publish_date,
        entry_date:"" || the_book.entry_date,
        conclusion:"" || the_book.conclusion
    })
    const [editBookFeatchSuccess , setEditBookFeatchSuccess] = useState()
    const [editBookFeatchErrors , setEditBookFeatchErrors] = useState()

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
            const edit = await editBook(the_book.id , editBookFeatch , user.token);
            setEditBookFeatchSuccess(edit);
            setTimeout(() => setEditBookFeatchSuccess(null), 5000);
            document.body.classList.toggle("hidden");
            return onClickForEditBook();
        }catch(err){
            console.log(err)
            setEditBookFeatchErrors(err);
            return setTimeout(() => setEditBookFeatchErrors(null), 5000);
        }
    }

    let handleLibrary = async() => {
        try {
            const libraries = await allLibraries();
            return setLibraryFetch(libraries)
        }catch(err){
            return setLibraryFetch(null);
        }
    }
    
    let handleBlock = async() => {
        try {
            let blocks = await allBlocks(editBookFeatch.library_id);
            return setBlockFetch(blocks)
        }catch(err){
            return setBlockFetch(null);
        }
    }
    
    let handleShelf = async() => {
        try {
            let shelfs = await allShelfs(editBookFeatch.block_id);
            return setShelfFetch(shelfs)
        }catch(err){
            return setBlockFetch(null);
        }
    }

    return (
        <div className="overlay">
            <div className="edit-book the-service">
                <div className="header-collection">
                    <div className="service-name">معلومات الكتاب</div>
                    <Link onClick={() => {
                        onClickForBooksDetails();
                        onClickForEditBook();
                    }}>
                        <FontAwesomeIcon icon={faArrowLeft} size="2xl" className="back-icon"/>
                    </Link>
                </div>
                <div className="scroll">
                    <form method="POST" action="" onSubmit={handleSubmit} className="create-book-form">
                        <div className="collection">
                            <div className="flex-collection">

                                <select 
                                name="library_id" 
                                onClick={handleLibrary} 
                                onChange={handleChange} 
                                value={editBookFeatch.library_id} 
                                className="select-library">

                                    <option>إختر المكتبه</option>
                                    {libraryFetch != null ?
                                    libraryFetch.map((e) => <option value={e.id}>{e.library_name}</option>) 
                                    : null}

                                </select>

                                <select 
                                name="block_id" 
                                onClick={handleBlock} 
                                onChange={handleChange} 
                                value={editBookFeatch.block_id} 
                                className="select-block">

                                    <option>إختر الوحده</option>
                                    {blockFetch != null ?
                                    blockFetch.map((e) => <option value={e.id}>{e.block_number}</option>) 
                                    : null}

                                </select>

                                <select 
                                name="shelf_id" 
                                onClick={handleShelf} 
                                onChange={handleChange} 
                                value={editBookFeatch.shelf_id} 
                                className="select-shelf">

                                    <option>إختر الرف</option>
                                    {shelfFetch != null ?
                                    shelfFetch.map((e) => <option value={e.id}>{e.shelf_number}</option>) 
                                    : null}

                                </select>

                            </div>
                        </div>
                        <div className="collection">
                            <div className="flex-collection">
                                <div className="book-name">
                                    <p>إسم الكتاب</p>
                                    <input 
                                    type="text" 
                                    placeholder={the_book.book_name || "لا يوجد"} 
                                    onChange={handleChange} 
                                    value={editBookFeatch.book_name} 
                                    name="book_name"/>
                                </div>
                                <div className="author-name">
                                    <p>إسم المؤلف</p>
                                    <input 
                                    type="text" 
                                    placeholder={the_book.author || "لا يوجد"} 
                                    onChange={handleChange} 
                                    value={editBookFeatch.author}
                                     name="author"/>
                                </div>
                                <div className="publisher-name">
                                    <p>إسم الناشر</p>
                                    <input 
                                    type="text" 
                                    placeholder={the_book.publisher || "لا يوجد"} 
                                    onChange={handleChange} 
                                    value={editBookFeatch.publisher} 
                                    name="publisher"/>
                                </div>
                                <div  className="series-name">
                                    <p>إسم السلسله</p>
                                    <input 
                                    type="text" 
                                    placeholder={the_book.name_of_series || "لا يوجد"} 
                                    onChange={handleChange} 
                                    value={editBookFeatch.name_of_series} 
                                    name="name_of_series"/>
                                </div>
                                <div className="topic">
                                    <p>التصنيف</p>
                                    <input 
                                    type="text" 
                                    placeholder={the_book.topic || "لا يوجد"} 
                                    onChange={handleChange} 
                                    value={editBookFeatch.topic} 
                                    name="topic"/>
                                </div>
                            </div>
                        </div>
                        <div className="collection">
                            <div className="flex-collection">
                                <div  className="copies-number">
                                    <p>عدد النسخ</p>
                                    <input 
                                    type="number" 
                                    placeholder={the_book.number_of_copies || "لا يوجد"} 
                                    min="1" 
                                    onChange={handleChange} 
                                    value={editBookFeatch.number_of_copies} 
                                    name="number_of_copies"/>
                                </div>
                                <div className="parts-number">
                                    <p>عدد الأجزاء</p>
                                    <input 
                                    type="number" 
                                    placeholder={the_book.number_of_parts || "لا يوجد"} 
                                    min="1" 
                                    onChange={handleChange} 
                                    value={editBookFeatch.number_of_parts} 
                                    name="number_of_parts"/>
                                </div>
                                <div className="pages-number">
                                    <p>عدد الصفح</p>
                                    <input 
                                    type="number" 
                                    placeholder={the_book.number_of_pages || "لا يوجد"} 
                                    min="1" 
                                    onChange={handleChange} 
                                    value={editBookFeatch.number_of_pages} 
                                    name="number_of_pages"/>
                                </div>
                                <div className="publish-date" >
                                    <p>تاريخ النشر</p>
                                    <input 
                                    type="date" 
                                    placeholder={the_book.publish_date || "لا يوجد"} 
                                    onChange={handleChange} 
                                    value={editBookFeatch.publish_date} 
                                    name="publish_date"/>
                                </div>
                                <div  className="entry-date">
                                    <p>تاريخ الدخول</p>
                                    <input 
                                    type="date" 
                                    placeholder={the_book.entry_date || "لا يوجد"} 
                                    onChange={handleChange} 
                                    value={editBookFeatch.entry_date} 
                                    name="entry_date"/>
                                </div>
                                <div  className="book-number">
                                    <p>رقم الكتاب في الرف</p>
                                    <input 
                                    type="number" 
                                    placeholder={the_book.book_number_in_shelf || "لا يوجد"} 
                                    min="1" 
                                    onChange={handleChange} 
                                    value={editBookFeatch.book_number_in_shelf} 
                                    name="book_number_in_shelf"/>
                                </div>
                            </div>
                        </div>
                        <div className="collection">
                            <div  className="conclusion">
                                <p>الموضوع</p>
                                <textarea 
                                placeholder={the_book.conclusion || "لا يوجد"} 
                                onChange={handleChange} 
                                value={editBookFeatch.conclusion} 
                                name="conclusion"/>
                            </div>
                        </div>
                        <input type="submit" className="submit" value="تعديل"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditBook;