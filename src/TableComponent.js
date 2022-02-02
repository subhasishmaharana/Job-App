import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const TableComponent=props=>{
    const {applicants,handleUsers}=props
    
    const handleDetails=(ele)=>{
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${ele._id}`)
            .then((response)=>{
                const result=response.data
                // console.log(result)
                const MySwal = withReactContent(Swal)
                MySwal.fire({
                    title: <p>{result.name}'s Profile</p>,
                    html:<div>
                            <p>Contact Number:{result.phone}</p>
                            <p>Email:{result.email}</p>
                            <p>Skills:{result.skills}</p>
                            <p>Experience:{result.experience}</p>
                            <p>Status:{result.status}</p>
                        </div>
                })
            })
            .catch((err)=>{
                alert(err.catch)
            })
    }
    const handleShortlist=ele=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${ele._id}`,{status:'shortlisted'})
            .then((res)=>{
                axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
                    .then((response)=>{
                        const result=response.data.map((ele)=>{
                            return ele
                        })
                        handleUsers(result)
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    const handleReject=ele=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${ele._id}`,{status:'rejected'})
            .then((res)=>{
                axios.get('http://dct-application-form.herokuapp.com/users/application-forms')
                    .then((response)=>{
                        const result=response.data.map((ele)=>{
                            return ele
                        })
                        handleUsers(result)
                    })
                    .catch((err)=>{
                        alert(err.message)
                    })
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    return (
        <div>
            <table className='table table-success table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Technical Skills</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th>Update Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((ele)=>{
                        return <tr key={ele._id}>
                            <td>{ele.name}</td>
                            <td>{ele.skill}</td>
                            <td>{ele.createdAt.slice(0,10)}</td>
                            <td><button className="btn btn-primary" onClick={()=>{handleDetails(ele)}}>View Details</button></td>
                            <td><button className="btn btn-success" onClick={()=>{handleShortlist(ele)}} disabled={ele.status==='shortlisted'}>Shortlist</button><button onClick={()=>{handleReject(ele)}} className="btn btn-danger" disabled={ele.status==='rejected'}>Reject</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent