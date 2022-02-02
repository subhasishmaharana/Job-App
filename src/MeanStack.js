import axios from "axios";
import React, { useEffect, useState } from "react";
import TableComponent from "./TableComponent";

const MeanStack=props=>{
    const {meanUsers,handleUsers}=props
    const [applicants,setApplicants]=useState(meanUsers)
    
    useEffect(()=>{
        setApplicants(meanUsers)
    },[meanUsers])

    return (
        <div>
            <h2>Mean Stack Developers</h2>
            <TableComponent applicants={applicants} handleUsers={handleUsers}/>
        </div>
    )
}

export default MeanStack