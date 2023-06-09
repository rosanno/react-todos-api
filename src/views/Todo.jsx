import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import { useUpdateSingleTodo } from "../hooks/useUpdateSingleTodo";
import { useDeleteSingleTodo } from "../hooks/useDeleteSingleTodo";

const Todo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const { onUpdate } = useUpdateSingleTodo(setTodo, todo);
  const { onDelete } = useDeleteSingleTodo(setTodo);

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
        <NotFound title="No Data" />
      )}
    </div>
  );
};

export default Todo;
