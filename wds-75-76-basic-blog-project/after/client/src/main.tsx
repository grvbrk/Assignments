import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes/Routes.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={createBrowserRouter(routes)} />
  // </React.StrictMode>
);
