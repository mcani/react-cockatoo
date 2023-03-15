

import React, { useState } from "react";
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onAddTodo }) {
const [todoTitle, setTodoTitle] = useState('');

const handleTitleChange = (event) => {
const newTodoTitle = event.target.value;
setTodoTitle(newTodoTitle);
};

const handleAddTodo = () => {
onAddTodo(todoTitle);
setTodoTitle('');
};

return (
<div>
<input
     type="text"
     value={todoTitle}
     onChange={handleTitleChange}
   />
<button onClick={handleAddTodo}>Add Todo</button>
<ul>
{todoList.map(todoItem => (
<TodoListItem key={Date.now()} todo={todoItem} />
))}
</ul>
</div>
);
}

export default TodoList;