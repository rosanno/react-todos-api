import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import NotFound from "./NotFound";
import Loading from "../components/Loading";

const Todo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDelete = async (todoId) => {
    try {
      const res = await fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: "DELETE",
      });
      await res.json();
      setTodo([]);
    } catch (error) {
      console.log(error);
    } finally {
      setTodo([]);
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
      console.log(data);
      const updatedTodos = { ...todo, completed: !completed };
      setTodo(updatedTodos);
    } catch (error) {
      console.log(error);
    } finally {
      const updatedTodos = { ...todo, completed: !completed };
      setTodo(updatedTodos);
    }
  };

  useEffect(() => {
    const getTodo = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/todos/${id}`);
        const data = await res.json();

        setTodo(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getTodo();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="w-full max-w-[900px] mx-auto mt-10">
      {todo.length !== 0 ? (
        <TodoItem onUpdate={onUpdate} onDelete={onDelete} todo={todo} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Todo;
