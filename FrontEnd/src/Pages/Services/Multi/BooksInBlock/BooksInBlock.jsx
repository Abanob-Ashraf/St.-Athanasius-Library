import React, { useState } from "react";
import { allLibraries , allBlocks , searchBookInBlock } from "../../../../APIs";
import "./BooksInBlock.scss";

let BooksInBlock = ({ onClickForSearchedBooks }) => {
    const [libraryFetch ,setLibraryFetch] = useState([]);
    const [blockFetch ,setBlockFetch] = useState([]);
    const [booksInBlockFetch , setBooksInBlockFetch] = useState({ library_id:"" , block_id:"" });
    const [booksInBlockErrors , setBooksInBlockErrors] = useState();

    let handleChange = (e) => {
        const { name, value } = e.target
        setBooksInBlockFetch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const books = await searchBookInBlock(booksInBlockFetch.library_id , booksInBlockFetch.block_id);
            sessionStorage.setItem("books",JSON.stringify(books));
            document.body.classList.toggle("hidden");
            return onClickForSearchedBooks();
        }catch(err){
            setBooksInBlockErrors(err);
            return setTimeout(() => setBooksInBlockErrors(null), 5000);
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
            let blocks = await allBlocks(booksInBlockFetch.library_id);
            return setBlockFetch(blocks)
        }catch(err){
            return setBlockFetch(null);
        }
    }

    return (
        <div className="books-in-block the-service">
            <div className="service-name">كتب الوحده</div>
            <form action="" method="POST" onSubmit={handleSubmit} className="books-in-block-form">
                <div className="collection">

                    <select 
                    name="library_id" 
                    onClick={handleLibrary} 
                    onChange={handleChange} 
                    value={booksInBlockFetch.library_id} 
                    className="select-library">

                        <option>إختر المكتبه</option>
                        {libraryFetch != null ?
                        libraryFetch.map((e) => <option value={e.id}>{e.library_name}</option>) 
                        : null}

                    </select>

                    <select 
                    name="block_id" 
                    onClick={handleBlock} 
                    onChange={handleChange} 
                    value={booksInBlockFetch.block_id} 
                    className="select-block">

                        <option>إختر الوحده</option>
                        {blockFetch != null ?
                        blockFetch.map((e) => <option value={e.id}>{e.block_number}</option>) 
                        : null}

                    </select>

                </div>
                
                {booksInBlockErrors &&
                 <small className='note'>
                    {booksInBlockErrors.statusText}
                </small>}

                <input type="submit" className="submit" value="البحث"/>
            </form>
        </div>
    )
}

export default BooksInBlock;