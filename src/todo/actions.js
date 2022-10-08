import { createSlice } from "@reduxjs/toolkit";
import initialTodos from "../initialData/initialData";


const deleteTodoItem = (state, { payload: { todoID, itemID } }) => {
  const items = state.todoData[todoID]
    .items
    .filter(item => item.itemID !== itemID);
  state.todoData[todoID].items = items;
};

const toggleItemStatus = (state, { payload: { todoID, itemID } }) => {
  const item = state.todoData[todoID]
    .items
    .find(item => item.itemID === itemID);

  item.isDone = !item.isDone;
};

const addTodoItem = (state, { payload: { todoID, description } }) => {
  const todo = state.todoData[todoID];
  const newItem = { itemID: todo.nextItemID, description, isDone: false };

  todo.items.push(newItem);
  todo.nextItemID++;
};

const addTodoList = (state, { payload: { heading } }) => {
  const newTodo = { nextItemID: 0, name: heading, items: [] };

  state.todoData[state.nextTodoID] = newTodo;
  state.nextTodoID++;
};

const todoActions = createSlice({
  name: 'todo',
  initialState: initialTodos,
  reducers: {
    deleteItem: deleteTodoItem,
    toggleStatus: toggleItemStatus,
    addItem: addTodoItem,
    addList: addTodoList
  }
});

export { todoActions };
export const { deleteItem, toggleStatus, addItem, addList } =
  todoActions.actions;
