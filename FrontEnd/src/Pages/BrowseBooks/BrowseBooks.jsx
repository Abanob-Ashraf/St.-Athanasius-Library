import React , {useState} from "react";
import "./BrowseBooks.scss";
import BookSearchEngine from "../Services/Multi/BookSearchEngine/BookSearchEngine";
import BooksInBlock from "../Services/Multi/BooksInBlock/BooksInBlock";
import BooksInShelf from "../Services/Multi/BooksInShelf/BooksInShelf";
import MyBooks from "../Services/Multi/MyBooks/MyBooks";
import LatestBooks from "../Services/Multi/LatestBooks/LatestBooks";
import SearchedBooks from "../Services/Single/SearchedBooks/SearchedBooks";
import BookDetails from "../Services/Single/BookDetails/BookDetails";
import EditBook from "../Services/Single/EditBook/EditBook";

let BrowseBooks = () => {
    const [onClickForSearchedBooks , setOnClickForSearchedBooks] = useState(false);
    const [onClickForBooksDetails , setOnClickForBooksDetails] = useState(false);
    const [onClickForEditBook , setOnClickForEditBook] = useState(false);
    let handleOnClickForSearchedBooks = () => {
        setOnClickForSearchedBooks(!onClickForSearchedBooks)
    }
    let handleOnClickForBooksDetails = () => {
        setOnClickForBooksDetails(!onClickForBooksDetails);
    }
    let handleOnClickForEditBook = () => {
        setOnClickForEditBook(!onClickForEditBook);
    }
    return(
        <div className="browse-books">
            <div className="container">
                <BookSearchEngine onClickForSearchedBooks={handleOnClickForSearchedBooks} />
                <div className="services-container">
                    <BooksInBlock onClickForSearchedBooks={handleOnClickForSearchedBooks}/>
                    <BooksInShelf onClickForSearchedBooks={handleOnClickForSearchedBooks}/>
                    <MyBooks onClickForSearchedBooks={handleOnClickForSearchedBooks}/>
                    <LatestBooks onClickForSearchedBooks={handleOnClickForSearchedBooks}/>
                </div>
                {onClickForSearchedBooks && <SearchedBooks onClickForSearchedBooks={handleOnClickForSearchedBooks} onClickForBooksDetails={handleOnClickForBooksDetails}/>}
                {onClickForBooksDetails && <BookDetails onClickForSearchedBooks={handleOnClickForSearchedBooks} onClickForBooksDetails={handleOnClickForBooksDetails} onClickForEditBook={handleOnClickForEditBook}/>}
                {onClickForEditBook && <EditBook onClickForBooksDetails={handleOnClickForBooksDetails} onClickForEditBook={handleOnClickForEditBook}/>}
            </div>
        </div>
    )
}

export default BrowseBooks;