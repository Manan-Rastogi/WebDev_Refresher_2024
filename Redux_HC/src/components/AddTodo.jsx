import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const AddTodo = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch(); // dispatch updates the value in store using reducers

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setinput("");
  };

  return (
    <div className="flex justify-center w-full mb-10">
      <form
        onSubmit={addTodoHandler}
        className="space-x-3 mt-12 w-full flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Enter a Todo.."
          className="w-3/4 px-3 py-1 focus:bg-gray-300 bg-violet-900 rounded-md font-bold"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button
          type="Submit"
          className="bg-green-600 rounded-md px-2 py-1 my-2 hover:bg-lime-400 font-bold"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
