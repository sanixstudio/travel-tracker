import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import App from "./App.jsx";
import { Login, Register } from "./pages";

import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <h1>Error:</h1> },
  { path: "/login", element: <Login />, errorElement: <h1>Error:</h1> },
  { path: "/register", element: <Register />, errorElement: <h1>Error:</h1> },
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
