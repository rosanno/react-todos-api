import { useState } from "react";
import Input from "../components/Input";
import TodoItem from "../components/TodoItem";
import { useFetchTodos } from "../hooks/useFetchTodos";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useAddTodo } from "../hooks/useAddTodo";
import { useUpdateTodo } from "../hooks/useUpdateTodo";

const Todos = () => {
  const [skip, setSkip] = useState(0);
  const limit = 5;
  const { todos, setTodos, loading } = useFetchTodos(
    `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`,
    skip
  );
  const { addTodo, setTodoInput, todoInput } = useAddTodo(todos, setTodos);
  const { onUpdate } = useUpdateTodo(todos, setTodos);

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

  return (
    <div className="w-full max-w-[900px] mx-auto mt-5">
      <form onSubmit={addTodo}>
        <Input
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          onSubmit={addTodo}
        />
      </form>
      {loading ? (
        <Loading />
      ) : (
        <>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
          <Pagination skip={skip} setSkip={setSkip} limit={limit} />
        </>
      )}
    </div>
  );
};

export default Todos;
