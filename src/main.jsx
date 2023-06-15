import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { initRouter } from "./Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "./assets/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={ Theme }>
      <RouterProvider router={initRouter} />
    </ChakraProvider>
  </React.StrictMode>
)
