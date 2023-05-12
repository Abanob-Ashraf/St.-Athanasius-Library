import React , { useState } from "react";
import "./Landing.scss";
import Home from "./Sections/Home/Home";
import Adminstrators from "./Sections/Adminstrators/Adminstrators";
import ContactUs from "./Sections/ContactUs/ContactUs";
import FIndBooks from "./Sections/FIndBooks/FIndBooks";
import SearchedBooks from "../Services/Single/SearchedBooks/SearchedBooks";
import BookDetails from "../Services/Single/BookDetails/BookDetails";
import EditBook from "../Services/Single/EditBook/EditBook";

let Landing = () => {
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
    return (
        <div className="landing">
            <Home/>
            <Adminstrators/>
            <ContactUs/>
            <FIndBooks onClickForSearchedBooks={handleOnClickForSearchedBooks}/>
            {onClickForSearchedBooks && <SearchedBooks onClickForSearchedBooks={handleOnClickForSearchedBooks} onClickForBooksDetails={handleOnClickForBooksDetails}/>}
            {onClickForBooksDetails && <BookDetails onClickForSearchedBooks={handleOnClickForSearchedBooks} onClickForBooksDetails={handleOnClickForBooksDetails} onClickForEditBook={handleOnClickForEditBook}/>}
            {onClickForEditBook && <EditBook onClickForBooksDetails={handleOnClickForBooksDetails} onClickForEditBook={handleOnClickForEditBook}/>}
        </div>
    )
}

export default Landing;