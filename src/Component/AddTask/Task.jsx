/* eslint-disable react/prop-types */
import { useState } from "react";


function Task ({newList}){
    const [input, setInput] = useState("");
    function handleInput (e){
        setInput(e.target.value)
    }
return (
    <>
    <input type="text"  value={input} onChange={handleInput}/>
    <button onClick={()=> newList(input)}>Add Task </button>
    
    </>
)


}

export default Task;