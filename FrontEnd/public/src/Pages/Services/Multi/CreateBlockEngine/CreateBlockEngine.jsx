import React , {useEffect, useState} from "react";
import { allLibraries , createBlockEngine } from "../../../../APIs";
import "./CreateBlockEngine.scss";

let CreateBlockEngine = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [libraryFetch ,setLibraryFetch] = useState([]);
    const [createBlockEngineFetch , setCreateBlockEngineFetch] = useState({ library_id:"" , block_number:"" , block_name:"" || null})
    const [createBlockEngineErrors , setCreateBlockEngineErrors] = useState()
    const [createBlockEngineSuccess , setCreateBlockEngineSuccess] = useState()
    let handleChange = (e) => {
        const { name, value } = e.target
        setCreateBlockEngineFetch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const create = await createBlockEngine(createBlockEngineFetch , user.token);
            setCreateBlockEngineSuccess(create);
            return setTimeout(() => setCreateBlockEngineSuccess(null), 5000);
        }catch(err){
            setCreateBlockEngineErrors(err);
            return setTimeout(() => setCreateBlockEngineErrors(null), 5000);
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

    return (
        <div className="create-block-engine the-service">
            <div className="service-name">إنشاء وحده</div>
            <form action="" method="POST" onSubmit={handleSubmit} className="create-block-form">
                <div className="collection">
                    <select 
                    name="library_id" 
                    onClick={handleLibrary} 
                    onChange={handleChange} 
                    value={createBlockEngineFetch.library_id} 
                    className="select-library">

                        <option>إختر المكتبه</option>
                        {libraryFetch != null ? libraryFetch.map((e) => <option value={e.id}>{e.library_name}</option>) : null}

                    </select>

                    <div className="flex-collection">

                        <input 
                        type="number" 
                        required placeholder="رقم الوحده" 
                        name="block_number" 
                        onChange={handleChange} 
                        value={createBlockEngineFetch.block_number} 
                        className="block-number" 
                        min={1}/>

                        <input 
                        type="text" 
                        placeholder="إسم الوحده" 
                        name="block_name" 
                        onChange={handleChange} 
                        value={createBlockEngineFetch.block_name} 
                        className="block-name"/>

                    </div>
                </div>
                
                {createBlockEngineSuccess &&
                 <small className='note'>
                    {createBlockEngineSuccess == "block created correctly" ? "تم الإنشاء" : null}
                </small>}

                {createBlockEngineErrors &&
                 <small className='note'>
                    {createBlockEngineErrors.statusText == "this block in this library already existe" ||
                     createBlockEngineErrors.statusText == "this block already existe" ? "توجد بالفعل" : null}
                </small>} 

                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreateBlockEngine;