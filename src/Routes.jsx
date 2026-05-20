import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Dashboardinstitutiontats from "pages/Dashboardinstitutiontats";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dashboardinstitutiontats",
      element: <Dashboardinstitutiontats />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
