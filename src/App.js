import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import { add, delete_task, done, update_task } from './action/todoAction';
import { useState , useEffect } from 'react';


function App() {
  const dispatch =useDispatch()
  const tasks = useSelector((state) => state.todoreducer);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [newtitle,SetNewtitle]= useState('')
  const [updatedtitle,SetUpdatedtitle]= useState('')

  const [toggleUpdate,setToggleUpdate]=useState(false)
  const [id,setId]=useState('')

  const handleAdd = ()=>{
    dispatch(add(newtitle));
    SetNewtitle('')
  }
  const toggle_update=(id,title)=>{
    setToggleUpdate(!toggleUpdate)
    setId(id)
    SetUpdatedtitle(title)
  }
  const filterTasks = (filterType) => {
    if (filterType === 'done') {
      setFilteredTasks(tasks.filter((e) => e.isDone === true));
    } else if (filterType === 'Notdone') {
      setFilteredTasks(tasks.filter((e) => e.isDone === false));
    } else {
      setFilteredTasks(tasks);
    }
  };
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  return (
    <div className="App">

      <h4>filter</h4>
      <p onClick={()=>filterTasks('done')}>done</p>
      <p onClick={()=>filterTasks('Notdone')}>not done </p>
      <p onClick={()=>filterTasks('')}>all</p>
        {toggleUpdate?<>
          <input placeholder='update to do ...' value={updatedtitle} onChange={(e)=>SetUpdatedtitle(e.target.value)}></input>
          <button onClick={()=>{dispatch(update_task(id,updatedtitle));toggle_update()}}>update</button>
        </>: <>
          <input placeholder='enter to do ...' value={newtitle} onChange={(e)=>SetNewtitle(e.target.value)}></input>
          <button onClick={()=>handleAdd(newtitle)}>add</button>
        </>}
        
        <ul>{filteredTasks.map(todo=><div className='list'>
          <li onClick={()=>dispatch(done(todo.id))} className={`${todo.isDone? "task":""}`}>{todo.title}</li><button onClick={()=>toggle_update(todo.id,todo.title)}>update</button><button onClick={()=>dispatch(delete_task(todo.id))}>delete</button>
        </div>)}</ul>
    </div>
  );
}

export default App;
