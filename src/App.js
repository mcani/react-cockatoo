import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  console.log('list:', localStorage.getItem('savedTodoList'))
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const loadData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('promise', todoList);
          resolve({ data: { todoList:  localStorage.getItem('savedTodoList')?JSON.parse(localStorage.getItem('savedTodoList')): [] } });
        }, 2000);
      });
    };

    loadData().then(response => {
      setTodoList(response.data.todoList);
      console.log('im here', response.data.todoList);
      setIsLoading(false); 
    });
  }, []);

  useEffect(() => {
    if (!isLoading) { 
      console.log('not loading', todoList);
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); 

  const addTodo = newTodo => {
    setTodoList(todoList => [...todoList, newTodo]);
  };

  function removeTodo(id) {
    console.log('index', id);
    const index = todoList.findIndex(todo => todo.id === id);
    if (index !== -1) {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </div>
  );
}

export default App;
