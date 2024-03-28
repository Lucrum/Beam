import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Profile from "./pages/Profile";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
