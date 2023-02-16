import React from "react";
function AddTodoForm (props){
    const handleAddTodo = (event) => {

        event.preventDefault();
        const todoTitle = event.target.title.value; 
        console.log(todoTitle);
        event.target.title.value = "";
        props.onAddTodo(todoTitle);
    }
    return (
        <div>
            <h1>To do list</h1>
            <form onSubmit={handleAddTodo}>

                <label htmtFor="todoTitle">
                Title:
                </label>
                <input id="todoTitle" name="title"></input>
                <button type="submit">Add</button>
                </form>
        </div>
    )
}
export default AddTodoForm
