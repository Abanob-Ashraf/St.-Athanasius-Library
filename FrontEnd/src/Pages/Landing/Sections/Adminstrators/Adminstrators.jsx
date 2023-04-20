import React from "react";
import Adminstrator from "./Components/Adminstrator";
import adminstratorsData from "./Components/Data";
import "./Adminstrators.scss";

let Adminstrators = () => {
    let adminstratorMaping = adminstratorsData.map((e) => {
        return <Adminstrator role={e.role} name={e.name} img={e.img} phone={e.phone} />
    })

    return (
        <div className="adminstrators" id="adminstrators">
            <h3 className="title">المسؤلين</h3>
            <div className="container">
                <div className="wrapper">
                    <div className="scroll">
                        {adminstratorMaping}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminstrators;
