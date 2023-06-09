export const useDeleteSingleTodo = (setTodo) => {
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

  return {
    onDelete,
  };
};
