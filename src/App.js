import React, { useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



const useSemiPersistentState = (state) =>{
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(state))||[]);
  useEffect(()=>{
    localStorage.setItem(state, JSON.stringify(todoList))
}, [todoList, state])
return [todoList,setTodoList]
}

function App() { 
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");

  const addTodo = (newTodo) =>{
    setTodoList((todoList) => [...todoList, newTodo])
  }

  
  function removeTodo(id) {
    console.log('index', id);
    const index = todoList.findIndex(todo => todo === id);
    if (index !== -1) {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  }
  return (
    <div>
      <h1>ToDoList</h1>
      <AddTodoForm onAddTodo={
        addTodo}/>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      
    </div>
  );
}




export default App;

