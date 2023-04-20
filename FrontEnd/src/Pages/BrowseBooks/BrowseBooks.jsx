import React from "react";
import "./BrowseBooks.scss";
import BookSearchEngine from "../Services/Multi/BookSearchEngine/BookSearchEngine";
import BooksInBlock from "../Services/Multi/BooksInBlock/BooksInBlock";
import BooksInShelf from "../Services/Multi/BooksInShelf/BooksInShelf";
import MyBooks from "../Services/Multi/MyBooks/MyBooks";
import LatestBooks from "../Services/Multi/LatestBooks/LatestBooks";

let BrowseBooks = () => {
    return(
        <div className="browse-books">
            <div className="container">
                <BookSearchEngine/>
                <div className="services-container">
                    <BooksInBlock/>
                    <BooksInShelf/>
                    <MyBooks/>
                    <LatestBooks/>
                </div>
            </div>
        </div>
    )
}

export default BrowseBooks;