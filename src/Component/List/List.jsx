/* eslint-disable react/prop-types */

import Item from "../Todo1/Item";
import TodoContext from "../../Context/TodoContext";
import { useContext } from "react";




function List (){
    const {task} = useContext(TodoContext)
   
    return(
        <>
       <ul>
       { task.map((list, index)=> {
        return ( <li key={index}> <Item todo={list.task} id = {list.id}/> </li>)

            })}
        
       </ul>
               
        </>
    )
}
export default List;