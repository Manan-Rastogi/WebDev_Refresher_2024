import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleTodoDelete = (e, id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
     
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="list-none flex justify-between px-10 py-2 bg-blue-200 my-4 mx-10 rounded-md gap-10 font-bold" >
            {todo.task}
            <button
              onClick={(e) => {
                handleTodoDelete(e, todo.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Todos;
