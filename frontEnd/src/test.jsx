import React from 'react';
import "./test.scss";
import BookSearchEngine from './components/Services/book-search-engine/Book-search-engine';
import BooksInShelf from './components/Services/books-in-shelf/Books-in-shelf';
import BooksInBlock from './components/Services/books-in-block/Books-in-block';
import CreateBlockEngine from './components/Services/create-block-engine/Create-block-engine';
import CreateShelfEngine from './components/Services/create-shelf-engine/Create-shelf-engine';
import CreatLibraryEngine from './components/Services/create-library-engine/Create-library-engine';
import CreateBookEngine from './components/Services/create-book-engine/Create-book-engine';
import CreateUserEngine from './components/Services/create-user-engine/Create-user-engine';
import DeletedUsers from './components/Services/deleted-users/Deleted-users';
import LatestBooks from './components/Services/latest-books/Latest-books';
import MyBooks from './components/Services/my-books/My-books';
import UserGeneralInfo from './components/Services/user-general-info/User-general-info';
import UserInfo from './components/Services/user-info/User-info';
import UserSearchEngine from './components/Services/user-search-engine/User-search-engine';
import BackUp from './components/Services/backup/Backup';

let Test = () => {
    return (
        <div className="test">
            <div className="container">
                <BookSearchEngine/>
                <div className="grid">
                    <BooksInShelf/>
                    <BooksInBlock/>
                    <CreateBlockEngine/>
                    <CreateShelfEngine/>
                    <CreatLibraryEngine/>
                    <DeletedUsers/>
                    <LatestBooks/>
                    <MyBooks/>
                    <UserGeneralInfo/>
                    <UserInfo/>
                    <UserSearchEngine/>
                </div>
                <BackUp/>
                <CreateBookEngine/>
                <CreateUserEngine/>
            </div>
        </div>
    )
}

export default Test