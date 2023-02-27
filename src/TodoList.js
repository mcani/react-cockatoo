import React from "react";
import TodoListItem from './TodoListItem';

function TodoList({todoList}){
    return(
        <ul>
        {todoList.map(todoItem => <TodoListItem key={Date.now()} todo={todoItem} />)}
        </ul>   
    )
};
export default TodoList;
