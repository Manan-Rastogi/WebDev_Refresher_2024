# React Notes

### React vs. Next.js

- **React** is a **library** for building user interfaces.
- **Next.js** is a **framework** built on top of React, which provides additional features like server-side rendering (SSR) and static site generation (SSG).

### Public Folder

The **public** folder in React acts like the static middleware in Express.js, allowing access to static files directly from the root URL. Anything placed inside the public folder is accessible via direct links.

For example, if there is an `image.png` inside the public folder, you can access it at `http://localhost:3000/image.png`.

### Vite vs. Create React App

Vite is a modern build tool that is often preferred over `create-react-app` due to its superior performance and faster builds. It leverages the browser's native ESM (ES Modules) to provide an optimized development experience.

**Basic Vite Setup:**

```bash
npm create vite@latest   # Set up a new Vite project
cd my-app                # Navigate to the app directory
npm install              # Install dependencies
npm run dev              # Start the development server
```

For more details, check the [Vite Guide](https://vitejs.dev/guide/).

---

### React Basics

- **index.html** is the main HTML file served by the server. Inside this file, you will find a line like:

  ```html
  <div id="root"></div>
  ```

  React will inject all the app code inside this `div`.

- **index.js** is the JavaScript entry point of your React app, where your entire React app is attached to the DOM using `ReactDOM.render()`.

- **App.js** is the main file where most of the core app logic resides. This is typically the file where we structure the main component of our app.

---

### JSX - JavaScript XML

React uses a special syntax called **JSX**, which allows you to write HTML-like code inside JavaScript. JSX makes it easy to define components and structures.

For example:

```javascript
function Greeting() {
  return <h1>Hello, World!</h1>;
}
```

JSX gets compiled into `React.createElement()` calls behind the scenes, and this is what allows React to render the elements.

---

### State in React

A **state** in React is a JavaScript object that stores dynamic values, and any changes in the state trigger re-rendering of the component.

Example of using `useState()`:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // Initialize state

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

---

### Props

**Props** are used to pass data from one component to another, making components reusable. Props are immutable; they cannot be modified by the child component receiving them.

Example:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="Alice" />
<Welcome name="Bob" />
```

---

### Inline CSS in JSX

In JSX, inline styles are written using a JavaScript object with camelCased property names.

Example:

```javascript
<div style={{ color: 'red', backgroundColor: 'yellow' }}>
  Styled Text
</div>
```

---

### React Hooks

#### `useState()`
This hook is used to create and manage state in functional components (as seen in the state example above).

#### `useEffect()`
This hook allows you to run side effects in your components (e.g., data fetching, subscriptions). It runs after the component is rendered.

- **Example of running on every render**:

  ```javascript
  useEffect(() => {
    console.log("Component rendered");
  });
  ```

- **Example of running only on the first render** (like componentDidMount):

  ```javascript
  useEffect(() => {
    alert("Welcome!");
  }, []); // Empty dependency array ensures this runs only once
  ```

- **Example of running on a specific state or prop change**:

  ```javascript
  useEffect(() => {
    alert("Navbar color was changed to cyan.");
  }, [navbarColor]); // Only runs when navbarColor changes
  ```

- **Component Mounting and Unmounting**:

  ```javascript
  useEffect(() => {
    // Component mounted
    console.log("Component is mounted");

    return () => {
      // Component unmounted
      console.log("Component is unmounted");
    };
  }, []);
  ```

> **Note:** In React's development mode, some side effects may run twice due to **React StrictMode**. You can comment out `React.StrictMode` to avoid this behavior in development.

#### `useRef()`

The `useRef()` hook allows you to persist values across renders without causing re-render. It can also be used for accessing DOM elements directly.

- **Example of persisting values**:

  ```javascript
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current += 1;
    console.log("Component rendered:", countRef.current, "times");
  });
  ```

- **DOM Manipulation Example**:

  ```javascript
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.style.backgroundColor = 'red';
  }, []);

  return <button ref={buttonRef}>Click me</button>;
  ```

#### `useContext()`
- Allows sharing state or data between components without passing props down manually at every level.
- `createContext()` creates a Context object that holds the value.
- `useContext()` is used to consume the value within child components.
- Example:
    ```javascript
    //context/counter.js
    import React, { createContext } from 'react';

    const CounterContext = createContext();            // Create Context

    export default CounterContext;

    //app.jsx
    <counterContext.Provider value={count}>              
            <Navbar></Navbar>
          </counterContext.Provider>

    // Using count in a child - Component1.js
    const Component1 = () => {
        const counter = useContext(counterContext)      // Using Context
      return (
        <div>
          {counter}
        </div>
      )
    }
    ```
  - Context: `CounterContext` is created to store a counter value.
  - Provider: The context provider `CounterContext.Provider` wraps components to share the `count` value.
  - Consumer: Inside `Component1`, `useContext(CounterContext)` accesses the `count` from the context.
- The state `count` will be available in all children of `Navbar`.

#### `useMemo()`
- Optimizes performance by memoizing expensive calculations to prevent unnecessary recalculations on every render.
- Usage:
  ```javascript
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```
- Only recalculates `computeExpensiveValue` if `a` or `b` changes.
- Useful for improving performance in components with expensive computations or many re-renders.

#### `useCallback()`
- Prevents unnecessary re-creations of functions, improving performance in components with many re-renders.
- Usage:
  ```javascript
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```
- `useCallback()` returns the memoized version of the callback, only updating if `a` or `b` changes.
- Often used when passing callbacks to optimized child components that rely on reference equality to avoid unnecessary renders.
defn and use case
example


---

### Conditional Rendering

In React, you can conditionally render components based on state or variables.

- **Example**:

  ```javascript
  {someVar && <button>Conditionally Displayed Button</button>}
  ```

In the example above, the button will only be rendered if `someVar` is `true`.

---

### List Rendering in React

You can render lists of items by mapping over an array of data.

- **Example**:

  ```javascript
  const todoItems = [
    { title: "Task 1", desc: "Description 1" },
    { title: "Task 2", desc: "Description 2" },
  ];

  return (
    <div>
      {todoItems.map((todo, index) => (
        <Todo key={index} title={todo.title} desc={todo.desc} />
      ))}
    </div>
  );
  ```

> The `key` prop is important for improving rendering performance when rendering lists.

---

### React Router

- Allows you to manage navigation and routes in a React application without reloading pages.
- [react-router](https://reactrouter.com/en/main/start/overview)
- [react-router-tutorial](https://reactrouter.com/en/main/start/tutorial)
- Install via npm: `npm install react-router-dom`
  
#### Useful Components of React Router:

- **createBrowserRouter**:  
  - Creates a router that uses the browser's history API to manage navigation.  
  - Allows you to define routes and nested routes.

- **RouterProvider**:  
  - Wraps the entire application to provide the routing context.  
  - Essential for the router to work.

- **useParams**:  
  - A hook that returns an object of key-value pairs of the dynamic parameters from the current URL.  
  - Useful for accessing route parameters (e.g., IDs).

- **Link**:  
  - A component that renders an anchor tag (`<a>`) that navigates to a different route without reloading the page.  
  - Similar to traditional HTML links but optimized for React Router.

- **NavLink**:  
  - Similar to `Link`, but it adds styling or classes to the link based on whether it is active.  
  - Useful for navigation menus where you want to highlight the active page.

- **Outlet**:  
  - A component used to render the matched child route's element.  
  - Useful when you have nested routes and need to display child components.

#### Additional Concepts:

- **Routes & Route**:  
  - `Routes` is a container for all your `Route` components.  
  - `Route` defines a path and the component that should be rendered when the path matches.

- **Switch (v5)**:  
  - In earlier versions, `Switch` was used to render the first matching route.  
  - In v6, it's replaced by `Routes` which behaves similarly but offers more flexibility.

- **Redirect (v5) / Navigate (v6)**:  
  - Used to redirect users from one route to another.  
  - In v6, `Redirect` is replaced with `Navigate`.

- **useNavigate**:  
  - A hook that provides a function to programmatically navigate to a different route.  
  - Useful for redirecting users after an action (e.g., form submission).

These notes cover the essential components and concepts of React Router, making it easier to manage navigation in your React applications.





### React/Web Terms

- **Mount**: Adding a component to the DOM for the first time.
- **Unmount**: Removing a component from the DOM.
- **Render**: The process of generating and displaying the component's output on the screen.

---

## React Events
### Some Common Examples

#### onClick()
      <button onClick={handleOnClick}>Click Me</button>

#### Mouse
```javascript
const handleOnMouseOver = () => {
    setbgColor("lime")
  }

  const handleOnMouseLeave = () => {
    setbgColor("red")
  }

      <input type="text" onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave} style={{backgroundColor: bgColor}}/>

