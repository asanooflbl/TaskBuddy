import React, { useEffect, useState } from 'react'
import TaskForm from './Component/TaskForm'
import TaskList from './Component/TaskList'
import ProgressTracker from './Component/ProgressTracker'
import './Style.css'

function App() {

  const [tasks,setTasks] = useState([]);

    useEffect(()=>{
      localStorage.setItem("tasks",JSON.stringify(tasks))
    });

  const addTask = (task)=>{
    setTasks([...tasks,task]);
 


  } 
     
  const updateTask =(updatedTask, index)=>{
    const newTask = [...tasks];
    newTask[index] = updatedTask;
    setTasks(newTask)
  }

  const deleteTask =(index)=>{
    setTasks(tasks.filter((_,i)=> i!==index))

  } 
  const cleartask = () =>{
    setTasks([])
  }
   
  
  return (
    <div className='App'>
      <header>
       <h1 className='title'>TaskBuddy</h1> 
       <p className='tagline'>This is your friendly Task buddy</p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask= {deleteTask}/>
      <ProgressTracker tasks ={tasks}/>
      {tasks.length > 0 &&( <button onClick={cleartask} className='clear-btn'>Clear all Tasks</button>) }  
     
    
    </div>
  )
}

export default App