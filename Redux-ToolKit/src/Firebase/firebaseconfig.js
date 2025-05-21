import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/11.8.0/firebase-firestore.js";
import { getAuth }  from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDHvFI3EgE7ndln_1dEIUVtbDVATSs9jps",
    authDomain: "react-todo-514f9.firebaseapp.com",
    projectId: "react-todo-514f9",
    storageBucket: "react-todo-514f9.firebasestorage.app",
    messagingSenderId: "906662410570",
    appId: "1:906662410570:web:2fb9d0efbaf02b843569b3"
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
 export const db =  getFirestore(app)
 export const auth = getAuth(app);