import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import Loading from "../components/Loading";
import { useUpdateSingleTodo } from "../hooks/useUpdateSingleTodo";
import { useDeleteSingleTodo } from "../hooks/useDeleteSingleTodo";
import NotFound from "./NotFound";

const RandomTodo = () => {
  const [todo, setTodo] = useState([]);
  const { onUpdate } = useUpdateSingleTodo(setTodo, todo);
  const [loading, setLoading] = useState(false);
  const { onDelete } = useDeleteSingleTodo(setTodo);

  useEffect(() => {
    const getTodo = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/todos/random");
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
        <NotFound title="No Data" />
      )}
    </div>
  );
};

export default RandomTodo;
