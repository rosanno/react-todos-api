import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useFetchTodos } from "../hooks/useFetchTodos";

const Pagination = ({ skip, setSkip, limit }) => {
  const { total } = useFetchTodos(
    `https://dummyjson.com/todos?limit=5&skip=${skip}`
  );

  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.floor(skip / limit) + 1;
  let startPage = Math.max(currentPage - 5, 1);
  let endPage = Math.min(startPage + 9, totalPages);

  if (endPage - startPage < 9) {
    startPage = Math.max(endPage - 9, 1);
  }

  const paginationLinks = [];
  for (let i = startPage; i <= endPage; i++) {
    const newSkip = (i - 1) * limit;

    paginationLinks.push(
      <button
        key={i}
        onClick={() => setSkip(newSkip)}
        disabled={newSkip === skip}
        className={`mx-1 bg-gray-300/5 rounded-md px-2 text-white hover:bg-gray-300/10 transition duration-300 ${
          newSkip === skip && "disabled:bg-gray-200/20 cursor-not-allowed"
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center">
        <button
          onClick={() => setSkip(Math.max(skip - limit, 0))}
          disabled={skip === 0}
          className={`bg-gray-300/5 text-gray-200 px-1.5 rounded-md mr-1 hover:bg-gray-300/10 transition duration-300 ${
            skip === 0 && "cursor-not-allowed"
          }`}
        >
          <RxCaretLeft size="25px" className="p-0 m-0" />
        </button>
        {paginationLinks}
        <button
          onClick={() => setSkip(skip + limit)}
          disabled={skip === (totalPages - 1) * limit}
          className={`bg-gray-300/5 text-gray-200 px-1.5 rounded-md ml-1 hover:bg-gray-300/10 transition duration-300 ${
            skip === (totalPages - 1) * limit && "cursor-not-allowed"
          }`}
        >
          <RxCaretRight size="25px" className="p-0 m-0" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
