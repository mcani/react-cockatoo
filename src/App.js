import React, { useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const useSemiPersistentState = (state) =>{
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(state))||[]);
  useEffect(()=>{
    localStorage.setItem(state, JSON.stringify(todoList))
}, [todoList])
return [todoList,setTodoList]
}

function App() { 
  const [todoList, setTodoList] = useSemiPersistentState("savedTodoList");
  console.log('TODO: ', todoList);
  const addTodo = (newTodo) =>{
    // setTodoList([...todoList ,newTodo])
    setTodoList((todoList) => [...todoList, newTodo])
  }
  return (
    <div>
      <h1>ToDoList</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}



export default App;

