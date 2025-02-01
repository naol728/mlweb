import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Analytics from "./pages/analytics";
import Profile from "./pages/profile";
import Setting from "./pages/setting";
import App from "./App";
const route = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      { path: "/profile", element: <Profile /> },
      { path: "/setting", element: <Setting /> },
    ],
  },
]);
export default function Routing() {
  return <RouterProvider router={route} />;
}
