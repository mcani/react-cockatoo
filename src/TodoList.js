import React from "react";

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
        {todoList.map(
        (item)=>{
            return( 
            <li key={item.id}>
                {item.title}
            </li>
            )
        })}
        </ul>   
    )
    

};
export default TodoList;