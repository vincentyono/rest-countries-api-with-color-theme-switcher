import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import HomePage from "./pages/home";

import "./global.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/800.css";

const router = createBrowserRouter([
  {
    id: "not-found",
    path: "*",
    element: <h1>Not Found</h1>,
  },
  {
    id: "home",
    path: "/",
    Component() {
      document.title = "Home";
      return <HomePage />;
    },
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
