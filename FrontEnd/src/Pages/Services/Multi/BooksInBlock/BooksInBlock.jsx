import React, { useEffect, useState } from "react";
import { allLibraries , allBlocks } from "../../../../APIs";
import "./BooksInBlock.scss";

let BooksInBlock = () => {
    // const [allBlocksFeatch , setAllBlocksFeatch] = useState({ selectLibrary:"", selectBlock:"" })
    // const [libraryFeatch ,setLibraryFeatch] = useState([])
    // const [blockFeatch ,setBlockFeatch] = useState()

    // let handleChange = (e) => {
    //     const { name, value } = e.target
    //     setAllBlocksFeatch(obj => ({
    //         ...obj,
    //         [name]: value
    //     }))
    // }

    let handlelibraryFeatch = async () => {
        try{
            let librarires = await allLibraries()
            console.log(librarires)
            // return setLibraryFeatch(librarires);
        }catch(err){
            console.log(err)
        }
    }
    handlelibraryFeatch()
    // let librariresMaping = libraryFeatch.map((e) => <option value={e.id}>{e.library_name}</option>)

    // useEffect(() => {
    //     let handBlockFeatch = async () => {
    //         try{
    //             let blocks = await allBlocks(JSON.stringify(allBlocksFeatch.selectLibrary))
    //             let blocksMaping = blocks.map((e) => <option value={e.id}>{e.block_number}</option> )
    //             return setBlockFeatch(blocksMaping);
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     handBlockFeatch()
    // },[])

    return (
        <div className="books-in-block the-service">
            <div className="service-name">كتب الوحده</div>
            <form action="" method="POST"  className="books-in-block-form">
                <div className="collection">
                    <select name="selectLibrary" className="select-library">
                        <option>إختر المكتبه</option>
                        {/* {librariresMaping} */}
                    </select>
                    <select name="selectBlock" className="select-block">
                            <option>إختر الوحده</option>
                            {/* {blockFeatch} */}
                    </select>
                </div>
                <input type="submit" className="submit" value="البحث"/>
            </form>
        </div>
    )
}

export default BooksInBlock;