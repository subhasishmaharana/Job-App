import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";

const FullStack=props=>{
    const {fullUsers,handleUsers}=props
    const [applicants,setApplicants]=useState(fullUsers)
    
    useEffect(()=>{
        setApplicants(fullUsers)
    },[fullUsers])

    return (
        <div>
            <h2>Full Stack Developers</h2>
            <TableComponent applicants={applicants} handleUsers={handleUsers}/>
        </div>
    )
}

export default FullStack