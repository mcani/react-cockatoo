import React from "react";
import TodoListItem from './TodoListItem';


const todoList = [
    {
    title: 'To finish assignment',
    id: 0,
    },
    {
    title: 'Read the book Road to React',
    id: 1,
    },
    {
    title: 'Watch Youtube videos',
    id: 2,
    }
    ];

function TodoList(){
    return(
        <ul>
         {todoList.map(todoItem => <TodoListItem key={todoItem.id} todo={todoItem} />)}
        </ul>   
    )
};
export default TodoList;
