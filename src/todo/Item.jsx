import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleStatus } from './actions';

const Status = ({ isDone, onClick }) => (
  <div onClick={onClick} style={{ cursor: 'pointer' }}>
    {isDone ? '✅' : '⏳'}
  </div>
);

const Item = ({ todoID, itemDetails }) => {
  const { isDone, description, itemID } = itemDetails;
  const dispatch = useDispatch();
  const payLoad = { todoID, itemID };

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        width: '100%',
        padding: '10px',
        alignItems: 'center',
      }}
    >
      <Status isDone={isDone} onClick={() => dispatch(toggleStatus(payLoad))} />
      <div style={{ flexGrow: '5' }}>{description}</div>
      <div
        onClick={() => dispatch(deleteItem(payLoad))}
        style={{ cursor: 'pointer', justifySelf: 'flex-end' }}
      >
        X
      </div>
    </div>
  );
};

export default Item;
