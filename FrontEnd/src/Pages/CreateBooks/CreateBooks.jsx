import React from "react";
import "./CreateBooks.scss";
import CreatLibraryEngine from "../Services/Multi/CreateLibraryEngine/CreateLibraryEngine";
import CreateBlockEngine from "../Services/Multi/CreateBlockEngine/CreateBlockEngine";
import CreateShelfEngine from "../Services/Multi/CreateShelfEngine/CreateShelfEngine";
import CreateBookEngine from "../Services/Multi/CreateBookEngine/CreateBookEngine";

let CreateBooks = () => {
    return(
        <div className="create-books">
            <div className="container">
                <CreatLibraryEngine/>
                <div className="services-container">
                    <CreateBlockEngine/>
                    <CreateShelfEngine/>
                </div>
                <CreateBookEngine/>
            </div>
        </div>
    )
}

export default CreateBooks;