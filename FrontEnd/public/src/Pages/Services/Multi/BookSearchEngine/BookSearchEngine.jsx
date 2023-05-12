import React , {useState} from "react";
import { searchBookEngine } from "../../../../APIs";
import "./BookSearchEngine.scss";

let BookSearchEngine = ({ onClickForSearchedBooks }) => {
    const [bookSearchEngineFeatch , setBookSearchEngineFeatch] = useState({ key: "", value:"" })
    const [bookSearchEngineErrors , setBookSearchEngineErrors] = useState(null)
    let handleChange = (e) => {
        const { name, value } = e.target
        setBookSearchEngineFeatch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const books = await searchBookEngine(bookSearchEngineFeatch.key , bookSearchEngineFeatch.value);
            sessionStorage.setItem("books",JSON.stringify(books));
            document.body.classList.toggle("hidden");
            return onClickForSearchedBooks()
        }catch(err){
            setBookSearchEngineErrors(err);
            return setTimeout(() => setBookSearchEngineErrors(null), 5000);
        }
    }

    return (
        <div className="book-search-engine the-service">
            <div className="service-name">البحث عن كتاب</div>
            <form action='' method='POST' onSubmit={handleSubmit} className="boo-search-form">
                <div className="collection">

                    <input 
                    type="search" 
                    required 
                    className="search" 
                    name='value' 
                    onChange={handleChange} 
                    value={bookSearchEngineFeatch.value} 
                    placeholder="البحث عن الكتاب بحسب"/>

                    <select className="key" name='key' onChange={handleChange} value={bookSearchEngineFeatch.key} >
                        <option>--إختار طريقه البحث--</option>
                        <option value="book_name">الإسم</option>
                        <option value="author">المؤلف</option>
                        <option value="topic">التصنيف</option>
                        <option value="publisher">الناشر</option>
                    </select>
                </div>

                {bookSearchEngineErrors &&
                 <small className='note'>
                    {bookSearchEngineErrors.statusText}
                </small>}
                
                <input type="submit" className="submit" value="البحث"/>
            </form>
        </div>
    )
}

export default BookSearchEngine;