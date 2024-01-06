import React from 'react'
import '../styles/todoitem.css';
function ToDoItems({title,description,isCompleted,updateHandler, deleteHandler,id,createdAt}) {
  return (
    <div className='home2'>
    <div className='todoitems'>

<div className='left'>
    <h4>{title}</h4>
    <p>{description}</p>
    <p className='created'>📅:{(createdAt.split('T')[0]).split('-').reverse().join('-')}</p>
</div>
<div className='right'>
<input onChange={()=>updateHandler(id)} type='checkbox' checked={isCompleted} />
<button onClick={()=>deleteHandler(id)} className='btn'>Delete</button>       
</div>
    </div>
    </div>
  )
}

export default ToDoItems