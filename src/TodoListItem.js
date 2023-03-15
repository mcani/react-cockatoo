import React from "react";

function TodoListItem({key, todo, onRemoveTodo}){
   return(
    <li key={key.id}>
        {todo} 
        <button onClick={() => onRemoveTodo(todo)} >
            Remove
        </button> 
    </li>
   ) 
}

export default TodoListItem;