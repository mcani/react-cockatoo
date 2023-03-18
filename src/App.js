import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
const [todoTitle, setTodoTitle] = useState('');
const [todoList, setTodoList] = useState([]);

const handleTitleChange = (event) => {
const newTodoTitle = event.target.value;
setTodoTitle(newTodoTitle);
};

const addTodo = (newTodo) => {
setTodoList([...todoList, newTodo]);
};

return (
<div>
<h1>ToDoList</h1>
<AddTodoForm
     onAddTodo={addTodo}
     todoTitle={todoTitle}
     handleTitleChange={handleTitleChange}
   />
<TodoList todoList={todoList} />
</div>
);
}

export default App;