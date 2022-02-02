import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";

const FrontEnd=props=>{
    const {frontUsers,handleUsers}=props
    const [applicants,setApplicants]=useState(frontUsers)
    
    useEffect(()=>{
        setApplicants(frontUsers)
    },[frontUsers])

    return (
        <div>
            <h2>Front-End Developers</h2>
            <TableComponent applicants={applicants} handleUsers={handleUsers}/>
        </div>
    )
}

export default FrontEnd
