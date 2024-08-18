React is a Library, Next is the Framework

public folder is directly available like static middleware in Express JS.


vite is used more often than create React app  -> https://vitejs.dev/guide/
> npm create vite@latest  >> go to app
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
-   useState() ex-
-   useEffect(): runs when a component is mounted. 
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


  useEffect(() => {
    // component mounted
  
    return () => {
      // component unmounted
    }
  }, [component/state])

  
    ```
- some initial alerts might run 2 times in dev mode. We can comment the React StrictMode to avoid this.


### Some React/Web Terms
Mount: The process of adding a component to the DOM for the first time.
Unmount: The process of removing a component from the DOM.
Render: The process of generating the component’s output to display on the screen.

### VS Code Extensions:
rafce-  gives an export react arrow function Component


### VS code cmds:
-   code -r ./folderName/

