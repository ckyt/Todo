/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Item from "../Todo1/Item";
import TodoContext from "../../Context/TodoContext";
import { useContext } from "react";




function List (){
    const {task, setTask} = useContext(TodoContext)

    const deleteTask =(id)=>{
        const newTask = task.filter((list)=> list.id !== id);
        setTask(newTask)
    }
    const updatedTasks = (id, newTaskData)=>{
const updatedTasks = task.map((t)=> t.id === id ? {...t, task: newTaskData }: t);
setTask(updatedTasks);
    }
   
    return(
        <>
       <ul>
       { task.map((list, index)=> {
        return ( <li key={index}> <Item todo={list.task} id = {list.id} onDelete={deleteTask} upDateTask={updatedTasks} /> </li>)

            })}
        
       </ul>
               
        </>
    )
}
export default List;