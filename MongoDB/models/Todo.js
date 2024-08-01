import mongoose from "mongoose";

const { Schema } = mongoose;

const TodoSchema = new Schema({                            // named export
  title: String, // String is shorthand for {type: String}
  task: String,
  isDone: Boolean,
});

export const Todo = mongoose.model('Todo', TodoSchema)
