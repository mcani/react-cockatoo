import React from "react";

function TodoListItem({todo, onRemoveTodo}){
   return(
    <li key={todo.id}>
        {todo.title} 
        <button onClick={() => onRemoveTodo(todo.id)} >
            Remove
        </button> 
    </li>
   ) 
}

export default TodoListItem;