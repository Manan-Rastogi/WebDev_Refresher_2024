import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [bgColor, setbgColor] = useState("red");
  const [inputText, setinputText] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleOnClick = () => {
    alert("Ha Ha Ha!!!");
  };

  const handleOnMouseOver = () => {
    setbgColor("lime");
  };

  const handleOnMouseLeave = () => {
    setbgColor("red");
  };

  const handleChange = (e) => {
    setinputText(e.target.value);
    console.log(inputText);
  };

  const handleFormChange = (e) => {
    setForm({
      ...form,                  // Spread the current form state to keep all existing key-value pairs intact
      [e.target.name]: e.target.value  // Dynamically update the specific key (input field) based on the name attribute of the input element and set its value
    });
    
    console.log(form); // log the current form state
  };

  return (
    <>
      <button onClick={handleOnClick}>Click Me</button>

      <input
        type="text"
        value={inputText}
        onMouseOver={handleOnMouseOver}
        onMouseLeave={handleOnMouseLeave}
        onChange={handleChange}
        style={{ backgroundColor: bgColor }}
      />

      <form>
        {/* Input field for name */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleFormChange}
        />

        <br />

        {/* Input field for email */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleFormChange}
        />

        <br />

        {/* Display the form state */}
        <p>Current form state:</p>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </form>
    </>
  );
}

export default App;
