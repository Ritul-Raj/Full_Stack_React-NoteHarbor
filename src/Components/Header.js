
import React, { useContext } from 'react'
import '../styles/header.css';
import { Link } from 'react-router-dom'
import { context } from '../index';
import axios from 'axios';
import toast from 'react-hot-toast';

function Header() {

const {isAuthenticated,setisAuthenticated,loading ,setloading}=useContext(context);

const logoutHandler=async(event)=>{ 

setloading(true);

  try {
      await axios.get("https://nodejstodoapp-vkru.onrender.com/api/v1/user/logout",
{
  
  withCredentials:true
}
)
toast.success("Logged Out Successfully");
setisAuthenticated(false);
setloading(false);

  } 
  catch (error) {
 toast.error(error.response.data.message);
 setisAuthenticated(true)
 setloading(false);
  }
  
}

  return (
    <nav className='header'>
    <div className='logo'>
           NoteHarbor🖊️
    </div>
   <article>
   <Link  className='link'  to={"/"}>💡Notes</Link>
   <Link className='link' to={"/profile"}>Profile</Link>
   {isAuthenticated ? ( <button disabled={loading} onClick={logoutHandler}>Logout</button>) :
       (<Link  className='link'  to={"/login"}>Login</Link>)}
   </article>
    </nav>
  )
}

export default Header