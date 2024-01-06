import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../styles/login.css';
import { context } from '..';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  
  const {isAuthenticated,setisAuthenticated,loading ,setloading}=useContext(context);

  
  const submitHandler=async(event)=>{ 
  
    event.preventDefault();

    setloading(true);
    try { 
         const res=await axios.post("https://nodejstodoapp-vkru.onrender.com/api/v1/user/login",
{
    email,password
},
{
    headers:{
        "Content-Type":"application/json"
    },
    withCredentials:true
}
)
 toast.success(res.data.message);
 setisAuthenticated(true);
 setloading(false);
    } 
    catch (error) {
    toast.error(error.response.data.message);
   setisAuthenticated(false) ;
   setloading(false);
    }
    
}

  if(isAuthenticated)return (<Navigate to={"/"} />)

  return (
    <  div className='login'>
    
<section>
<h2>User Login🐼 </h2>
<form onSubmit={submitHandler}>
<input type='email' value={email} onChange={(event)=>setemail(event.target.value)} placeholder='Email'></input>
<input type='password' value={password} onChange={(event)=>setpassword(event.target.value)}  placeholder='Password'></input>
<button type='submit' disabled={loading} >Log In</button>
<h4>Or</h4>
<Link className='link' to="/register">Sign Up</Link>
</form>
</section>
    </div>
  )
}

export default Login