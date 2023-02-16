import React from "react";

function TodoListItem({key, todo}){
   return(
    <li key={key}>
        {todo} 
    </li>
   ) 
}

export default TodoListItem;