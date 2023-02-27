import React from "react";
import TodoListItem from './TodoListItem';

function TodoList({todoList}){
    console.log("I GOT: ", todoList);
    return(
        <ul>
        {todoList.map(todoItem => <TodoListItem key={todoItem} todo={todoItem} />)}
        </ul>   
    )
};
export default TodoList;
