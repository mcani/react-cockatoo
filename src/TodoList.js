import React from "react";
import TodoListItem from './TodoListItem';

function TodoList({todoList, onRemoveTodo}){
    console.log("I GOT: ", todoList);
    return(
        <ul>
        {todoList.map(todoItem => <TodoListItem key={todoItem} todo={todoItem} onRemoveTodo={onRemoveTodo}/>)}
        </ul>   
    )
};
export default TodoList;
