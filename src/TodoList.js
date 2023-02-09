import React from "react";

const todoList = [
    {
    title: 'To finish assignment',
    objectID: 0,
    },
    {
    title: 'Read the book Road to React',
    objectID: 1,
    },
    {
    title: 'Watch Youtube videos',
    objectID: 2,
    }
    ];

function TodoList(){
    return(
        <ul>
        {todoList.map(
        (item)=>{
            return( 
            <li key={item.objectID}>
                {item.title}
            </li>
            )
        })}
        </ul>   
    )
    

};
export default TodoList;