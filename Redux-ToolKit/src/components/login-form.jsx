import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "../Features/todo";

export function LoginForm({ className, ...props }) {
  const [input, setInput] = useState("");
  const todo = useSelector((state) => state.todoFeature);
  const dispatch = useDispatch();
  function add() {
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className={"bg-gradient-to-r from-blue-400 to-gray-800 text-white"}>
        <CardHeader>
          <CardTitle>Add Your Task!</CardTitle>
          <CardDescription>Enter Yor Task And Do It Fast</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // This prevents page refresh
              add();
            }}
            className=""
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Add Todo</Label>
                <Input
                  type="text"
                  className={"text-white"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Add Task"
                />
              </div>
              <div className="flex items-center flex-col gap-3">
                <Button
                  type="submit"
                  className="w-[150px] border-1 hover:border-2 cursor-pointer 
                hover:bg-gray-950 hover:text-white hover:border-blue-500"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
