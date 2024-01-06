import React, { useContext } from 'react'
import { context } from '..'

import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../styles/profile.css';

function Profile() {
  const {user,isAuthenticated}=useContext(context)
 
 
  if(!isAuthenticated)return (toast.error("Login First"),<Navigate to={"/login"} />)
 

  return ( 
    <div className='profile-container'>
   
  <div className='profile'>
  <h1>Welcome to ToDo/\pp 🎉</h1>
  <br/>
  <h2>Username☃️: {user?.name}</h2>
  <br/>
  <h3>Email: {user?.email}</h3>
    </div>
    </div>


  )


}

export default Profile