
import './App.css'

import List from './Component/List/List'
import Task from './Component/AddTask/Task'
import { useState } from 'react'
import TodoContext from './Context/TodoContext'

function App() {
  const [task, setTask] =  useState([
    {id:1, task: "Task 1", completed: false},
    {id:2, task: "Task 2", completed: false},
    {id:3, task: "Task 3", completed: false},
])

  return (
 <>
<TodoContext.Provider value={{task, setTask}}>
<Task newList={(todo)=> {setTask([
  ...task, {id: task.length+1, task: todo, completed:false}
])}}/>
<List task = {task}/>

</TodoContext.Provider>


 </>
  )
}

export default App
