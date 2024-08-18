import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx" 
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
