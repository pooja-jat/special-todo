import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        assignedTo: action.payload.assignedTo,
        status: action.payload.status,
      };
      state.todos = [...state.todos, newTodo];
    },
  },
});

export const { createTodo } = slice.actions;

export default slice.reducer;
