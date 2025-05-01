import React from "react";

// here we pass the state value (name) we recive from the parent prop and we destructer here down
const Child2 = ({ name }) => {
  return (
    <>
      <div className="text-center font-bold text-3xl mt-6">Child - 2</div>
      {/* here we recieve name from parent app.jsx file and use the name here !!! */}
      <p className="text-center font-bold text-2xl ">User : {name} </p>
    </>
  );
};

export default Child2;
