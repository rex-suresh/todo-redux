import React from 'react';
import { useSelector } from 'react-redux';
import { AddTodoList } from './components/AddTodo';
import { Todo } from './Todo';

const Todos = () => {
  const todoIDs = useSelector(({ todo }) => {
    return Object.keys(todo.todoData);
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        padding: '30px',
      }}
    >
      <div style={{ width: 'fit-content' }}>
        <AddTodoList />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='todo-list-container'>
          {todoIDs.map((todoID) => (
            <Todo key={todoID} todoID={todoID} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Todos };
