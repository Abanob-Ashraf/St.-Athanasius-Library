import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SearchedUsers.scss';

let SearchedUsers = ({ ocClickForSearchedUsers , ocClickForOtherUserInfo }) => {
    const users = JSON.parse(sessionStorage.getItem("other-users"));
    let usersMaping = users.map((e)=>{
        return (
            <tr onClick={()=>{
                ocClickForSearchedUsers();
                ocClickForOtherUserInfo();
                sessionStorage.setItem("the-other-user" , JSON.stringify({...e}))
            }}>
                <td>{e.full_name || "لايوجد"}</td>
                <td>{e.email || "لايوجد"}</td>
                <td>{e.user_status == "AVILABLE" ? "متاح" : "محذوف" || "لايوجد"}</td>
                <td>{e.job || "لايوجد"}</td>
            </tr>
        )
    })
  return (
    <div className="overlay">
        <div className="searched-users the-service">
            <div className="header-collection">
                <div className="service-name">المستخدمين</div>
                <Link onClick={() =>{
                    ocClickForSearchedUsers()
                    document.body.classList.toggle("hidden");
                    sessionStorage.removeItem("other-users")
                }}>
                    <FontAwesomeIcon icon={faClose} size="2xl" className="close-icon"/>
                </Link>
            </div>
            <div className="show-searched-users">
                <table className="users">
                    <tr>
                        <th>إسم الكتاب</th>
                        <th>البريد الألكتروني</th>
                        <th>حاله المستخدم</th>
                        <th>دور الخادم</th>
                    </tr>
                    {usersMaping}
                </table>
            </div>
        </div>
    </div>
  )
}

export default SearchedUsers;