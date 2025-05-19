import { useSelector, useDispatch } from "react-redux";
import { LoginForm } from "./components/login-form";
import { delTodo, updateTodo } from "./Features/todo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Input } from "./components/ui/input";
import { useState } from "react";
import bgimg from "./assets/bgimg.jpg";
function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todoFeature);
  const [alert, setalert] = useState(false);

  const handleUpdate = (id, name) => {
    console.log(id, name);
    setInput("");
    if (input === "") {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, 3000);
      e.preventDefault();
      return;
    }

    dispatch(updateTodo({ id, name }));
  };
  return (
    <div className="bg-[url('')] bg-cover bg-center bg-no-repeat h-full py-20">
      <div className="flex justify-center my-10">
        <LoginForm />
      </div>
      <div className="flex flex-col justify-center my-10">
        <h1 className="text-6xl font-bold text-center">Todo List</h1>
        <div className="flex flex-wrap ms-7 gap-5 p-10">
          {todos?.map((item) => (
           <div key={item.id} className="gap-10">
             <Card key={item.id} className="w-96 bg-gray-200">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>Here Your Task To Do</CardDescription>
              </CardHeader>
              <CardContent>
                <button
                   onClick={() => dispatch(delTodo(item.id))}
                   className="bg-red-500 w-full hover:bg-red-600 cursor-pointer  text-white px-2 py-1 rounded"
                 >
                   Delete
                 </button>
              </CardContent>
              <CardFooter>
                <p
                   className="bg-blue-500 text-center w-full cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded">
                   <AlertDialog>
                     <AlertDialogTrigger>Update</AlertDialogTrigger>
                     <AlertDialogContent>
                       <AlertDialogHeader>
                         <AlertDialogTitle>Update The Task</AlertDialogTitle>
                         <AlertDialogDescription>
                           <Input
                             type="text"
                             required
                             className={"text-black"}
                             value={input}
                             onChange={(e) => setInput(e.target.value)}
                             placeholder="Add Task"
                           />
                           {alert && <p className="text-red-600 font-medium text-md ms-3 my-3">Please Enter A Value </p>}
                         </AlertDialogDescription>
                       </AlertDialogHeader>
                       <AlertDialogFooter>
                         <AlertDialogAction
                         onClick={(e) => handleUpdate(item.id , input)}
                           className="bg-blue-500
                       hover:bg-blue-800 cursor-pointer text-white"
                         >
                           Update !
                         </AlertDialogAction>
                       </AlertDialogFooter>
                     </AlertDialogContent>
                   </AlertDialog>
                 </p>
              </CardFooter>
            </Card>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

// <div
//               key={item.id}
//               className="flex justify-between items-center p-2 bg-gray-200 rounded">
//               <p>{item.name}</p>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => dispatch(delTodo(item.id))}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//                 <button onClick={() => { dispatch(updateTodo(item.id ,input))}}
//                   className="bg-blue-500 text-white px-2 py-1 rounded">
//                   <AlertDialog>
//                     <AlertDialogTrigger>Update</AlertDialogTrigger>
//                     <AlertDialogContent>
//                       <AlertDialogHeader>
//                         <AlertDialogTitle>Update</AlertDialogTitle>
//                         <AlertDialogDescription>
//                           <Input
//                             type="text"
//                             required
//                             className={"text-black"}
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             placeholder="Add Task"
//                           />
//                           {alert && <p className="text-red-600 font-medium text-center text-md my-3">Please Enter A Value </p>}
//                         </AlertDialogDescription>
//                       </AlertDialogHeader>
//                       <AlertDialogFooter>
//                         <AlertDialogAction
//                         onClick={() => handleUpdate(item.id , input)}
//                           className="bg-blue-500
//                       hover:bg-blue-800 cursor-pointer text-white"
//                         >
//                           Update !
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </button>
//               </div>
//             </div>
