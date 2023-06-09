import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";

const Header = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto mt-10 flex items-center gap-3">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center gap-2">
          <FcTodoList size="30px" />
          <h1 className="text-gray-300 text-2xl font-semibold">To-Do List</h1>
        </Link>
        <Link
          to="/random/todo"
          className="bg-rose-500 py-2 px-4 rounded-sm text-white font-medium"
        >
          Random Todo
        </Link>
      </div>
    </div>
  );
};

export default Header;
