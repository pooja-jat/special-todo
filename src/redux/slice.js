import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [
      {
        id: "abc",
        title: "ABC",
        assignedTo: "Pooja",
        status: "Pending",
      },
      {
        id: "def",
        title: "DEF",
        assignedTo: "Pooja",
        status: "In Progress",
      },
      {
        id: "ghi",
        title: "EFG",
        assignedTo: "Pooja",
        status: "Done",
      },
    ],
  },
  reducers: {},
});

// export const { incremented, decremented } = counterSlice.actions;

export default slice.reducer;
