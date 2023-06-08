import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="w-full h-screen overflow-auto bg-neutral-800">
      <Outlet />
    </main>
  );
};

export default Layout;
