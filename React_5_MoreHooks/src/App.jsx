import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import {CounterContext} from "./context/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={count}>              
        <Navbar></Navbar>
        <button onClick={()=>{setCount(count+1)}}> Click Me </button>
      </CounterContext.Provider>
    </>
  );
}

export default App;
