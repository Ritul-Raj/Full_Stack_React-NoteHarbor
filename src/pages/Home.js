import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import '../styles/home.css';
import ToDoItems from '../Components/ToDoItems';
import { context } from '..';
import { Navigate } from 'react-router-dom';
function Home() {
const [title,setTitle]=useState("") 

const [description,setDescription]=useState("")
const [task,setTask]=useState([])
const [useeffctRefresh,setuseeffectRefresh]=useState(false);
const {isAuthenticated}=useContext(context);
const updateHandler= async(id)=>{
  try { 
    // const {data}=await axios.put(`https://nodejstodoapp-vkru.onrender.com/api/v1/task/${id}`,
    const {data}=await axios.put(`http://localhost:4000/api/v1/task/${id}`,
{},
{
withCredentials:true
}
)
toast.success(data.message);
setuseeffectRefresh(!useeffctRefresh)

} 
catch (error) {
toast.error(error.response.data.message);

}
}
const deleteHandler=async(id)=>{
  try { 
    // const {data}=await axios.delete(`https://nodejstodoapp-vkru.onrender.com/api/v1/task/${id}`,
    const {data}=await axios.delete(`http://localhost:4000/api/v1/task/${id}`,
{
withCredentials:true
}
)
toast.success(data.message);
setuseeffectRefresh(!useeffctRefresh)

} 
catch (error) {
toast.error(error.response.data.message);

}
}

const submitHandler=async(event)=>{
 
  event.preventDefault();

try {
  const {data}=await axios.post(
    // "https://nodejstodoapp-vkru.onrender.com/api/v1/task/new"
    "http://localhost:4000/api/v1/task/new"
    ,{
    title,
    description
  },{

    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    },
   
})
setTitle("");
setDescription("");
  toast.success(data.message);
  setuseeffectRefresh(!useeffctRefresh)

} catch (error) {
  
  toast.error(error.response.data.message);
}
}

useEffect(()=>{
axios.get(
  // "https://nodejstodoapp-vkru.onrender.com/api/v1/task/my"
   "http://localhost:4000/api/v1/task/my"
  ,{
  withCredentials:true
}).then((res)=>{
 setTask(res.data.tasks)
console.log(res.data.tasks)
}).catch((error)=>{
  toast.error(error.response.data.message)
})
},[useeffctRefresh])

if(!isAuthenticated)return (<Navigate to={"/login"} />)

  return (
    <>
    <div className='home1'>
    <div className='container'>
<section>
<form onSubmit={submitHandler}>
<input type='text' value={title} onChange={(event)=>setTitle(event.target.value)} placeholder='Add @ Title'></input>
<input type='text' value={description} onChange={(event)=>setDescription(event.target.value)} placeholder='Add Description'></input>
<button type='submit'>➕</button>
</form>
</section>
    </div>
    </div>
  <div>
{
  task?.map((i)=>(
   
  <ToDoItems key={i._id} title={i.title} description={i.description} isCompleted={i.isCompleted} updateHandler={updateHandler} deleteHandler={deleteHandler} id={i._id} createdAt={i.createdAt} />
))
}
  </div>
   
    </>
  )
}

export default Home

