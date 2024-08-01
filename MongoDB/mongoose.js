import mongoose from "mongoose";
import express, { json } from "express";
import { Todo } from "./models/todo.js";

const app = express();
const port = 3001;

let mongoDb = await mongoose.connect("mongodb://localhost:27017/todo"); // will connect and create a todo DB

// Middleware to parse JSON bodies
app.use(express.json());

// shares a todo list
app.get("/todo", async (req, res) => {
  try {
    const allTodos = await Todo.find({});
    res.json(allTodos);
  } catch (error) {
    res.status(500).send("Error retrieving todos");
  }
});

app.post("/addTodo", (req, res) => {
  const todoEntry = new Todo(req.body);
  todoEntry.save();

  res.json({ msg: "Todo Saved!", status: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
