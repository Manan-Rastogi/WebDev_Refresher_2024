import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // will store state's first declrn
  todos: [
    {
      id: 1,
      task: "Learn React Redux",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {                            // include properties and funx
    addTodo: (state, action) => {        // always these 2 params
      // an object for todo
      const todo = {
        id: nanoid(),
        task: action.payload,            // payload is the object containing data
      };

      // push new todo to state
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
        state.todos = state.todos.filter(todo => {
            return todo.id !== action.payload
        })
    },

    /////////////////////////////////// Todo /////////////////////////
    updateTodo: () => {

    }
  },
});


 
// Export Individual Reducers for components
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

// Export reducers for store
export default todoSlice.reducer;