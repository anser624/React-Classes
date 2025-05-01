import { useState } from "react";
import "./App.css";
import Child1 from "./components/child1";
import Child2 from "./components/child2";

// the topic of this project is state lifting in react, which means we are passing the state from child to parent and then to another child.

function App() {
  // here we use the state to send and recieve data from child1 to child2 and update date from chid1
  const [name, setName] = useState("");
  return (
    <div className="bg-blue-200 h-screen">
      {/* here we pass the stat function to update the value from child in parent file  */}
      <Child1 setName={setName} />
      <h1 className="text-center text-2xl capitalize font-bold">
        {" "}
        here is app jsx user : {name}{" "}
      </h1>
      {/* here we pass the state value to child2 to display the value from child1 */}
      <Child2 name={name} />
    </div>
  );
}

export default App;