```

#### input -- onChange
quite imp to use onChhange with almoost every input
```javascript
const handleChange = (e) => {
    setinputText(e.target.value)             // This changes in async mode. So we will see prev value in clog.
    console.log(inputText) 
  }
      <input type="text" value={inputText} onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave} onChange={handleChange} style={{backgroundColor: bgColor}}/>

```
---

### React Forms
- [react-hook-form](https://react-hook-form.com/)


### Redux
- **What and Why?**
  - **What**: Redux is a state management library for JavaScript apps, particularly React, providing a centralized store for all application states.
  - **Why**: It helps manage complex state logic across the application, making state predictable, easy to debug, and consistent.
- **Installation**: `npm install @reduxjs/toolkit`
- **Useful Links**:
  - [Redux Toolkit Introduction](https://redux-toolkit.js.org/introduction/getting-started)
  - [Redux Toolkit Quick Start Tutorial](https://redux-toolkit.js.org/tutorials/quick-start)
- **Important Parts**
  - **Store**: The centralized state container that holds the entire state of your application.
  - **Reducers**: Functions that determine how the state changes in response to actions. They accept the current state and an action as arguments and return a new state.
    - **State**: Represents the current state of the app managed by Redux.
    - **Action**: An object that describes what happened, typically including a `type` field and any relevant data.
  - **Slice**: A collection of Redux reducer logic and actions for a single feature of your application. Each slice manages a specific part of the state.
  - **nanoid**: A small, secure, URL-friendly unique string ID generator for JavaScript. It's often used in Redux slices to generate unique IDs for actions or entities.
  - **useSelector**: A hook that allows you to extract data from the Redux store state using a selector function.
  - **useDispatch**: A hook that gives you access to the `dispatch` function, which you use to send actions to the Redux store to update the state.


### VS Code Extensions

- **rafce**: A shortcut for generating a React Arrow Function Component with export.

---

### VS Code Commands

- **Open folder in the same VS Code window**:

  ```bash
  code -r ./folderName/
  ```

---
