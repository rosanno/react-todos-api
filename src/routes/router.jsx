import { createBrowserRouter } from "react-router-dom";
import Todos from "../views/Todos";
import Layout from "../components/Layout";

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
    ],
  },
]);
