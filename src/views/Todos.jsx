import { useState } from "react";
import Input from "../components/Input";
import TodoItem from "../components/TodoItem";
import { useFetchTodos } from "../hooks/useFetchTodos";

const Todos = () => {
  const { todos, setTodos, loading } = useFetchTodos();
  const [todoInput, setTodoInput] = useState("");

  const onDelete = async (todoId) => {
    try {
      const res = await fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setTodos(todos.filter((todo) => todo.id !== data.id));
    } catch (error) {
      console.log(error);
    } finally {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    }
  };

  const onUpdate = async (todoId, completed) => {
    try {
      const res = await fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completed: !completed,
        }),
      });
      const data = await res.json();
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: data.completed } : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.log(error);
    } finally {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !completed } : todo
      );
      setTodos(updatedTodos);
    }
  };

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

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="w-full max-w-[900px] mx-auto mt-10">
      <form onSubmit={addTodo}>
        <Input todoInput={todoInput} setTodoInput={setTodoInput} />
      </form>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default Todos;
