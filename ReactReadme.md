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

### Hooks

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

### React/Web Terms

- **Mount**: Adding a component to the DOM for the first time.
- **Unmount**: Removing a component from the DOM.
- **Render**: The process of generating and displaying the component's output on the screen.

---



### VS Code Extensions

- **rafce**: A shortcut for generating a React Arrow Function Component with export.

---

### VS Code Commands

- **Open folder in the same VS Code window**:

  ```bash
  code -r ./folderName/
  ```

---
