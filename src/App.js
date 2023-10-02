import { useState } from 'react';
import './App.css';

import InputComponent from './Components/InputComponent';
import CardComponent from './Components/CardComponent';

function App() {
  const[name ,setName]=useState([]);
  const[desc,setDesc]=useState([]);
  const[todo,setTodo]=useState([]);
  const[editIndex,setEditIndex]=useState(null);
  const[status,setStatus]=useState([]);
  const[filterOption,setFilterOption]=useState('All');

  function handleChangeOfName(e){
    setName(e.target.value)
  }
  function handleChangeOfDesc(e){
    setDesc(e.target.value)
  }
  function handleClick(){
    const newTodo={name,desc};
    setTodo([...todo,newTodo]);
    setStatus([...status,'NotCompleted']);
    setName('');
    setDesc("");
  }
  function handleDelete(index){
    const updatedTodo=todo.filter((d,i)=>i!==index);
    setTodo(updatedTodo);

  }
  function handleEdit(index){
    setEditIndex(index);
    const itemToEdit=todo[index];
    setName(itemToEdit.name);
    setDesc(itemToEdit.desc);
    
  }
  function handleSaveEdit(index){
    const updatedTodo=[...todo];
    updatedTodo[index]={name,desc};
    setTodo(updatedTodo);
    setEditIndex(null);
    setName('');
    setDesc('');
  }
  return (
    <div className="App">
     <div className='container text-center'>
     <h3>My todo</h3>
      <InputComponent placeholder='Todo Name'value={name} onchange={handleChangeOfName}/>
      <InputComponent placeholder='Todo Description'value={desc}  onchange={handleChangeOfDesc}/>
      <button className="addbutton"onClick={handleClick}>Add Todo</button> 
    </div>
    <div className='mx-3 d-flex justify-content-between'>
      <p><b>My Todos</b></p>
      <p>Status filter : <span>
        <select style={{background:'rgb(247,141,138)',color:'white',outline:'none',border:'none'}}
        value={filterOption}
        onChange={(e)=>setFilterOption(e.target.value)}>
          <option value='All'>All</option>
          <option value='Completed'>Completed</option>
          <option value='NotCompleted'>NotCompleted</option>
          </select></span></p>
    </div>
    <div className='container-fluid'>
      { todo.map((d,i)=>(
          (filterOption==='All')||
          (filterOption==='Completed'&& status[i]==='Completed')||
          (filterOption==='NotCompleted' && status[i]==='NotCompleted'))?(
         <CardComponent keys={i} data={d} handleDelete={handleDelete} index={i} handleEdit={handleEdit}
         handleSaveEdit={handleSaveEdit}
         isEditing={i===editIndex}
         status={status[i]}
         setStatus={(newStatus)=>{
          const updatedStatus=[...status];
          updatedStatus[i]=newStatus;
          setStatus(updatedStatus);
         }}
         />
         ) :null
       )} 
    
      
      </div>
    </div>
      
    
  );
}

export default App;