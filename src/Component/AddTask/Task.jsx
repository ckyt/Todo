/* eslint-disable react/prop-types */
import { useState } from "react";


function Task ({newList}){
    const [input, setInput] = useState("");
    function handleInput (e){
        setInput(e.target.value)
    }
    const addTask = () =>{
        newList(input);
        setInput("")
    }
return (
    <>
    <input type="text"  value={input} onChange={handleInput}/>
    <button onClick={addTask}>Add Task </button>
    
    </>
)


}

export default Task;