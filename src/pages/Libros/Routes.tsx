import React, { lazy } from "react";
import Loadable from "../../components/Loadable";
import config from "./config";
const List = Loadable(lazy(() => import("./AbmComponents/List")));
const Update = Loadable(lazy(() => import("./AbmComponents/Update")));
const Show = Loadable(lazy(() => import("./AbmComponents/Show")));
const Create = Loadable(lazy(() => import("./AbmComponents/Create")));

const routes = [
  {
    path: "libros",
    element: <List config={config} />,
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
];
export default routes;
