import React from "react";
import { useContext } from "react";
import { countText } from "../App";

const Counter = () => {
  const { count, theme ,toggleTheme} = useContext(countText);

  return (
    <>
      <div
        className={`p-4 rounded-full cursor-pointer 
        ${
          theme === "light" ? "bg-white text-black" : "bg-gray-950 text-white"
        }`}
        onClick={toggleTheme}
      >
        <h1 className="text-2xl uppercase font-bold text-center">
          Check count: {count}{" "}
        </h1>
        <h1 className="text-2xl uppercase font-bold text-center">
          Check theme: {theme}{" "}
        </h1>
      </div>
    </>
  );
};

export default Counter;
