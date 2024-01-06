import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './styles/app.css';
import { createContext } from 'react';
export const context=createContext({isAuthenticated:false});

const Appwrapper=()=>{

const [isAuthenticated,setisAuthenticated]=useState(false);
const [loading ,setloading]=useState(false);
const [user ,setuser]=useState({});

return (
  <context.Provider
   value={{
    isAuthenticated,
  setisAuthenticated,
  loading ,setloading,
  user ,setuser}}>
  <App />
  </context.Provider>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
 <Appwrapper/>
  </React.StrictMode>
);


