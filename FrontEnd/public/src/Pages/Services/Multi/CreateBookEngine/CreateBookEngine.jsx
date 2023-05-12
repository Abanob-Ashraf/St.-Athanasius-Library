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
                        <div className="book-name">
                            <p>إسم الكتاب</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="text" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.book_name} 
                            name="book_name"/>
                        </div>
                        <div className="author-name">
                            <p>إسم المؤلف</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="text" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.author}
                                name="author"/>
                        </div>
                        <div className="publisher-name">
                            <p>إسم الناشر</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="text" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.publisher} 
                            name="publisher"/>
                        </div>
                        <div  className="series-name">
                            <p>إسم السلسله</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="text" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.name_of_series} 
                            name="name_of_series"/>
                        </div>
                        <div className="topic">
                            <p>التصنيف</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="text" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.topic} 
                            name="topic"/>
                        </div>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        <div  className="copies-number">
                            <p>عدد النسخ</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="number" 
                            min="1" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.number_of_copies} 
                            name="number_of_copies"/>
                        </div>
                        <div className="parts-number">
                            <p>عدد الأجزاء</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="number" 
                            min="1" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.number_of_parts} 
                            name="number_of_parts"/>
                        </div>
                        <div className="pages-number">
                            <p>عدد الصفح</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="number" 
                            min="1" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.number_of_pages} 
                            name="number_of_pages"/>
                        </div>
                        <div className="publish-date" >
                            <p>تاريخ النشر</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="date" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.publish_date} 
                            name="publish_date"/>
                        </div>
                        <div  className="entry-date">
                            <p>تاريخ الدخول</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="date" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.entry_date} 
                            name="entry_date"/>
                        </div>
                        <div  className="book-number">
                            <p>رقم الكتاب في الرف</p>
                            <input 
                            placeholder="أكتب هنا"
                            type="number" 
                            min="1" 
                            onChange={handleChange} 
                            value={createBookEngineFeatch.book_number_in_shelf} 
                            name="book_number_in_shelf"/>
                        </div>
                    </div>
                </div>
                <div className="collection">
                    <div  className="conclusion">
                        <p>الموضوع</p>
                        <textarea 
                        placeholder="أكتب هنا"
                        onChange={handleChange} 
                        value={createBookEngineFeatch.conclusion} 
                        name="conclusion"/>
                    </div>
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