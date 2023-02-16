import React, { useState } from "react";
function AddTodoForm ({onAddTodo}){
    const [todoTitle, setTodoTitle ] = useState ("") 
    const handleTitleChange = (event)=> {
        setTodoTitle(event.target.value) 
    }
    const handleAddTodo = (event) => {

        event.preventDefault();
        const todoTitle = event.target.title.value; 
        console.log(todoTitle);
        event.target.title.value = "";
        onAddTodo(todoTitle);
    }
    return (
        <div>
            <h1>To do list</h1>
            <form onSubmit={handleAddTodo}>

                <label htmtFor="todoTitle">
                Title:
                </label>
                <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
                <button type="submit">Add</button>
                </form>
        </div>
    )
}
export default AddTodoForm
