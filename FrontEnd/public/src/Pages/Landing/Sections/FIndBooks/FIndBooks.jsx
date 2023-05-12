import React from "react";
import "./FIndBooks.scss";
import BookSearchEngine from "../../../Services/Multi/BookSearchEngine/BookSearchEngine";
import BooksInBlock from "../../../Services/Multi/BooksInBlock/BooksInBlock";
import BooksInShelf from "../../../Services/Multi/BooksInShelf/BooksInShelf";

let FIndBooks = ({ onClickForSearchedBooks }) => {
    return (
        <div className="find-a-books" id="browse-books">
            <h3 className="title">تصفح الكتب</h3>
            <div className="container">
                <BookSearchEngine onClickForSearchedBooks={onClickForSearchedBooks}/>
                <div className="services-container">
                    <BooksInBlock onClickForSearchedBooks={onClickForSearchedBooks}/>
                    <BooksInShelf onClickForSearchedBooks={onClickForSearchedBooks}/>
                </div>
            </div>
        </div>
    )
}

export default FIndBooks;