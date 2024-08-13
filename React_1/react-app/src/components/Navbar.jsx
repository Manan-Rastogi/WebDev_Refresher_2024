import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <ul className="navbar">
        <li className="menu">Home</li>
        <li className="menu">About</li>
        <li className="menu">{props.detail}</li>
      </ul>
    </div>
  )
}

export default navbar
