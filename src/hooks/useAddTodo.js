import { useState } from "react";

export const useAddTodo = (todos, setTodos) => {
  const [todoInput, setTodoInput] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: todoInput,
          completed: false,
          userId: Math.floor(Math.random() * 100),
        }),
      });
      const data = await res.json();
      const newTodo = [data, ...todos];
      setTodos(newTodo);
      setTodoInput("");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    todoInput,
    setTodoInput,
    addTodo,
  };
};
