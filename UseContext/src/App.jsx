import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbr";
import Counter from "./Component/Counter";

export const countText = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [theme, settheme] = useState("light");

  const toggleTheme = () => {
    settheme(theme === "light" ? "dark" : "light");
    setCount(count + 1);
  };
  return (
    <>
      <countText.Provider value={{ count, theme,toggleTheme }}>
        <Navbar />
        <div className="flex justify-center items-center gap-9 h-56 bg-gray-800">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="w-[150px]" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-[150px]" alt="React logo" />
          </a>
        </div>
        <div className="flex justify-center items-center py-10 flex-col gap-5 text-white bg-gray-800">
          <h1 className="text-5xl font-bold mt-3 text-center bg-gray-800">
            Vite + React
          </h1>
          <button
            className={`font-bold border py-2 px-6 rounded-3xl cursor-pointer uppercase ${
              theme === "light"
                ? "bg-white text-black"
                : "bg-gray-950 text-white"
            }`}
            onClick={toggleTheme}
          >
            count is {count} :: {theme}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <p className="text-center">
            Click on the Vite and React logos to learn more
          </p>
          <Counter />
        </div>
      </countText.Provider>
    </>
  );
}

export default App;
