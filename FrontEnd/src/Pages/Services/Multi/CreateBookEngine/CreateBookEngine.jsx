import React , {useState} from "react";
import { allLibraries , allBlocks , allShelfs , createBooksEngine} from "../../../../APIs";
import "./CreateBookEngine.scss";

let CreateBookEngine = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [libraryFetch ,setLibraryFetch] = useState([]);
    const [blockFetch ,setBlockFetch] = useState([]);
    const [shelfFetch ,setShelfFetch] = useState([]);
    const [createBookEngineFeatch , setCreateBookEngineFeatch] = useState({ library_id:"" ,
        block_id:"",
        shelf_id:"",
        book_name:"",
        author:"",
        publisher:"",
        topic:"",
        name_of_series:"",
        number_of_copies:"",
        number_of_parts:"",
        number_of_pages:"",
        book_number_in_shelf:"",
        publish_date:"",
        entry_date:"",
        conclusion:""
    })
    const [createBookEngineFeatchSuccess , setCreateBookEngineFeatchSuccess] = useState(null)
    const [createBookEngineFeatchErrors , setCreateBookEngineFeatchErrors] = useState(null)

    let handleChange = (e) => {
        const { name, value } = e.target
        setCreateBookEngineFeatch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const create = await createBooksEngine(createBookEngineFeatch , user.token);
            setCreateBookEngineFeatchSuccess(create);
            return setTimeout(() => setCreateBookEngineFeatchSuccess(null), 5000);
        }catch(err){
            setCreateBookEngineFeatchErrors(err);
            return setTimeout(() => setCreateBookEngineFeatchErrors(null), 5000);
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
            let blocks = await allBlocks(createBookEngineFeatch.library_id);
            return setBlockFetch(blocks)
        }catch(err){
            return setBlockFetch(null);
        }
    }
    
    let handleShelf = async() => {
        try {
            let shelfs = await allShelfs(createBookEngineFeatch.block_id);
            return setShelfFetch(shelfs)
        }catch(err){
            return setBlockFetch(null);
        }
    }
    
    return (
        <div className="create-book-engine the-service">
            <div className="service-name">إنشاء كتاب</div>
            <form method="POST" action="" onSubmit={handleSubmit} className="create-book-form">
                <div className="collection">
                    <div className="flex-collection">
                        <select 
                        name="library_id" 
                        onClick={handleLibrary} 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.library_id} 
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
                        value={createBookEngineFeatch.block_id} 
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
                        value={createBookEngineFeatch.shelf_id} 
                        className="select-shelf">

                            <option>إختر الرف</option>
                            {shelfFetch != null ?
                             shelfFetch.map((e) => <option value={e.id}>{e.shelf_number}</option>) 
                            : null}

                        </select>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <input type="text"
                        placeholder="إسم الكتاب" 
                        required 
                        name="book_name" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.book_name} 
                        className="book-name"/>

                        <input type="text" 
                        placeholder="إسم المؤلف"
                        required
                        name="author" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.author}  
                        className="author-name"/>

                        <input type="text" 
                        placeholder="إسم الناشر" 
                        required
                        name="publisher" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.publisher} 
                        className="publisher-name"/>

                        <input type="text" 
                        placeholder="إسم السلسله"
                        name="name_of_series" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.name_of_series} 
                        className="series-name"/>

                        <input type="text"  
                        placeholder="تصنيف الكتاب"
                        name="topic" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.topic} 
                        className="topic"/>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <input 
                        type="number" 
                        placeholder="عدد النسخ"
                        required
                        name="number_of_copies" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.number_of_copies} 
                        className="copies-number" 
                        min="1"/>

                        <input 
                        type="number" 
                        placeholder="عدد الأجزاء"
                        required
                        name="number_of_parts" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.number_of_parts} 
                        className="parts-number" 
                        min="1"/>

                        <input 
                        type="number" 
                        placeholder="عدد الصفحات"
                        required
                        name="number_of_pages" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.number_of_pages} 
                        className="pages-number" 
                        min="1"/>

                        <input 
                        type="date" 
                        placeholder="تاريخ النشر"
                        name="publish_date" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.publish_date} 
                        className="publish-date"/>

                        <input 
                        type="date" 
                        placeholder="تاريخ دخول الكتاب"
                        name="entry_date" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.entry_date} 
                        className="entry-date"/>

                        <input 
                        type="number" 
                        placeholder="رقم الكتاب في الرف"
                        required
                        name="book_number_in_shelf" 
                        onChange={handleChange} 
                        value={createBookEngineFeatch.book_number_in_shelf} 
                        className="book-number" 
                        min="1"/>
                    </div>
                </div>
                <div className="collection">
                    <textarea 
                    name="conclusion" 
                    placeholder="موضوع الكتاب" 
                    onChange={handleChange} 
                    value={createBookEngineFeatch.conclusion} 
                    className="conclusion">
                    </textarea>
                </div>

                {createBookEngineFeatchSuccess &&
                 <small className='note'>
                    {createBookEngineFeatchSuccess == "book created correctly" ? "تم الإنشاء الكتاب" : null}
                </small>}

                {createBookEngineFeatchErrors &&
                 <small className='note'>
                    {createBookEngineFeatchErrors.statusText == "Error you have a book in this rank" ?
                     "يوجد كتاب في هذا المكان" : null}
                </small>}

                <input type="submit" className="submit" value="إنشاء"/>
            </form>
        </div>
    )
}

export default CreateBookEngine;