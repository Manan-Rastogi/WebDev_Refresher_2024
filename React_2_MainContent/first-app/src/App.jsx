import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

function App() {
  useEffect(() => {
    alert("Welcome!!");
  }, []); // will run only once.

  useEffect(() => {
    alert("Navbar color was changed to cyan.");
  }, [Navbar]); // change on particular component. You can use state as well

  
  

  return (
    <>
      <Navbar color="cyan"></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
