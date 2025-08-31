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
      state.todos = state.todos.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = slice.actions;

export default slice.reducer;
