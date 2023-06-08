import { useState, useEffect } from "react";

export const useFetchTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();

        setTodos(data.todos);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getTodos();
  }, []);

  return { todos, loading, setTodos };
};
