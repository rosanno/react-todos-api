export const useUpdateSingleTodo = (setTodo, todo) => {
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

  return { onUpdate };
};
