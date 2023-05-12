import React , { useState } from "react";
import { searchUserEngine , allUsers , unavilableUsers } from "../../../../APIs";
import "./UserSearchEngine.scss"

let UserSearchEngine = ({ ocClickForSearchedUsers }) => {
    const [userSearchEngineFeatch , setUserSearchEngineFeatch] = useState({ key: "", value:"" })
    const [userSearchEngineErrors , setUserSearchEngineErrors] = useState(null)
    const [allUsersErrors , setAllUsersErrors] = useState(null)
    const [unAvilableUsersErrors , setUnAvilableUsersErrors] = useState(null)
    const user = JSON.parse(sessionStorage.getItem("user"));

    let handleChange = (e) => {
        const { name, value } = e.target
        setUserSearchEngineFeatch(obj => ({
            ...obj,
            [name]: value
        }))
    }
    
    let handleSubmitForSearch = async(e) => {
        e.preventDefault()
        try {
            const users = await searchUserEngine(userSearchEngineFeatch.key , userSearchEngineFeatch.value , user.token);
            sessionStorage.setItem("other-users",JSON.stringify(users));
            document.body.classList.toggle("hidden");
            return ocClickForSearchedUsers();
        }catch(err){
            setUserSearchEngineErrors(err);
            return setTimeout(() => setUserSearchEngineErrors(null), 5000);
        }
    }
    
    let handleSubmitForAllUsers = async(e) => {
        e.preventDefault()
        try {
            const users = await allUsers(user.token);
            sessionStorage.setItem("other-users",JSON.stringify(users));
            document.body.classList.toggle("hidden")
            return ocClickForSearchedUsers()
        }catch(err){
            setAllUsersErrors(err);
            return setTimeout(() => setAllUsersErrors(null), 5000);
        }
    }
    
    let handleSubmitForUnAvilableUsers = async(e) => {
        e.preventDefault()
        try {
            const users = await unavilableUsers(user.token);
            sessionStorage.setItem("other-users",JSON.stringify(users));
            document.body.classList.toggle("hidden")
            return ocClickForSearchedUsers()
        }catch(err){
            setUnAvilableUsersErrors(err);
            return setTimeout(() => setUnAvilableUsersErrors(null), 5000);
        }
    }

    return (
        <div className="user-search-engine the-service">
            <div className="service-name">البحث عن مستخدم</div>
            <form action="" method='POST' onSubmit={handleSubmitForSearch} className="user-search-form">
                <div className="collection">
                    <input type="search" 
                    required 
                    className="search"
                    name='value'
                    onChange={handleChange}
                    value={userSearchEngineFeatch.value}
                    placeholder="البحث عن المستخدم بحسب"/>

                    <select className="key" name='key' onChange={handleChange} value={userSearchEngineFeatch.key}>
                        <option>--إختار طريقه البحث--</option>
                        <option value="first_name">الإسم الأول</option>
                        <option value="last_name">الإسم الأخير</option>
                        <option value="full_name">الإسم الكامل</option>
                        <option value="email">البريد الألكتروني</option>
                    </select>
                </div>
                {userSearchEngineErrors && <small className='note'>{userSearchEngineErrors.statusText}</small>}
                {allUsersErrors && <small className='note'>{allUsersErrors.statusText}</small>}
                {unAvilableUsersErrors && <small className='note'>{unAvilableUsersErrors.statusText}</small>}
                <input type="submit" className="submit" value="البحث"/>
            </form>
            <div className="flex-collection">
                    <button onClick={handleSubmitForAllUsers}>جميع المستخدمين</button>
                    <button onClick={handleSubmitForUnAvilableUsers}>المستخدمين المحذوفين</button>
            </div>
        </div>
    )
}

export default UserSearchEngine;