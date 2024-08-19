React is a Library, Next is the Framework

public folder is directly available like static middleware in Express JS.

vite is used more often than create React app -> https://vitejs.dev/guide/

> npm create vite@latest >> go to app
> npm i
> npm run dev

index.html is shown to server
There is a line in index.html - <div id="root"></div>  
Any code we write will be added inside this to make our app
In src there is index.js which does this

App.js in the main file we focus on...

A spl syntax jsx is used --- html in js

Variable that can be used in DOM and Changed in React is Called State.

Component Folder is used to create different components in React

Props: Pass data to compoments via components

Inline CSS in jsx has a new and unique syntax:
style-{{"color":"red"}}

Hooks:

- useState() ex-
- useEffect(): runs when a component is mounted.
  ex-

  ```javascript
  useEffect(() => {
    alert("Welcome!!");
  }, []); // will run on all render.

  useEffect(() => {
    alert("Welcome!!");
  }, []); // will run only on first render.

  useEffect(() => {
    alert("Navbar color was changed to cyan.");
  }, [Navbar]); // change on particular component. You can use state as well
  ```

useEffect(() => {
// component mounted

    return () => {
      // component unmounted
    }

}, [component/state])

    ```
    some initial alerts might run 2 times in dev mode. We can comment the React StrictMode to avoid this.

- useRef() -> useRef is a React Hook that lets you reference a value that’s not needed for rendering. It persists the value of a variable during rerendering of the component. useEffect is not triggered when useRef is in play on a variable.

```javascript
let a = 1;
const aa = useRef(1);
useEffect(() => {
  a = a + 1;
  aa.current = aa.current + 1;
  console.log("a = ", a);
  console.log("aa = ", aa);
});
```
> you can also use ref to set a property after 1st render. [Inplace of DOM Manipulations]
    ```
    const btnRef = useRef()
    useEffect(()=>{
        .....
        ref.current.style.backgroundColor = "red"
        ....
    }, [])

    <button ref={btnRef}> Click </button>
    ```
> Since ref does not rerender, use it inside a hook that executes on rerender like useEffect()
check documentation onve for more examples and use cases.



-- Conditional Rendering: 1st button will be rendered based on value of someVar as true or false.
{someVar && <button> Displayed </button>}
someOther  button - <button onClick={()=>setsomeVar(!someVar)}>

### Some React/Web Terms

Mount: The process of adding a component to the DOM for the first time.
Unmount: The process of removing a component from the DOM.
Render: The process of generating the component’s output to display on the screen.

### VS Code Extensions:

rafce- gives an export react arrow function Component

### VS code cmds:

- code -r ./folderName/
