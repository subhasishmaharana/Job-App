import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";


const Dashboard=props=>{
    const [users,setUsers]=useState([])
    const handleUsers=people=>{
        setUsers(people)
    }
    useEffect(()=>{
        axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
            .then((response)=>{
                const result=response.data.map((ele)=>{
                    return ele
                })
                setUsers(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])
    const frontUsers=users.filter((ele)=>{
        return ele.jobTitle==='Front-End Developer' 
    })
    const nodeUsers=users.filter((ele)=>{
        return ele.jobTitle==='Node.js Developer' 
    })
    const meanUsers=users.filter((ele)=>{
        return ele.jobTitle==='MEAN Stack Developer' 
    })
    const fullUsers=users.filter((ele)=>{
        return ele.jobTitle==='FULL Stack Developer' 
    })
    return (
        <div className="list-group">
            <h1>Dashboard Home</h1>
            {users.length !== 0 && 
            <NavBar 
                users={users} 
                handleUsers={handleUsers}
                frontUsers={frontUsers}
                nodeUsers={nodeUsers}
                meanUsers={meanUsers}
                fullUsers={fullUsers}
                />
            }
        </div>
    )
}

export default Dashboard