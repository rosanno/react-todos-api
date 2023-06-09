import React, { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import Loading from "../components/Loading";

const RandomTodo = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <TodoItem todo={todo} />
    </div>
  );
};

export default RandomTodo;
