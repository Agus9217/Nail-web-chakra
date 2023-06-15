import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../Pages/Home";

export const initRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      }
    ]
  }
])
