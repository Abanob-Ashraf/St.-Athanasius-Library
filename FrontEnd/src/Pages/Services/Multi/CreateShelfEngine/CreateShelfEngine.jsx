import React , {useEffect, useState} from "react";
import { allLibraries , allBlocks , createShelfEngine } from "../../../../APIs";
import "./CreateShelfEngine.scss";

let CreateShelfEngine = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [libraryFetch ,setLibraryFetch] = useState([]);
    const [blockFetch ,setBlockFetch] = useState([]);
    const [createShelfEngineFetch , setCreateShelfEngineFetch] = useState({ library_id:"" , block_id:"" , shelf_number:"" , shelf_name:"" || null});
    const [createShelfEngineErrors , setCreateShelfEngineErrors] = useState();
    const [createShelfEngineSuccess , setCreateShelfEngineSuccess] = useState()
    let handleChange = (e) => {
        const { name, value } = e.target
        setCreateShelfEngineFetch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const create = await createShelfEngine(createShelfEngineFetch , user.token);
            setCreateShelfEngineSuccess(create);
            return setTimeout(() => setCreateShelfEngineSuccess(null), 5000);
        }catch(err){
            setCreateShelfEngineErrors(err);
            return setTimeout(() => setCreateShelfEngineErrors(null), 5000);
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
            let blocks = await allBlocks(createShelfEngineFetch.library_id);
            return setBlockFetch(blocks)
        }catch(err){
            return setBlockFetch(null);
        }
    }

    return (
        <div className="create-shelf-engine the-service">
            <div className="service-name">إنشاء رف</div>
            <form action="" method="POST" onSubmit={handleSubmit}  className="create-shelf-form">
                <div className="collection">
                    <div className="flex-collection">
                        <select 
                        name="library_id" 
                        onClick={handleLibrary} 
                        onChange={handleChange} 
                        value={createShelfEngineFetch.library_id} 
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
                        value={createShelfEngineFetch.block_id} 
                        className="select-block">

                            <option>إختر الوحده</option>
                            {blockFetch != null ?
                             blockFetch.map((e) => <option value={e.id}>{e.block_number}</option>) 
                            : null}

                        </select>
                    </div>
                    <div className="flex-collection">

                        <input 
                        type="number" 
                        required 
                        placeholder="رقم الرف" 
                        name="shelf_number" 
                        onChange={handleChange} 
                        value={createShelfEngineFetch.shelf_number} 
                        className="shelf-number" 
                        min={1}/>

                        <input 
                        type="text" 
                        placeholder="إسم الرف" 
                        name="shelf_name" 
                        onChange={handleChange} 
                        value={createShelfEngineFetch.shelf_name} 
                        className="shelf-name"/>

                    </div>
                </div>

                {createShelfEngineSuccess &&
                 <small className='note'>
                    {createShelfEngineSuccess == "shelf created correctly" ? "تم الإنشاء" : null}
                </small>}

                {createShelfEngineErrors &&
                 <small className='note'>
                    {createShelfEngineErrors.statusText == "this shelf in this block already existe" ||
                     createShelfEngineErrors.statusText == "this shelf already existe" ? "توجد بالفعل" : null}
                </small>}

                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreateShelfEngine;