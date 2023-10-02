import React from 'react'

function CardComponent({data={},handleDelete,handleEdit,handleSaveEdit,isEditing,index,status,setStatus}) {
  
  const handleStatusChange=(e)=>{
    setStatus(e.target.value);
  }
  return (
   
<div className="card">
 
    <p>Name : {data.name}</p>
    <p>Description : {data.desc}</p>
    <p>Status <span>
      <select value={status} onChange={handleStatusChange} style={{background:status.toLowerCase()==='completed'?'rgb(19,173,137)':'rgb(247,141,138)' ,color:'white' ,outline:'none',width: '150px',
            height: '30px',
            border: 'none'}}>
        <option value="NotCompleted" >NotCompleted</option>
        <option value='Completed' >Completed</option>
        </select></span></p>
    <div className='button'>
      {isEditing?(
        <>
        <button className='save' onClick={()=>handleSaveEdit(index)}>Save</button>
        <button className='cancel' onClick={()=>handleEdit(null)}>Cancel</button>
        </>
      ):(
        <>
    <button className='edit'onClick={()=>handleEdit(index)}>Edit </button>
    <button className='delete'onClick={()=>handleDelete(index)}>Delete</button>
    </>
  )}
    </div>
 
</div>
  )
}

export default CardComponent