import { useState, useEffect } from "react";

export const useFetchTodos = (url, skip) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();

        setTodos(data.todos);
        setTotal(data.total);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getTodos();
  }, [skip, url]);

  return { todos, loading, setTodos, total };
};
