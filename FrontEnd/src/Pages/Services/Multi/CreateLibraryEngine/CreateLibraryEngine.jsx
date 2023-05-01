import React , {useState} from "react";
import { createLibraryEngine } from "../../../../APIs";
import "./CreateLibraryEngine.scss";

let CreatLibraryEngine = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [createLibraryEngineFetch , setCreateLibraryEngineFetch] = useState({ library_name:"" })
    const [createLibraryEngineErrors , setCreateLibraryEngineErrors] = useState()
    const [createLibraryEngineSuccess , setCreateLibraryEngineSuccess] = useState()
    let handleChange = (e) => {
        const { name, value } = e.target
        setCreateLibraryEngineFetch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const create = await createLibraryEngine(createLibraryEngineFetch , user.token);
            setCreateLibraryEngineSuccess(create);
            return setTimeout(() => setCreateLibraryEngineSuccess(null), 5000);
        }catch(err){
            setCreateLibraryEngineErrors(err);
            return setTimeout(() => setCreateLibraryEngineErrors(null), 5000);
        }
    }
    return (
        <div className="create-library-engine the-service">
            <div className="service-name">إنشاء مكتبه</div>
            <form action="" method="POST" onSubmit={handleSubmit} className="create-library-form">
                <div className="collection">
                    <input 
                    type="text" 
                    placeholder="إسم المكتبه" 
                    required 
                    name="library_name" 
                    onChange={handleChange} 
                    value={createLibraryEngineFetch.library_name} 
                    className="library-name"/>
                </div>

                {createLibraryEngineSuccess &&
                 <small className='note'>
                    {createLibraryEngineSuccess == "library created correctly" ? "تم الإنشاء" : null}
                </small>}

                {createLibraryEngineErrors &&
                 <small className='note'>
                    {createLibraryEngineErrors.statusText == "this library already existe" ? "توجد بالفعل" : null}
                </small>}
                
                <input type="submit" className="submit" value="إنشاء"/>
            </form>
            <small className="note"></small>
        </div>
    )
}

export default CreatLibraryEngine;