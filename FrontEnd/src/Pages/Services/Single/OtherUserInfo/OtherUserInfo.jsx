import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { deleteUser } from "../../../../APIs";
import "./OtherUserInfo.scss";

let OtherUserInfo = ({ ocClickForSearchedUsers , ocClickForOtherUserInfo , ocClickForEditOtherUser}) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const the_other_user = JSON.parse(sessionStorage.getItem("the-other-user"));
    let handleSubmitForDelete = async(e) => {
        e.preventDefault()
        try {
            const users = await deleteUser(the_other_user.id , user.token);
            ocClickForOtherUserInfo()
            document.body.classList.toggle("hidden");
            return sessionStorage.removeItem("the-other-user");
        }catch(err){
            return console.log(err);
        }
    }

    return (
        <div className="overlay">
            <div className="other-user-info the-service">
                <div className="header-collection">
                    <div className="service-name">البيانات</div>
                    <Link onClick={()=>{
                        ocClickForOtherUserInfo()
                        ocClickForSearchedUsers()
                        sessionStorage.removeItem("the-other-user")
                    }}>
                        <FontAwesomeIcon icon={faArrowLeft} size="2xl" className="back-icon"/>
                    </Link>
                </div>
                <div className="scroll">
                    <div className="collection">
                        <div className="flex-collection">
                            <p className="first-name">
                                <p className="detail-data">الإسم الأول</p>
                                {the_other_user.first_name || "لايوجد"}
                            </p>
                            <p className="last-name">
                                <p className="detail-data">الإسم الأخير</p>
                                {the_other_user.last_name || "لايوجد"}
                            </p>
                        </div>
                        <p className="email">
                            <p className="detail-data">البريد الألكتروني</p>
                            {the_other_user.email || "لايوجد"}
                        </p>
                        <p className="phone-number">
                            <p className="detail-data">رقم الهاتف</p>
                            {the_other_user.phone_number || "لايوجد"}
                        </p>
                        <p className="the-role">
                            <p className="detail-data">دور الخادم</p>
                            {the_other_user.job || "لايوجد"}
                        </p>
                        <p className="admin">
                            <p className="detail-data">هل هو مدير</p>
                            {the_other_user.admin_flag == true ? "نعم" : "لا" || "لايوجد"}
                        </p>
                        <p className="status">
                            <p className="detail-data">حاله المستخدم</p>
                            {the_other_user.user_status == "AVILABLE" ? "متاح" : "محذوف" || "لايوجد"}
                        </p>
                    </div>
                </div>
                <div className="collection">
                    <div className="flex-collection">
                        {(user.job == "owner" || user.job == "أمين المكتبه" ||  user.job == "نائب أمين المكتبه") ? <button className="edit-user-info" onClick={()=>{ocClickForEditOtherUser(),ocClickForOtherUserInfo()}}>تعديل البيانات</button> : null}
                        {(the_other_user.user_status == "AVILABLE" && user.job == "owner" || user.job == "أمين المكتبه" ||  user.job == "نائب أمين المكتبه") ? <button className="delete" onClick={handleSubmitForDelete}>حذف المستخدم</button> : null}
                    </div>
                    {the_other_user.user_status == "NOT AVILABLE" && <div className="msg">هذا المستخدم محذوف عدل عليه لتستعيده</div>}
                </div>
            </div>
        </div>
    )
}

export default OtherUserInfo;