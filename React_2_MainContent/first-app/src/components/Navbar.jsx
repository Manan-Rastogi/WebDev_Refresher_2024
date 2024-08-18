import React from 'react'
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar" style={{backgroundColor: props.color}}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
