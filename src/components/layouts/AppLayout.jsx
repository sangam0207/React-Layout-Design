import { Outlet } from "react-router-dom";
import Header from "../templates/Header";
import Sidebar from "../templates/sidebar/Sidebar";
import { Suspense } from "react";
const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-auto relative">
      <Sidebar />
      <div className="w-full relative">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main className="px-5 py-3 min-h-[calc(100vh-70px)]">
            <Outlet />
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default AppLayout;