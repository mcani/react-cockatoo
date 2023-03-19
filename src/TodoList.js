import React from "react";
import TodoListItem from './TodoListItem';

function TodoList({todoList}){
    console.log("I GOT: ", todoList);
    return(
        <ul>
        {todoList.map(todoItem => <TodoListItem key={todoItem.id} todo={todoItem.title} />)}
        </ul>   
    )
};
export default TodoList;
