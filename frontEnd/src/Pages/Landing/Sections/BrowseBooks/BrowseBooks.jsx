import React from "react";
import "./BrowseBooks.scss";
import BookSearchEngine from "./Services/BookSearchEngine/BookSearchEngine";
import BooksInBlock from "./Services/BooksInBlock/BooksInBlock";
import BooksInShelf from "./Services/BooksInShelf/BooksInShelf";

let BrowseBooks = () => {
    return (
        <div className="browse-books" id="browse-books">
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

export default BrowseBooks;