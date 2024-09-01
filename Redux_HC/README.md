# React + Vite + Redux-ToolKit

### Step 1: Install Redux and Redux Toolkit
- **Command**: Run `npm install @reduxjs/toolkit react-redux` to install Redux Toolkit and React-Redux, which are necessary for integrating Redux with your React app.

### Step 2: Create a Redux Store
- **File**: Create a file called `store.js`.
- **Code**: Use `configureStore` from Redux Toolkit to set up the store.
  ```javascript
  import { configureStore } from '@reduxjs/toolkit';
  import todoReducer from '../features/todo/todoSlice';

  const store = configureStore({
    reducer: {
      todos: todoReducer,
    },
  });

  export default store;
  ```

### Step 3: Create a Slice
- **File**: Create a slice for your feature, for example, `todoSlice.js`.
- **Code**: Use `createSlice` to handle state and actions.
  ```javascript
  import { createSlice } from '@reduxjs/toolkit';

  const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: (state, action) => {
        state.push(action.payload);
      },
      removeTodo: (state, action) => {
        return state.filter(todo => todo.id !== action.payload);
      },
    },
  });

  export const { addTodo, removeTodo } = todoSlice.actions;
  export default todoSlice.reducer;
  ```

### Step 4: Provide the Store to Your App
- **File**: In your `index.js` or `App.js`.
- **Code**: Wrap your app in the `Provider` component and pass in the store.
  ```javascript
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import store from './app/store';
  import App from './App';

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  ```

### Step 5: Use Redux in Components
- **Code**: Use `useDispatch` to dispatch actions and `useSelector` to access state.
  ```javascript
  import React, { useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { addTodo } from '../features/todo/todoSlice';

  const TodoApp = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleAddTodo = () => {
      dispatch(addTodo({
        id: new Date().getTime(),
        text: input,
      }));
      setInput('');
    };

    return (
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default TodoApp;
  ```

### Step 6: Debugging and Enhancements
- **DevTools**: Install Redux DevTools for easier debugging.
- **Middleware**: Use middleware like `redux-thunk` for handling asynchronous actions.

By following these steps, you can successfully set up and use Redux in your React project.
