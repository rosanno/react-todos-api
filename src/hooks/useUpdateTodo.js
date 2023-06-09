export const useUpdateTodo = (todos, setTodos) => {
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

  return { onUpdate };
};
