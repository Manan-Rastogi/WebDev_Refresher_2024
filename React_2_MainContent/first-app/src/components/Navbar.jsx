import React, { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const [logIn, setLogIn] = useState("In");
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: props.color }}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button
          onClick={() => {
            logIn === "In" ? setLogIn("Out") : setLogIn("In")
          }}
        >
          Log {logIn}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
