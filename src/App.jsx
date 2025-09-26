import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collections from "./Pages/Collections";
import UseCasses from "./Pages/UseCasses";
import Team from "./Pages/Team";
import NotFound from "./Pages/NotFound";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/collection",
          element: <Collections />,
        },
        {
          path: "/use-casses",
          element: <UseCasses />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
