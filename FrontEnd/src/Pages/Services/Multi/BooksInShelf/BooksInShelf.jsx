import React from "react";
import { allLibraries , allBlocks , allShelfs } from "../../../../APIs";
import "./BooksInShelf.scss";

let BooksInShelf = () => {
    return (
        <div className="books-in-shelf the-service">
            <div className="service-name">كتب الرف </div>
            <form action="" className="books-in-shelf-form">
                <div className="collection">
                    <select name="select-library" className="select-library">
                        <option>إختر المكتبه</option>
                    </select>
                    <div className="flex-collection">
                        <select name="select-block" className="select-block">
                            <option>إختر الوحده</option>
                        </select>
                        <select name="select-shelf" className="select-shelf">
                            <option>إختر الرف</option>
                        </select>
                    </div>
                </div>
                <input type="submit" className="submit" value="البحث"/>
            </form>
            <small className="note"></small>
            <small className="count"></small>
        </div>
    )
}

export default BooksInShelf;
