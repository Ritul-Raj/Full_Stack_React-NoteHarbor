import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../styles/login.css';
import axios from "axios"
import toast from "react-hot-toast"
import { context } from '../index';
const Register=()=> {

const [name,setname]=useState("");
const [email,setemail]=useState("");
const [password,setpassword]=useState("");

const {isAuthenticated,setisAuthenticated,loading ,setloading}=useContext(context);

    const submitHandler=async(event)=>{ 
      
        event.preventDefault ();
        setloading(true)
        try {
             const {data}=await axios.post("https://nodejstodoapp-vkru.onrender.com/api/v1/user/register",
    {
    name,email,password
    },
    {
        headers:{
            "Content-Type":"application/json"
        },
        withCredentials:true
    }
    )
     toast.success(data.message);
     setisAuthenticated(true);
     setloading(false)
        } 
        catch (error) {
            toast.error(error.response.data.message);
       setisAuthenticated(false)
       setloading(false)
        }
        
    }
    if(isAuthenticated)return (<Navigate to={"/"} />)

    return (
        <div className='login'>
    <section>
    <h2>Get Started♨️ </h2>
    <form onSubmit={submitHandler}>
    <input type='text' value={name} onChange={(event)=>setname(event.target.value)} placeholder='Name'></input>
    <input type='email' value={email} onChange={(event)=>setemail(event.target.value)} placeholder='Email'></input>
    <input type='password' value={password} onChange={(event)=>setpassword(event.target.value)}  placeholder='Password'></input>
    <button disabled={loading} type='submit'>Sign Up</button>
    <h4>Or</h4>
    <Link className='link' to="/login">Log In</Link>
    </form>
    </section>
        </div>
      )
}

export default Register