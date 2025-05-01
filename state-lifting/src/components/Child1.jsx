import React from "react";

// here we pass the state function (setName) we recive from the parent prop and we destructer here down

const Child1 = ({ setName }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col py-10">
        <h1 className="font-bold text-5xl">Child - 1</h1>
        {/* here we set the name from child1 to parent and we pass the value to child2 */}
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="enter name"
          className="rounded-full text-amber-950 border py-2 text-center my-4 border-black"
        />
        {/* we use onchange event to make dynamic value and update the value  */}
      </div>
    </>
  );
};

export default Child1;
