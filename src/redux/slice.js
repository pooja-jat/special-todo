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
    updateTodo: (state, action) => {
      const newTodo = {
        id: action.id,
        title: action.payload.title,
        assignedTo: action.payload.assignedTo,
        status: action.payload.status,
      };
      const index = state.todos.findIndex((t) => t.id === action.id);
      state.todos.splice(index, 1, newTodo);
    },
  },
});

export const { createTodo, updateTodo } = slice.actions;

export default slice.reducer;
