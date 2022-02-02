import React,{useState} from "react";
import validator from 'validator';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const FormComponent=props=>{
    // const [id,setId]=useState(uuidv4())
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [skills, setSkills] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [experience, setExperience] = useState('')
    const [showMessage,setShowMessage]= useState(false)
    const [formErrors,setFormErrors]= useState({name:'name cannot be blank',email:'email cannot be blank'})

    

    const msgFocus=()=>{
        setShowMessage(true)
    }

    const msgBlur=()=>{
        setShowMessage(false)
    }

    const errors={}

    const runValidations=()=>{
        if(name.trim().length===0){
            errors.name='name cannot be blank'
        }
        if(email.trim().length===0){
            errors.email='email cannot be blank'
        }else if(!validator.isEmail(email)){
            errors.email='invalid email format'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length===0){
            setFormErrors({})
            const formData = {
                // id: id,
                name: name,
                email: email,
                phone: phone,
                jobTitle: jobTitle,
                experience: experience,
                skills: skills
            }
            axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)
                .then((response)=>{
                    const result=response.data
                    alert('successfully created')
                    setName('')
                    // setId(uuidv4())
                    setEmail('')
                    setPhone('')
                    setSkills('')
                    setExperience('')
                    setJobTitle('')
                    console.log('form data', result)
                })
                .catch((err)=>{
                    alert(err.message)
                })
            
        }else{
            setFormErrors(errors)
        }
        
    }

    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==='name'){
            setName(e.target.value)
        }else if(attr==='email'){
            setEmail(e.target.value)
        }else if(attr==='skills'){
            setSkills(e.target.value)
        }else if(attr==='jobTitle'){
            setJobTitle(e.target.value)
        }else if(attr==='phone'){
            setPhone(e.target.value)
        }else if(attr==='experience'){
            setExperience(e.target.value)
        }
    }

    return (
        <div>
            <h1>Job Application</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label  htmlFor="exampleInputName" className="form-label">Full Name : </label>
                <input type="text" value={name} name='name' onChange={handleChange} 
                 className="form-control" id="exampleInputName"/> 
                {name.length===0 && <span>{formErrors.name}</span>}
                <br />
                </div>
                

                <div className="mb-3">
                <label  htmlFor="exampleInputEmail" className="form-label">Email Address : </label>
                <input type="text" value={email} name='email' onChange={handleChange} className="form-control" id="exampleInputEmail"/> 
                {email.length===0 && <span>{formErrors.email}</span>}
                <br />
                </div>
                

                <div className="mb-3">
                <label  htmlFor="exampleInputPhone" className="form-label">Contact number : </label>
                <input type="text" value={phone} name='phone' onChange={handleChange} placeholder="+91 1234567890" className="form-control" id="exampleInputPhone"/><br/>
                </div>
                

                <div className="mb-3">
                <label  htmlFor="exampleInputJob" className="form-label"> Applying For Job : </label>
                <select value={jobTitle} name='jobTitle' onChange={handleChange} className="form-control" id="exampleInputJob">
                    <option value=""> select </option>
                    <option value="Front-End Developer"> Front-End Developer</option>
                    <option value="Node.js Developer"> Node.js Developer</option>
                    <option value="Mean Stack Developer"> Mean Stack Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                </select> <br />
                </div>
                

                <div className="mb-3">
                <label  htmlFor="exampleInputExperience" className="form-label">Experience : </label>
                <input type="text" value={experience} name='experience' onChange={handleChange} placeholder="2 years, 3 months"  className="form-control" id="exampleInputExperience"/><br/>

                </div>
                
                <div className="mb-3">
                <label  htmlFor="exampleInputSkills" className="form-label"> Technical Skills : </label> 
                <textarea value={skills} name='skills' onChange={handleChange} onFocus={msgFocus}
                onBlur={msgBlur} className="form-control" id="exampleInputSkills"></textarea>{showMessage && <span>Enter technical skills</span>}
                <br />
                </div>
               

                <div className="mb-3">
                <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
                
            </form>
        </div>
    )
}

export default FormComponent;