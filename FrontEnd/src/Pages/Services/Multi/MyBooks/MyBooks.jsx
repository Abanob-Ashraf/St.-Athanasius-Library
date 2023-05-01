import React , { useState } from "react";
import { SearchMyBooks } from "../../../../APIs";
import "./MyBooks.scss";

let MyBooks = ({ onClickForSearchedBooks }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [myBooksErrors , setMyBooksErrors] = useState();
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const books = await SearchMyBooks(user.token);
            sessionStorage.setItem("books",JSON.stringify(books));
            document.body.classList.toggle("hidden");
            return onClickForSearchedBooks();
        }catch(err){
            setMyBooksErrors(err);
            return setTimeout(() => setMyBooksErrors(null), 5000);;
        }
    }
    return (
        <div className="my-books the-service">
            <div className="service-name">كتبي</div>
            <div className="collection">
                <button onClick={handleSubmit} className="show">اظهار كتبي</button>
            </div>
            {myBooksErrors &&
                <small className='note'>
                {myBooksErrors.statusText}
            </small>}
        </div>
    )
}

export default MyBooks;