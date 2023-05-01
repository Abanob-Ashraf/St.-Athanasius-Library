import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SearchedBooks.scss';

let SearchedBooks = ({ onClickForSearchedBooks , onClickForBooksDetails }) => {
    const books = JSON.parse(sessionStorage.getItem("books"));
    let booksMaping = books.map((e)=>{
        return (
            <tr onClick={() => {
                onClickForSearchedBooks();
                onClickForBooksDetails();
                sessionStorage.setItem("the-book" , JSON.stringify({...e}))
            }}>
                <td>{e.library_name || "لايوجد"}</td>
                <td>{e.book_name || "لايوجد"}</td>
                <td>{e.author || "لايوجد"}</td>
                <td>{e.publisher || "لايوجد"}</td>
                <td>{e.book_code || "لايوجد"}</td>
            </tr>
        )
    })
  return (
    <div className="overlay">
        <div className="searched-books the-service">
            <div className="header-collection">
                <div className="service-name">الكتب</div>
                <Link onClick={() => {onClickForSearchedBooks();
                    document.body.classList.toggle("hidden");
                    }}><FontAwesomeIcon icon={faClose} size="2xl" className="close-icon"/>
                </Link>
            </div>
            <div className="show-searched-books">
                <table className="books">
                    <tr>
                        <th>المكتبه</th>
                        <th>أسم الكتاب</th>
                        <th>المؤلف</th>
                        <th>الناشر</th>
                        <th>كود الكتاب</th>
                    </tr>
                    {booksMaping}
                </table>
            </div>
            <small className="count">عدد الكتب {books.length}</small>
        </div>
    </div>
  )
}

export default SearchedBooks;