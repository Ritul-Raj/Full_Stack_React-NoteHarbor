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
  <h1>{user?.name}🎉</h1>
  <h3>🎃{user?.email}</h3>
    </div>
    </div>
  )

}

export default Profile