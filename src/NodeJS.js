import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";

const NodeJS=props=>{
    const {nodeUsers,handleUsers}=props
    const [applicants,setApplicants]=useState(nodeUsers)
    
    useEffect(()=>{
        setApplicants(nodeUsers)
    },[nodeUsers])

    return (
        <div>
            <h2>Node JS Developers</h2>
            <TableComponent applicants={applicants} handleUsers={handleUsers}/>
        </div>
    )
}

export default NodeJS
