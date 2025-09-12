import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import FormModalApi from "./contextApi/FormModalApi";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <FormModalApi>
      <RouterProvider router={router} />
    </FormModalApi>
  );
};

export default App;
