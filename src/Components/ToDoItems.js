import React from 'react'
import '../styles/todoitem.css';
function ToDoItems({title,description,isCompleted,updateHandler, deleteHandler,id}) {
  return (
    <div className='home2'>
    <div className='todoitems'>

<div className='left'>
    <h4>{title}</h4>
    <p>{description}</p>
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