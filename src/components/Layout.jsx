import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="w-full h-screen overflow-auto bg-neutral-800">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
