import React from 'react';

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
    title: 'Watch Youtube videos by me',
    id: 2,
    }
    ];
function App() {
  return (
    <div>
      <h1>TODO list</h1>
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
    </div>
  );
}



export default App;

