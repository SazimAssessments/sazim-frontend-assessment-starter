import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import BaseLayout from "../shared/layouts/BaseLayout";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </BaseLayout>
    </Router>
  );
};

export default AppRoutes;
