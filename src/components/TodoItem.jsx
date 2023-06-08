import { AiFillCheckCircle } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  return (
    <div className="bg-neutral-700 shadow-md rounded-md my-4 p-3">
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          {todo.completed ? (
            <AiFillCheckCircle
              className="text-green-500"
              size="24px"
              onClick={() => onUpdate(todo.id, todo.completed)}
            />
          ) : (
            <FaRegCircle
              className="text-gray-400"
              size="20px"
              onClick={() => onUpdate(todo.id, todo.completed)}
            />
          )}
          <h1 className="text-white">{todo.todo}</h1>
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="block ml-auto bg-gray-400/20 hover:bg-gray-400/10 transition-colors duration-200 p-4 rounded-full"
        >
          <BsTrash className="text-white" size="15px" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
