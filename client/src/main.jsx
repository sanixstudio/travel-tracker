import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./context/appContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/profile", element: <Profile /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AppContextProvider>
  </React.StrictMode>
);
