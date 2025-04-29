import React from "react";
import { useContext } from "react";
import { countText } from "../App";

const Child = () => {
  const { count, theme } = useContext(countText);
  return (
    <div className={`p-1 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-950 text-white'} rounded-full`}>
      <p>Check-Count = {count} </p>
    </div>
  );
};

export default Child;
