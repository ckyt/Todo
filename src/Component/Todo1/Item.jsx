/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

 // eslint-disable-next-line no-unused-vars
 function Item ({todo, id, onDelete, upDateTask}){
   const [isEditing, setisEditing] = useState(false);
   const [newTask, setNewTask] = useState(todo);

function handleUpdate(){
   upDateTask(id, newTask);
   setisEditing(false)
}
    return(
        <>
        {
isEditing? (
   <div>
<input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)}/>
<button onClick={handleUpdate}   >Save</button>
 

   </div>
) :(

<div>

{todo}
        <button onClick={()=> setisEditing(true)}>Edit</button>
        <button onClick={()=> onDelete(id)}>Delete</button>

</div>

)

        }
        </>
    )
 }
    export default Item;