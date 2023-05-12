import React, { useState } from "react";
import "./Profile.scss";
import UserInfo from "../Services/Multi/UserInfo/UserInfo";
import UserSearchEngine from "../Services/Multi/UserSearchEngine/UserSearchEngine";
import CreateUserEngine from "../Services/Multi/CreateUserEngine/CreateUserEngine";
import BackUp from "../Services/Multi/Backup/Backup";
import ChangePassword from "../Services/Single/ChangePassword/ChangePassword";
import SearchedUsers from "../Services/Single/SearchedUsers/SearchedUsers";
import OtherUserInfo from "../Services/Single/OtherUserInfo/OtherUserInfo";
import EditOtherUser from "../Services/Single/EditOtherUser/EditOtherUser";
import EditUser from "../Services/Single/EditUser/EditUser";

let Profile = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [onClickForEditUser , setOnClickForEditUser] = useState(false);
    const [onClickForChangePassword , setOnClickForChangePassword] = useState(false);
    const [ocClickForSearchedUsers , setOcClickForSearchedUsers] = useState(false);
    const [ocClickForOtherUserInfo , setOcClickForOtherUserInfo] = useState(false);
    const [ocClickForEditOtherUser , setOcClickForEditOtherUser] = useState(false);
    let handleOnClickForEditUser = () => {
        document.body.classList.toggle("hidden");
        setOnClickForEditUser(!onClickForEditUser)
    }
    let handleOnClickForChangePassword = () => {
        document.body.classList.toggle("hidden");
        setOnClickForChangePassword(!onClickForChangePassword);
    }
    let handleOcClickForSearchedUsers = () => {
        setOcClickForSearchedUsers(!ocClickForSearchedUsers);
    }
    let handleOcClickForOtherUserInfo = () => {
        setOcClickForOtherUserInfo(!ocClickForOtherUserInfo);
    }
    let handleOcClickForEditOtherUser = () => {
        setOcClickForEditOtherUser(!ocClickForEditOtherUser);
    }
    return(
        <div className="profile">
            <div className="container">
                <UserInfo onClickForEditUser={handleOnClickForEditUser} onClickForChangePassword={handleOnClickForChangePassword}/>
                {user.admin_flag == true ? <UserSearchEngine ocClickForSearchedUsers={handleOcClickForSearchedUsers}/> : null}
                {user.admin_flag == true ? <CreateUserEngine/> : null}
                {user.admin_flag == true && user.job == "owner" ? <BackUp/> : null}
                {onClickForEditUser && <EditUser onClickForEditUser={handleOnClickForEditUser}/>}
                {onClickForChangePassword && <ChangePassword onClickForChangePassword={handleOnClickForChangePassword}/>}
                {ocClickForSearchedUsers && <SearchedUsers ocClickForSearchedUsers={handleOcClickForSearchedUsers} ocClickForOtherUserInfo={handleOcClickForOtherUserInfo}/>}
                {ocClickForOtherUserInfo && <OtherUserInfo ocClickForSearchedUsers={handleOcClickForSearchedUsers} ocClickForOtherUserInfo={handleOcClickForOtherUserInfo} ocClickForEditOtherUser={handleOcClickForEditOtherUser}/>}
                {ocClickForEditOtherUser && <EditOtherUser ocClickForEditOtherUser={handleOcClickForEditOtherUser}/>}
            </div>
        </div>
    )
}

export default Profile;