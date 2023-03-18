import React from "react";

function TodoListItem({ key, todo }){
   return(
    <li key={key}>
        {todo.title} 
    </li>
   ) 
}

export default TodoListItem;