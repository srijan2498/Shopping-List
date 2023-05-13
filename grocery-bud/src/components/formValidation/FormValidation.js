import React, { useEffect, useState } from 'react'

const FormValidation = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError]=useState({})
    const [isSubmit, setIsSubmit]=useState(false)
    const validate = () => {
        const obj={}
        if(!userName){
            obj.userName="Username is required"
        }
        if(!email){
            obj.email="Email is required"
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            obj.email="Email should match abcd@gmail.com Pattern"
        }
        if(!password){
            obj.password="Password is required"
        }else if(password.length<8){
            obj.password="Password should be atleast of 8 characters"
        }
        return obj
    }
    useEffect(()=>{
        if(Object.keys(error).length===0 && isSubmit){
            console.log("validated and is success")
            
        }
    },[error])
    const submitHandler=(e)=>{
        e.preventDefault()
        setError(validate())
        setIsSubmit(true)
    }
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <input type="text" name="username" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)} /><br />
                <p style={{color: "red"}}>{error.userName}</p>
                <input type="text" name="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <p style={{ color: "red" }}>{error.email}</p>
                <input type="password" name="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <p style={{ color: "red" }}>{error.password}</p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default FormValidation
