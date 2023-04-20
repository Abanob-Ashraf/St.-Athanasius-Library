import React from "react";
import "./FIndBooks.scss";
import BookSearchEngine from "../../../Services/Multi/BookSearchEngine/BookSearchEngine";
import BooksInBlock from "../../../Services/Multi/BooksInBlock/BooksInBlock";
import BooksInShelf from "../../../Services/Multi/BooksInShelf/BooksInShelf";

let FIndBooks = () => {
    return (
        <div className="find-a-books" id="browse-books">
            <h3 className="title">تصفح الكتب</h3>
            <div className="container">
                <BookSearchEngine/>
                <div className="services-container">
                    <BooksInBlock/>
                    <BooksInShelf/>
                </div>
            </div>
        </div>
    )
}

export default FIndBooks;