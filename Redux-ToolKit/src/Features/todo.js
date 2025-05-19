import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoFeature: [
    { id: nanoid(), 
    name: "Demo Task!"
    },

],

};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state,action) => {
        const todo = {
            id : nanoid(),
            name: action.payload,
        }
        state.todoFeature.push(todo)
    },
    delTodo: (state,action) => {
        state.todoFeature = state.todoFeature.filter((item) => item.id !== action.payload);
        // if (item) {
        //     state.todoFeature.splice(item, 1);
        // }
    },
    updateTodo: (state,action)=>{
        const update = state.todoFeature.find((item) => item.id === action.payload.id);
        if (update) {
            update.name = action.payload.name;
        }
    }
  },
});

export default todoSlice.reducer;

export const { addTodo, delTodo ,updateTodo} = todoSlice.actions;