import React , { useState } from "react";
import { allLibraries , allBlocks , allShelfs , searchBookInShelf } from "../../../../APIs";
import "./BooksInShelf.scss";

let BooksInShelf = ({ onClickForSearchedBooks }) => {
    const [libraryFetch ,setLibraryFetch] = useState([]);
    const [blockFetch ,setBlockFetch] = useState([]);
    const [shelfFetch ,setShelfFetch] = useState([]);
    const [booksInShelfFetch , setBooksInShelfFetch] = useState({ library_id:"" , block_id:"" , shelf_id:"" });
    const [booksInShelfErrors , setBooksInShelfErrors] = useState();

    let handleChange = (e) => {
        const { name, value } = e.target
        setBooksInShelfFetch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const books = await searchBookInShelf(booksInShelfFetch.library_id , booksInShelfFetch.block_id , booksInShelfFetch.shelf_id);
            sessionStorage.setItem("books",JSON.stringify(books));
            document.body.classList.toggle("hidden");
            return onClickForSearchedBooks();
        }catch(err){
            setBooksInShelfErrors(err);
            return setTimeout(() => setBooksInShelfErrors(null), 5000);
        }
    }
    
    let handleLibrary = async() => {
        try {
            const libraries = await allLibraries();
            return setLibraryFetch(libraries)
        }catch(err){
            return setLibraryFetch(null);
        }
    }
    
    let handleBlock = async() => {
        try {
            let blocks = await allBlocks(booksInShelfFetch.library_id);
            return setBlockFetch(blocks)
        }catch(err){
            return setBlockFetch(null);
        }
    }
    
    let handleShelf = async() => {
        try {
            let shelfs = await allShelfs(booksInShelfFetch.block_id);
            return setShelfFetch(shelfs)
        }catch(err){
            return setBlockFetch(null);
        }
    }

    return (
        <div className="books-in-shelf the-service">
            <div className="service-name">كتب الرف </div>
            <form action="" method="POST" onSubmit={handleSubmit} className="books-in-shelf-form">
                <div className="collection">
                    <select 
                    name="library_id" 
                    onClick={handleLibrary} 
                    onChange={handleChange} 
                    value={booksInShelfFetch.library_id} 
                    className="select-library">

                        <option>إختر المكتبه</option>
                        {libraryFetch != null ?
                        libraryFetch.map((e) => <option value={e.id}>{e.library_name}</option>) 
                        : null}

                    </select>

                    <div className="flex-collection">
                        <select 
                        name="block_id" 
                        onClick={handleBlock} 
                        onChange={handleChange} 
                        value={booksInShelfFetch.block_id} 
                        className="select-block">

                            <option>إختر الوحده</option>
                            {blockFetch != null ?
                            blockFetch.map((e) => <option value={e.id}>{e.block_number}</option>) 
                            : null}

                        </select>

                        <select 
                        name="shelf_id" 
                        onClick={handleShelf} 
                        onChange={handleChange} 
                        value={booksInShelfFetch.shelf_id} 
                        className="select-shelf">

                            <option>إختر الرف</option>
                            {shelfFetch != null ?
                             shelfFetch.map((e) => <option value={e.id}>{e.shelf_number}</option>) 
                            : null}

                        </select>
                    </div>
                </div>

                {booksInShelfErrors &&
                 <small className='note'>
                    {booksInShelfErrors.statusText}
                </small>}

                <input type="submit" className="submit" value="البحث"/>
            </form>
        </div>
    )
}

export default BooksInShelf;
