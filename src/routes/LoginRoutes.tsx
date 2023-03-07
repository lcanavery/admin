import { lazy } from "react";
import React from "react";
// project import
import Loadable from "../components/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

// render - login
const AuthLogin = Loadable(lazy(() => import("../pages/authentication/Login")));
const Registry = Loadable(
  lazy(() => import("../pages/authentication/Register"))
);
// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "",
  element: <MinimalLayout />,
  children: [
    {
      path: "",
      index: true,
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <Registry />,
    },
  ],
};

export default LoginRoutes;
