import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Features/todo";

export const store = configureStore({
    reducer:todoSlice,
});