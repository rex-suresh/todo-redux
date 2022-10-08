import { configureStore } from "@reduxjs/toolkit";
import { todoActions } from "../todo/actions";

const reduxStore = configureStore({
  reducer: {
    todo: todoActions.reducer
  }
});

export { reduxStore };