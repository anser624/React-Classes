// import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-firestore.js";
// import { db } from "../Firebase/firebaseconfig";

// const initialState = {

//   todoFeature: [
//     { 
//       id: nanoid(),
//        name: "Demo Task!"
//     },

//   ]
// };

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       try {
//         const docRef = addDoc(collection(db, "Task"), {
//           id: nanoid(),
//           name: action.payload,
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//       const todo = {
//         id: nanoid(),
//         name: action.payload,
//       };
//       state.todoFeature.push(todo);
//     },
//     delTodo: (state, action) => {
//       state.todoFeature = state.todoFeature.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//     updateTodo: (state, action) => {
//       const update = state.todoFeature.find(
//         (item) => item.id === action.payload.id
//       );
//       if (update) {
//         update.name = action.payload.name;
//       }
//     },
//   },
// });

// export default todoSlice.reducer;

// export const { addTodo, delTodo, updateTodo } = todoSlice.actions;














import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load initial todos from localStorage
const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [
    { id: nanoid(), name: "Demo Task!", text: "This is a demo task." },

  ];
};

const initialState = {
  todoFeature: loadTodos(), // Initialize with localStorage data
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // ✅ Add Todo (with localStorage sync)
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        name: action.payload.input,
        text: action.payload.text,
      };
      state.todoFeature.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todoFeature)); // Update localStorage
    },

    // ❌ Delete Todo (with localStorage sync)
    delTodo: (state, action) => {
      state.todoFeature = state.todoFeature.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(state.todoFeature)); // Update localStorage
    },

    // ✏️ Update Todo (with localStorage sync)
    updateTodo: (state, action) => {
      const todoToUpdate = state.todoFeature.find(
        (item) => item.id === action.payload.id
      );
      if (todoToUpdate) {
        todoToUpdate.name = action.payload.name;
        todoToUpdate.text = action.payload.text;
        localStorage.setItem("todos", JSON.stringify(state.todoFeature)); // Update localStorage
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, delTodo, updateTodo } = todoSlice.actions;

