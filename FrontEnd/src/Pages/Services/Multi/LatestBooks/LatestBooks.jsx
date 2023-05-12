import React , {useState} from "react";
import { SearchLatestBooks } from "../../../../APIs";
import "./LatestBooks.scss";

let LatestBooks = ({ onClickForSearchedBooks }) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [latestBooksErrors , setLatestBooksErrors] = useState();
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const books = await SearchLatestBooks(user.token);
            sessionStorage.setItem("books",JSON.stringify(books));
            document.body.classList.toggle("hidden");
            return onClickForSearchedBooks();
        }catch(err){
            setLatestBooksErrors(err);
            return setTimeout(() => setLatestBooksErrors(null), 5000);        }
    }
    return (
        <div className="latest-books the-service">
            <div className="service-name">أخر الكتب </div>
            <div className="collection">
                <button onClick={handleSubmit} className="show">اظهار أخر الكتب</button>
            </div>
            {latestBooksErrors &&
                <small className='note'>
                {latestBooksErrors.statusText}
            </small>}
        </div>
    )
}

export default LatestBooks;