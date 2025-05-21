// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import {auth} from "../Firebase/firebaseconfig"
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase CDN se global `firebase` object access karo
    const unsubscribe = window.firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  function signup(email, password) {
    return window.firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return window.firebase.auth().signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return window.firebase.auth().signOut();
  }

  const value = { user, loading, signup, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}