import React from "react";
import "./CreateBooks.scss";
import CreatLibraryEngine from "../Services/Multi/CreateLibraryEngine/CreateLibraryEngine";
import CreateBlockEngine from "../Services/Multi/CreateBlockEngine/CreateBlockEngine";
import CreateShelfEngine from "../Services/Multi/CreateShelfEngine/CreateShelfEngine";
import CreateBookEngine from "../Services/Multi/CreateBookEngine/CreateBookEngine";

let CreateBooks = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return(
        <div className="create-books">
            <div className="container">
                {user.admin_flag == true && <CreatLibraryEngine/>}
                { user.admin_flag == true && <div className="services-container">
                    <CreateBlockEngine/>
                    <CreateShelfEngine/>
                </div>}
                <CreateBookEngine/>
            </div>
        </div>
    )
}

export default CreateBooks;