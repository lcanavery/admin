import { lazy } from "react";
import React from "react";
// proimport React from 'react'ject import
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";
import List from "../pages/Libros/AbmComponents/List";
import Update from "../pages/Libros/AbmComponents/Update";
import Create from "../pages/Libros/AbmComponents/Create";
import Show from "../pages/Libros/AbmComponents/Show";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "not-authorized",
      element: <>No estas autorizado a ver esta pagina</>,
    },
    {
      path: "libros",
      element: <List />,
    },
    {
      path: "libros/update/:id",
      element: <Update />,
    },
    {
      path: "libros/create",
      element: <Create />,
    },
    {
      path: "libros/show/:id",
      element: <Show />,
    },
  ],
};

export default MainRoutes;
