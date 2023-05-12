import React from "react";
import { allUsersBackup , allLibrariesBackup , allBlocksBackup , allShelfsBackup , allBooksBackup , allBackup } from "../../../../APIs";
import "./Backup.scss";

let BackUp = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    let handleSubmitForAllUsersData = async(e) => {
        e.preventDefault()
        try {
            const allUsers = await allUsersBackup(user.token);
            return;
        }catch(err){
            console.log(err)
        }
    }
    let handleSubmitForAllLibrariesData = async(e) => {
        e.preventDefault()
        try {
            const allLibraries = await allLibrariesBackup(user.token);
            return;
        }catch(err){
            console.log(err)
        }
    }
    let handleSubmitForAllBlocksData = async(e) => {
        e.preventDefault()
        try {
            const allBlocks = await allBlocksBackup(user.token);
            return;
        }catch(err){
            console.log(err)
        }
    }
    let handleSubmitForAllShelfsData = async(e) => {
        e.preventDefault()
        try {
            const allShelfs = await allShelfsBackup(user.token);
            return;
        }catch(err){
            console.log(err)
        }
    }
    let handleSubmitForAllBooksData = async(e) => {
        e.preventDefault()
        try {
            const allBooks = await allBooksBackup(user.token);
            return;
        }catch(err){
            console.log(err)
        }
    }
    let handleSubmitForAllData = async(e) => {
        e.preventDefault()
        try {
            const allBackUP = await allBackup(user.token);
            return;
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div className="backup the-service">
            <div className="service-name">إستعاده البيانات</div>
                <div className="collection">
                    <div className="flex-collection">
                        <button onClick={handleSubmitForAllUsersData} className="users-data">بيانات المستخدمين</button>
                        <button onClick={handleSubmitForAllLibrariesData} className="libraries-data">بيانات المكتبات</button>
                        <button onClick={handleSubmitForAllBlocksData} className="blocks-data">بيانات الوحدات</button>
                        <button onClick={handleSubmitForAllShelfsData} className="shelfs-data">بيانات الأرفف</button>
                        <button onClick={handleSubmitForAllBooksData} className="books-data">بيانات الكتب</button>
                    </div>
                </div>
                <div className="collection">
                    <button onClick={handleSubmitForAllData} className="all-data">جميع البيانات</button>
                </div>
        </div>
    )
}

export default BackUp;