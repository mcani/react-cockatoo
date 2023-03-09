import React from "react";
function AddTodoForm (){
    return (
        <div>
            <h1>To do list</h1>
            <form>
                <label htmtFor="todoTitle">
                Title:
                </label>
                <input id="todoTitle"></input>
                <button>Add</button>
            </form>
        </div>
    )
}
export default AddTodoForm
