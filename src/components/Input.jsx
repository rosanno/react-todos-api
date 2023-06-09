import { FiPlus } from "react-icons/fi";

const Input = ({ todoInput, setTodoInput, onSubmit }) => {
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-md">
      <input
        onChange={(e) => setTodoInput(e.target.value)}
        type="text"
        value={todoInput}
        className="w-full p-3 outline-none bg-transparent text-gray-200"
        placeholder="Add todos..."
      />
      <div
        onClick={onSubmit}
        className="bg-rose-700 hover:bg-rose-800 transition-colors duration-300 cursor-pointer p-3 overflow-hidden rounded-tr-md rounded-br-md"
      >
        <FiPlus size="25px" className="text-white" />
      </div>
    </div>
  );
};

export default Input;
