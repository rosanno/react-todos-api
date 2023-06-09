import { createBrowserRouter } from "react-router-dom";
import Todos from "../views/Todos";
import Layout from "../components/Layout";
import NotFound from "../views/NotFound";
import Todo from "../views/Todo";
import RandomTodo from "../views/RandomTodo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Todos /> },
      {
        path: "/",
        element: <Todos />,
      },
      {
        path: "/todo/:id",
        element: <Todo />,
      },
      {
        path: "/random/todo",
        element: <RandomTodo />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
