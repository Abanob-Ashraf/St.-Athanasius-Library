import React from "react";
import "./Profile.scss";
import UserInfo from "../Services/Multi/UserInfo/UserInfo";
import UserSearchEngine from "../Services/Multi/UserSearchEngine/UserSearchEngine";
import CreateUserEngine from "../Services/Multi/CreateUserEngine/CreateUserEngine";
import BackUp from "../Services/Multi/Backup/Backup";
import EditUser from "../Services/Single/EditUser/EditUser";
import ChangePassword from "../Services/Single/ChangePassword/ChangePassword";
import OtherUserInfo from "../Services/Single/OtherUserInfo/OtherUserInfo";

let Profile = () => {
    return(
        <div className="profile">
            <div className="container">
                <UserInfo/>
                <UserSearchEngine/>
                <CreateUserEngine/>
                <BackUp/>
                {/* <EditUser/> */}
                {/* <ChangePassword/> */}
                {/* <OtherUserInfo/> */}
            </div>
        </div>
    )
}

export default Profile;