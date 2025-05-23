import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../Features/todo";
import authReducer from "../Features/Auth";

export const store = configureStore({
    reducer:
    {
        auth: authReducer,
        todo: todoSlice,
    }
});