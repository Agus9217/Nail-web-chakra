import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";

export const initRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: []
  }
])
