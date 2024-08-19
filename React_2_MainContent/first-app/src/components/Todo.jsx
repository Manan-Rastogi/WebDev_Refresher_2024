import React from 'react';
import Todo from './Todo'; // Assuming Todo component is in a separate file

const TodoList = () => {
  const todoItems = [
    { Title: 'Task 1', desc: 'Description for Task 1' },
    { Title: 'Task 2', desc: 'Description for Task 2' },
    { Title: 'Task 3', desc: 'Description for Task 3' }
  ];

  return (
    <div>
      {todoItems.map((todo, index) => (               // List Rendering
        <Todo key={index} Title={todo.Title} desc={todo.desc} />
      ))}
    </div>
  );
};

export default TodoList;