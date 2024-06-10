import { allRoutes } from "./configs/route-configs/routes-config.js";
import { Route, Routes } from "react-router-dom";
import  { Suspense } from "react";
import AppLayout from "./components/layouts/AppLayout.jsx";
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<AppLayout/>}>
        {allRoutes.map((item) => (
          <Route path={item.path} key={item.key} element={<item.component />} />
        ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

