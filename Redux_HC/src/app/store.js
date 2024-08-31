import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    // IMP: Store need to keep a list of all reducers
    reducer: todoReducer
})