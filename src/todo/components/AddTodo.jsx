import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, addList } from '../actions';

const InputBox = ({ valueSetter, value, compFor, onEnter }) => (
  <input
    type='text'
    onChange={(event) => valueSetter(event.target.value)}
    value={value}
    className={'add-entry'}
    placeholder={`New todo ${compFor}`}
    style={{ width: '100%' }}
    onKeyDown={(event) => {
      if (event.key === 'Enter') {
        onEnter();
      }
    }}
  />
);

const AddTodoList = (props) => {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();
  const payload = { heading: inputText };
  const onEnter = () => {
    dispatch(addList(payload));
    setInputText('');
  };

  return (
    <div
      style={{
        width: '400px',
        height: '30px',
      }}
    >
      <InputBox
        valueSetter={setInputText}
        value={inputText}
        size='1.3em'
        compFor='list'
        onEnter={onEnter}
      />
    </div>
  );
};

const AddTodoItem = (props) => {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();
  const payload = { description: inputText, todoID: props.todoID };
  const onEnter = () => {
    dispatch(addItem(payload));
    setInputText('');
  };

  return (
    <div
      style={{
        width: '300px',
        height: '25px',
      }}
    >
      <InputBox
        valueSetter={setInputText}
        value={inputText}
        size='1em'
        compFor='item'
        onEnter={onEnter}
      />
    </div>
  );
};

export { AddTodoList, AddTodoItem };
