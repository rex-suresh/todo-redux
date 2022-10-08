import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddTodoItem } from './components/AddTodo';
import Item from './Item';

const TodoHeading = ({ todoName }) => (
  <h2
    style={{
      borderBottom: '1px solid grey',
      padding: '10px',
      flexGrow: '5',
    }}
  >
    {todoName}
  </h2>
);

const AddIcon = ({ triggered, onClick }) => {
  return (
    triggered && (
      <div style={{ fontSize: '2em' }} onClick={onClick}>
        +
      </div>
    )
  );
};

const CloseIcon = ({ onClick }) => {
  return (
    <div style={{ fontSize: '1.2em' }} onClick={onClick}>
      X
    </div>
  );
};

const ItemLists = ({ todoID, items }) =>
  items.map((itemDetails) => (
    <Item itemDetails={itemDetails} key={itemDetails.itemID} todoID={todoID} />
  ));

const Todo = ({ todoID }) => {
  const { name, items } = useSelector(({ todo }) => todo.todoData[todoID]);
  const [addItem, setAddItem] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div id={todoID} name={name} className='todoList'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 1,
        }}
        onMouseEnter={() => setHovered(!hovered)}
        onMouseLeave={() => setHovered(!hovered)}
      >
        <TodoHeading todoName={name} />
        {addItem ? (
          <CloseIcon onClick={() => setAddItem(false)} />
        ) : (
          <AddIcon onClick={() => setAddItem(true)} triggered={hovered} />
        )}
      </div>
      <div style={{ overflow: 'scroll' }}>
        {addItem && (
          <AddTodoItem onClick={() => setAddItem(false)} todoID={todoID} />
        )}
        <ItemLists items={items} todoID={todoID} />
      </div>
    </div>
  );
};

export { Todo };
