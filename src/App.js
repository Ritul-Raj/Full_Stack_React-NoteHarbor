

import React, { useContext, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

import Header from './Components/Header';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { context } from '.';


function App() {
const {setuser,setisAuthenticated}=useContext(context)
 useEffect(()=>{
  axios.get("https://nodejstodoapp-vkru.onrender.com/api/v1/user/my",{
    withCredentials:true
  }).then(res=>{
    setuser(res.data.user);
    setisAuthenticated(true);
  
  }).catch((Error)=>{
    setuser({});
    setisAuthenticated(false);
    
  })
    
 },[])




  return (
<BrowserRouter>
<Header/> 
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/register' element={<Register/>}/> 
</Routes>
<Toaster/>
</BrowserRouter>
  )
}

export default App
