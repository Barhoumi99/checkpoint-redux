import { createSlice } from "@reduxjs/toolkit";

const todoSlices = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: 'todo 1', completed: false },
    { id: 2, title: 'todo 2', completed: false },
    { id: 3, title: 'todo 3', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }
      state.push(newTodo)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state[index].completed =!state[index].completed
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      state.splice(index, 1)
    },
    editTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].title = action.payload.title;
    },
  }
})

export const { 
  addTodo,
  toggleComplete, 
  deleteTodo,
  editTodo,
} = todoSlices.actions

export default todoSlices.reducer