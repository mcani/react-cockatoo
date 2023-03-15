import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel"

function AddTodoForm (props){
    const [todoTitle , setTodoTitle]= useState("") 
    // const [todos, setTodos] = useState([])
    
    const handleTitleChange = (event) => {
        console.log("Target value: ", event.target.value);
        setTodoTitle(event.target.value);
        };
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        props.onAddTodo(todoTitle);
        // setTodos([...todos, todoTitle]);
        setTodoTitle("");
}
    
    return (
        <div>
            <h1>To do list</h1>
            <form onSubmit={handleAddTodo}>
            <InputWithLabel
                id="todoTitle"
                value={todoTitle}
                onInputChange={handleTitleChange}
            >Title:</InputWithLabel>
                <button type="submit">Add</button>
                </form>
        </div>
    )
}
export default AddTodoForm
