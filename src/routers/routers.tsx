import { lazy } from "react";
import { buildRoutes, RouteConfig } from "./utils";

const routeConfig: RouteConfig[] = [
  {
    element: lazy(() => import("../layouts/BasicLayout/basicLayout")),
    middlewares: [
      // lazy(() => import("@/middlewares/AuthMiddleware")),
      // lazy(() => import("@/middlewares/AdminMiddleware")),
    ],
    children: [
      {
        path: "/admin",
        element: lazy(() => import("@pages/Home/home")),
      },
    ],
  },
  {
    element: lazy(() => import("../layouts/LoginLayout/loginLayout")),
    children: [
      {
        path: "/",
        element: lazy(() => import("@pages/Login/login")),
      },
    ],
  },
];

export const routes = buildRoutes(routeConfig);
