// Child Component File


import React, { useState } from "react";
import {v4 as uuid}from 'uuid'


const NewTodoForm=({createTodo }) =>{
    const[userInput, setUserInput]=useState({})

//to add the single single update value
const handleChange = e=>{
    setUserInput({[e.target.name]:e.target.value})
}

const handleSubmit = e =>{
    e.preventDefault();
    if(userInput.task === ''){
        alert('Please Enter The Task')
    }else{
        const newTodo={id:uuid(),task:userInput.task,completed:false}

        //to create a new todo task
        createTodo(newTodo)

        //once task created it will make the input field as empty
        setUserInput({task:''})
    }
}


return(

    //Input Field And Add Todo Button In this Function
    <form className="NewTodoFrom" onSubmit={handleSubmit}>
        <label>New Todo</label>
        <input
        value={userInput.task}
        onChange={handleChange}
        type='text'
        name="task"
        placeholder="new todo"
        />
        <button>Add Todo</button>
    </form>
)


}
export default NewTodoForm