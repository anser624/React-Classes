import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./compnents/Navbar";
import About from "./compnents/About";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center my-5">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="container d-flex justify-content-center my-2">
        Vite + React
      </h1>
      <div className="d-flex justify-content-center w-100 btn-submit w-25 btn-light my-5">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="container text-center mt-2 w-100 bg-light p-3">
        <p>First Class Of React and Vite !</p>
        <p className="read-the-docs ">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <About/>
    </>
  );
}

export default App;
